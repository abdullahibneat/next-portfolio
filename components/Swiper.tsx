import React, { FunctionComponent, useState, TouchEvent, CSSProperties } from "react"
import { getTouchXY } from "../utils"
import styles from "@styles/Swiper.module.css"

type SwipableProps = {
    shake?: boolean,
    zDistance: number,
    index: number,
    onSwipe?: (index: number) => void
}

type MouseEvent = {
    pageX: number,
    pageY: number
}

// Swipable component used as a wrapper around content
const Swipable: FunctionComponent<SwipableProps> = ({ children, shake = false, zDistance, index, onSwipe = () => {} }) => {
    // Keep track of mouse position
    const initialState = {
        down: { x: 0, y: 0 },
        move: false,
        current: { x: 0, y: 0 }
    }
    const [mouseState, setMouseState] = useState(initialState)

    // Control opacity based on how much the component has moved in X and Y directions
    const opacityX = 100 - Math.abs((mouseState.current.x - mouseState.down.x) / 4)
    const opacityY = 100 - Math.abs((mouseState.current.y - mouseState.down.y) / 4)
    const opacity = Math.min(opacityX, opacityY)

    // Update CSS variables to move and rotate item whilst being dragged
    const style = {
        "--zIndex": -index,
        "--translateX": (mouseState.current.x - mouseState.down.x) / 2 + "px",
        "--translateY": (mouseState.current.y - mouseState.down.y) / 2 + "px",
        "--rotateZ": (mouseState.current.x - mouseState.down.x) / 25 + "deg",
        "--rotateY": -20 + "deg",
        "--translateZ": -index * zDistance + "px",
        "--opacity": opacity + "%",
        cursor: index === 0? "move" : "initial"
    } as CSSProperties

    // MOUSE HANDLERS
    // Start tracking component's position
    const onMouseDown = ({ pageX, pageY }: MouseEvent) => {
        const down = { x: pageX, y: pageY }
        const move = true
        setMouseState({ down, move, current: down })
    }

    // Update component's current position as the mouse moves
    const onMouseMove = ({ pageX, pageY }: MouseEvent) => {
        if(mouseState.move)
            setMouseState({...mouseState, current: { x: pageX, y: pageY }})
    }

    // Call onSwipe once opacity threshold is below 76 and reset component position
    const onMouseUp = () => {
        if(opacity < 76) onSwipe(index)
        setMouseState(initialState)
    }

    const onTouchStart = (e: TouchEvent) => onMouseDown(getTouchXY(e))
    const onTouchMove = (e: TouchEvent) => onMouseMove(getTouchXY(e))

    const mouseProps = index === 0? {
        onMouseDown, onTouchStart,
        onMouseMove, onTouchMove,
        onMouseUp, onTouchEnd: onMouseUp, onTouchCancel: onMouseUp,
        onMouseLeave: onMouseUp
    } : {}

    // Remove CSS transition by adding ".moved" class whilst the component is moving
    // This is necessary for the component to follow the mouse precisely, otherwise there is a delay.
    const moved = mouseState.move && mouseState.down !== mouseState.current

    return <div style={style} className={`${styles.swipable} ${moved? styles.moved : ""} ${shake? styles.shake : ""}`} {...mouseProps}>
        {children}
    </div>
}

type SwiperProps = {
    className?: string,
    zDistance?: number,
    shakeFirst?: boolean
}

const Swiper: FunctionComponent<SwiperProps> = ({ children, className = "", zDistance = 50, shakeFirst = false }) => {
    // Control first card animation
    const [shake, setShake] = useState(shakeFirst)

    // Convert children elements to an array
    const [cards] = useState(React.Children.toArray(children))
    // Control the z-index position of each card
    // By doing this using React state it allows CSS transitions to take place
    // i.e. smoothly move the card from front to back
    const [cardPositions, setCardPositions] = useState(cards.map((_, i) => i))

    // Once a card has been swiped, push it to the end of the list
    const handleSwipe = () => {
        setCardPositions(cardPositions.map(i => i === 0? cardPositions.length - 1 : i - 1))
    }

    // Remove shake animation on first mouse interaction
    const mouseProps = {
        onMouseDown: () => setShake(false),
        onTouchStart: () => setShake(false)
    }

    return <div className={`${styles.swiper} ${className}`} {...mouseProps}>
        {cards.map((content, i) => <Swipable shake={shake && i == 0} zDistance={zDistance} index={cardPositions[i]} key={i} onSwipe={handleSwipe}>
            {content}
        </Swipable>)}
    </div>
}

export default Swiper
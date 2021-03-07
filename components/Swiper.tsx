import React, { FunctionComponent, useState, TouchEvent } from "react"
import CSS from "csstype"
import styles from "../styles/Swiper.module.css"

type SwipableProps = {
    index: number,
    onSwipe?: (index: number) => void
}

type MouseEvent = {
    pageX: number,
    pageY: number
}

// Swipable component used as a wrapper around content
const Swipable: FunctionComponent<SwipableProps> = ({ children, index, onSwipe = () => {} }) => {
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

    // Move and rotate item whilst being dragged
    const style: CSS.Properties = {
        zIndex: -index,
        transform: `translate(${(mouseState.current.x - mouseState.down.x) / 2}px, ${(mouseState.current.y - mouseState.down.y) / 2}px)
            rotateZ(${(mouseState.current.x - mouseState.down.x) / 4}deg) rotateY(-20deg) translateZ(${-index * 50}px)`,
        opacity: `${opacity}%`
    }

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

    // Helper function to get pageX and pageY from touch devices
    const getTouchXY = (e: TouchEvent) => {
        return {
            pageX: e.targetTouches[0].pageX,
            pageY: e.targetTouches[0].pageY
        }
    }

    const onTouchStart = (e: TouchEvent) => onMouseDown(getTouchXY(e))
    const onTouchMove = (e: TouchEvent) => onMouseMove(getTouchXY(e))

    const mouseProps = {
        onMouseDown, onTouchStart,
        onMouseMove, onTouchMove,
        onMouseUp, onTouchEnd: onMouseUp, onTouchCancel: onMouseUp,
        onMouseLeave: onMouseUp
    }

    // Remove CSS transition by adding ".moved" class whilst the component is moving
    // This is necessary for the component to follow the mouse precisely, otherwise there is a delay.
    const moved = mouseState.move && mouseState.down !== mouseState.current

    return <div style={style} className={`${styles.swipable} ${moved? styles.moved : ""}`} {...mouseProps}>
        {children}
    </div>
}

type SwiperProps = {
    className?: string
}

const Swiper: FunctionComponent<SwiperProps> = ({ children, className = "" }) => {
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

    return <div className={`${styles.swiper} ${className}`}>
        {cards.map((content, i) => <Swipable index={cardPositions[i]} key={i} onSwipe={handleSwipe}>
            {content}
        </Swipable>)}
    </div>
}

export default Swiper
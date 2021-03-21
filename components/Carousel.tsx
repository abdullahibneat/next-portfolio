import React, { CSSProperties, FunctionComponent, TouchEvent, useRef, useState } from "react"
import styles from "../styles/Carousel.module.css"
import { getTouchXY } from "../utils"

type MouseEvent = {
    pageX: number,
    pageY: number
}

const CarouselSlide: FunctionComponent = ({ children }) => <div className={styles.slide}>
    {children}
</div>

const Carousel: FunctionComponent = ({ children }) => {
    const carousel = useRef<HTMLDivElement>()

    const initialMouse = {
        down: 0,
        move: false
    }
    const [mouse, setMouse] = useState(initialMouse)

    // Need to store current dx (i.e. since mousedown) AND previous dx (i.e. before current mousedown)
    const [dx, setDX] = useState({ current: 0, prev: 0 })

    const carouselStyle: CSSProperties = {
        transform: `translateX(${dx.prev + dx.current}px)`,
        cursor: mouse.move? "grabbing" : "grab"
    }

    const onMouseDown = ({ pageX }: MouseEvent) => {
        setMouse({ move: true, down: pageX })
    }

    const onMouseMove = ({ pageX }: MouseEvent) => {
        // Check if scrolling outside of boundaries
        const current = pageX - mouse.down
        const currDX = dx.prev + current
        
        // Left boundary: currDX < 0
        // Right boundary:  scrollWidth returns the width of carousel (including overflow),
        //                  but appears to also include the screen witdh (offsetWidth):
        //                  -carousel.current.scrollWidth + carousel.current.offsetWidth
        // Update DX only if mouse is moving AND user is still within boundaries
        if(mouse.move && currDX < 0 && currDX > -carousel.current.scrollWidth + carousel.current.offsetWidth)
            // Update the current dx
            setDX({ ...dx, current })
    }

    const onMouseUp = () => {
        setMouse(initialMouse)
        // Set previous dx to be the current "translateX" value (as computed by carouselStyle above)
        setDX({ prev: dx.prev + dx.current, current: 0 })
    }

    const onTouchStart = (e: TouchEvent) => onMouseDown(getTouchXY(e))
    const onTouchMove = (e: TouchEvent) => onMouseMove(getTouchXY(e))

    const mouseProps = {
        onMouseDown, onTouchStart,
        onMouseMove, onTouchMove,
        onMouseUp, onMouseLeave: onMouseUp, onTouchEnd: onMouseUp, onTouchCancel: onMouseUp
    }

    return <div style={{ overflow: "hidden" }} {...mouseProps}>
        <div ref={carousel} style={carouselStyle} className={styles.carousel}>
            {React.Children.map(children, (c, i) => <CarouselSlide key={i}>{c}</CarouselSlide>)}
        </div>
    </div>
}

export default Carousel
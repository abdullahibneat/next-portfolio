import React, { CSSProperties, FunctionComponent, MouseEvent, useState } from "react"
import styles from "../styles/Carousel.module.css"

const CarouselSlide: FunctionComponent = ({ children }) => <div className={styles.slide}>
    {children}
</div>

const Carousel: FunctionComponent = ({ children }) => {
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
        if(mouse.move)
            // Update the current dx
            setDX({ ...dx, current: pageX - mouse.down })
    }

    const onMouseUp = () => {
        setMouse(initialMouse)
        // Set previous dx to be the current "translateX" value (as computed by carouselStyle above)
        setDX({ prev: dx.prev + dx.current, current: 0 })
    }

    return <div style={{ overflow: "hidden" }} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
        <div style={carouselStyle} className={styles.carousel}>
            {React.Children.map(children, (c, i) => <CarouselSlide key={i}>{c}</CarouselSlide>)}
        </div>
    </div>
}

export default Carousel
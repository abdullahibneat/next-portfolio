import React, { CSSProperties, FunctionComponent, TouchEvent, useEffect, useRef, useState } from "react"
import styles from "../styles/Carousel.module.css"
import { getTouchXY } from "../utils"

type MouseEvent = {
    pageX: number,
    pageY: number
}

type SlideProps = {
    index: number,
    onCurrent?: (index: number) => void
}

const CarouselSlide: FunctionComponent<SlideProps> = ({ index, onCurrent = () => {}, children }) => {
    // Use IntersectionObserver to check if the slide is in view
    const [isCurrent, setCurrent] = useState(false)
    const ref = useRef()
    
    useEffect(() => {
        const io = new IntersectionObserver(([entry]) => setCurrent(entry.intersectionRatio >= 0.75), { threshold: [0, 0.25, 0.5, 0.75, 1] })
        io.observe(ref.current)

        // Need to disconnect IntersectionObserver once slide is unmounted.
        return () => { io.disconnect }
    }, [])

    // Update carousel's current index if this slide is in view
    useEffect(() => {
        if(isCurrent) onCurrent(index)
    }, [isCurrent])

    return <div ref={ref} className={`${styles.slide} ${isCurrent? styles.current : ""}`}>
        {children}
    </div>
}

type CarouselProps = {
    className?: string,
    style?: CSSProperties,
    dots?: boolean
}

const Carousel: FunctionComponent<CarouselProps> = ({ dots = true, className = "", style = {}, children }) => {
    const carousel = useRef<HTMLDivElement>()

    // Keep track of current slide
    const [current, setCurrent] = useState(0)

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

    return <div className={`${styles.wrapper} ${className}`} style={style} {...mouseProps}>
        <div ref={carousel} style={carouselStyle} className={styles.carousel}>
            {React.Children.map(children, (c, i) => <CarouselSlide key={i} index={i} onCurrent={setCurrent} >{c}</CarouselSlide>)}
        </div>
        {/* Display dots for each slide */}
        {dots && <div className={styles.dots}>
            {React.Children.map(children, (_, i) => <div key={i} className={`${styles.dot} ${current === i? styles.current : ""}`}></div>)}
        </div>}
    </div>
}

export default Carousel
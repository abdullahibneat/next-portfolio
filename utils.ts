import { TouchEvent } from "react"

// Helper function to get pageX and pageY from touch devices
export const getTouchXY = (e: TouchEvent) => {
    return {
        pageX: e.targetTouches[0].pageX,
        pageY: e.targetTouches[0].pageY
    }
}
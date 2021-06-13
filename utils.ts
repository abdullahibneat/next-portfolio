import { TouchEvent } from "react"

// Helper function to get pageX and pageY from touch devices
export const getTouchXY = (e: TouchEvent) => {
    return {
        pageX: e.targetTouches[0].pageX,
        pageY: e.targetTouches[0].pageY
    }
}

// For some reason, BlockContent uses "&nbsp;" for spaces in quotes.
// This utility funciton converts them back to normal spaces.
export const transformText = block => {
    return {
        ...block,
        children: block.children.map(c => ({ ...c, text: c.text.replace(/\s/g, " ") }))
    }
}
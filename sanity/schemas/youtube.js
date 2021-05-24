import React from "react"
import YouTube from "react-youtube"
import getYouTubeID from "get-youtube-id"

// Source: https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
const Preview = ({ value }) => <YouTube videoId={getYouTubeID(value.url)} />

export default {
    name: "youtube",
    type: "object",
    title: "YouTube Embed",
    fields: [
    {
        name: "url",
        type: "url",
        title: "YouTube video URL"
        }
    ],
    preview: {
        select: { url: "url" },
        component: Preview
    }
}
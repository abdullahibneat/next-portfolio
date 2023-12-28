import React from 'react'
import YouTubePlayer from 'react-player/youtube'
import {PreviewProps, defineField, defineType} from 'sanity'

type Props = PreviewProps & {
  url?: string
}

// Source: https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
const YouTubePreview = (props: Props) =>
  props.url ? <YouTubePlayer url={props.url} /> : <p>Add a YouTube URL</p>

export const youtube = defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: YouTubePreview,
  },
})

export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo, or direct video URL'
    },
    {
      name: 'file',
      title: 'Video File',
      type: 'file',
      description: 'Upload video file directly'
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'customImage'
    }
  ]
} 
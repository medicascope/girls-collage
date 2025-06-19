export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3
    },
    {
      name: 'subtitleEn',
      title: 'Subtitle (English)',
      type: 'text',
      rows: 3
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
      rows: 3
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'customImage'
    },
    {
      name: 'statistics',
      title: 'Statistics',
      type: 'array',
      of: [{type: 'statistic'}],
      validation: Rule => Rule.max(4)
    },
    {
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'link'
    },
    {
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'link'
    },
    {
      name: 'deanCard',
      title: 'Dean Welcome Card',
      type: 'object',
      fields: [
        {
          name: 'show',
          title: 'Show Dean Card',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'image',
          title: 'Dean Image',
          type: 'customImage'
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string'
        },
        {
          name: 'message',
          title: 'Message Preview',
          type: 'text',
          rows: 3
        },
        {
          name: 'link',
          title: 'Read More Link',
          type: 'link'
        }
      ]
    }
  ]
} 
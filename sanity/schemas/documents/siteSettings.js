export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'titleEn',
      title: 'Site Title (English)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'descriptionEn',
      title: 'Site Description (English)',
      type: 'text',
      rows: 3
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'customImage',
      validation: Rule => Rule.required()
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image'
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'contact'
    },
    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      of: [{type: 'socialMedia'}]
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      rows: 2
    },
    {
      name: 'footerTextEn',
      title: 'Footer Text (English)',
      type: 'text',
      rows: 2
    },
    {
      name: 'seo',
      title: 'Default SEO',
      type: 'seo'
    }
  ]
} 
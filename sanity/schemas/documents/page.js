export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'customImage'
    },
    {
      name: 'excerpt',
      title: 'Page Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief description of the page'
    },
    {
      name: 'showInNavigation',
      title: 'Show in Navigation',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'navigationOrder',
      title: 'Navigation Order',
      type: 'number',
      description: 'Order in navigation menu'
    },
    {
      name: 'parentPage',
      title: 'Parent Page',
      type: 'reference',
      to: [{type: 'page'}],
      description: 'For creating page hierarchies'
    },
    {
      name: 'template',
      title: 'Page Template',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Full Width', value: 'full-width'},
          {title: 'Landing Page', value: 'landing'},
          {title: 'Contact Page', value: 'contact'}
        ]
      },
      initialValue: 'default'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage'
    }
  }
} 
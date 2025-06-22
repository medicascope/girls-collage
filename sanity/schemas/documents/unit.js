export default {
  name: 'unit',
  title: 'College Unit',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Unit Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'nameEn',
      title: 'Unit Name (English)',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'vision',
      title: 'Vision',
      type: 'text',
      rows: 3
    },
    {
      name: 'mission',
      title: 'Mission',
      type: 'text',
      rows: 3
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon identifier (e.g., trophy, chart, brain, etc.)'
    },
    {
      name: 'image',
      title: 'Unit Image',
      type: 'customImage'
    },
    {
      name: 'head',
      title: 'Unit Head',
      type: 'reference',
      to: [{type: 'staff'}]
    },
    {
      name: 'headName',
      title: 'Head Name (Alternative)',
      type: 'string',
      description: 'Use this if not using staff reference'
    },
    {
      name: 'headTitle',
      title: 'Head Title (Alternative)',
      type: 'string',
      description: 'Use this if not using staff reference'
    },
    {
      name: 'staff',
      title: 'Unit Staff',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'staff'}]}]
    },
    {
      name: 'members',
      title: 'Number of Members',
      type: 'number'
    },
    {
      name: 'establishedYear',
      title: 'Established Year',
      type: 'number'
    },
    {
      name: 'objectives',
      title: 'Objectives',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'activities',
      title: 'Activities',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'achievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'committees',
      title: 'Committees',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'publications',
      title: 'Publications',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'contact'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
} 
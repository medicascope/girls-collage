export default {
  name: 'deanMessage',
  title: 'Dean Message',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Message Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'deanName',
      title: 'Dean Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'deanNameEn',
      title: 'Dean Name (English)',
      type: 'string'
    },
    {
      name: 'deanTitle',
      title: 'Dean Title',
      type: 'string'
    },
    {
      name: 'deanImage',
      title: 'Dean Photo',
      type: 'customImage',
      validation: Rule => Rule.required()
    },
    {
      name: 'shortMessage',
      title: 'Short Message (for hero card)',
      type: 'text',
      rows: 3,
      description: 'Brief message shown on homepage'
    },
    {
      name: 'fullMessage',
      title: 'Full Message',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'achievements',
      title: 'Notable Achievements',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'researchInterests',
      title: 'Research Interests',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'contact'
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }
  ]
} 
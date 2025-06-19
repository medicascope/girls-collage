export default {
  name: 'staff',
  title: 'Staff Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'nameEn',
      title: 'Full Name (English)',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'positionEn',
      title: 'Position (English)',
      type: 'string'
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'customImage'
    },
    {
      name: 'department',
      title: 'Department',
      type: 'reference',
      to: [{type: 'department'}]
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'blockContent'
    },
    {
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'specializations',
      title: 'Specializations',
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
      name: 'publications',
      title: 'Notable Publications',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'awards',
      title: 'Awards & Recognition',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'contact'
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [{type: 'socialMedia'}]
    },
    {
      name: 'officeHours',
      title: 'Office Hours',
      type: 'string'
    },
    {
      name: 'featured',
      title: 'Featured Staff',
      type: 'boolean',
      initialValue: false
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
      subtitle: 'position',
      media: 'photo'
    }
  }
} 
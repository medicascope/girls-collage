export default {
  name: 'program',
  title: 'Academic Program',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Program Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'titleEn',
      title: 'Program Title (English)',
      type: 'string'
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
      name: 'type',
      title: 'Program Type',
      type: 'string',
      options: {
        list: [
          {title: 'بكالوريوس', value: 'bachelor'},
          {title: 'ماجستير', value: 'master'},
          {title: 'دكتوراه', value: 'phd'},
          {title: 'دبلوم', value: 'diploma'},
          {title: 'زمالة', value: 'fellowship'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "6 سنوات", "2 سنة"'
    },
    {
      name: 'description',
      title: 'Program Description',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Program Image',
      type: 'customImage'
    },
    {
      name: 'department',
      title: 'Department',
      type: 'reference',
      to: [{type: 'department'}]
    },
    {
      name: 'objectives',
      title: 'Program Objectives',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'curriculum',
      title: 'Curriculum Overview',
      type: 'blockContent'
    },
    {
      name: 'admissionRequirements',
      title: 'Admission Requirements',
      type: 'blockContent'
    },
    {
      name: 'careerOpportunities',
      title: 'Career Opportunities',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'fees',
      title: 'Program Fees',
      type: 'string'
    },
    {
      name: 'applicationDeadline',
      title: 'Application Deadline',
      type: 'date'
    },
    {
      name: 'contactPerson',
      title: 'Contact Person',
      type: 'reference',
      to: [{type: 'staff'}]
    },
    {
      name: 'featured',
      title: 'Featured Program',
      type: 'boolean',
      initialValue: false
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
      title: 'title',
      subtitle: 'type',
      media: 'image'
    }
  }
} 
export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Gallery Title',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'فعاليات الكلية', value: 'events'},
          {title: 'المرافق', value: 'facilities'},
          {title: 'الحفلات', value: 'ceremonies'},
          {title: 'الأنشطة الطلابية', value: 'student-activities'},
          {title: 'المؤتمرات', value: 'conferences'},
          {title: 'معارض', value: 'exhibitions'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{type: 'customImage'}],
      validation: Rule => Rule.min(1).required()
    },
    {
      name: 'date',
      title: 'Event/Gallery Date',
      type: 'date'
    },
    {
      name: 'featured',
      title: 'Featured Gallery',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
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
      subtitle: 'category',
      media: 'images.0'
    }
  }
} 
export default {
  name: 'hospital',
  title: 'College Hospital',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Hospital Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'nameEn',
      title: 'Hospital Name (English)',
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
      name: 'image',
      title: 'Hospital Image',
      type: 'customImage'
    },
    {
      name: 'director',
      title: 'Hospital Director',
      type: 'reference',
      to: [{type: 'staff'}]
    },
    {
      name: 'type',
      title: 'Hospital Type',
      type: 'string',
      options: {
        list: [
          {title: 'مستشفى تعليمي', value: 'teaching'},
          {title: 'مستشفى تخصصي', value: 'specialized'},
          {title: 'مستشفى عام', value: 'general'},
          {title: 'عيادات خارجية', value: 'outpatient'}
        ]
      }
    },
    {
      name: 'specialties',
      title: 'Medical Specialties',
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
      name: 'facilities',
      title: 'Facilities & Equipment',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'capacity',
      title: 'Hospital Capacity',
      type: 'object',
      fields: [
        {
          name: 'beds',
          title: 'Number of Beds',
          type: 'number'
        },
        {
          name: 'operatingRooms',
          title: 'Operating Rooms',
          type: 'number'
        },
        {
          name: 'icu',
          title: 'ICU Beds',
          type: 'number'
        }
      ]
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'contact'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 3
        },
        {
          name: 'coordinates',
          title: 'GPS Coordinates',
          type: 'geopoint'
        }
      ]
    },
    {
      name: 'operatingHours',
      title: 'Operating Hours',
      type: 'text',
      rows: 3
    },
    {
      name: 'emergencyServices',
      title: 'Emergency Services Available',
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
      title: 'name',
      subtitle: 'type',
      media: 'image'
    }
  }
} 
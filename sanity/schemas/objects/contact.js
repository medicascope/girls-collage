export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'object',
  fields: [
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3
    },
    {
      name: 'addressEn',
      title: 'Address (English)',
      type: 'text',
      rows: 3
    },
    {
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string'
    },
    {
      name: 'workingHoursEn',
      title: 'Working Hours (English)',
      type: 'string'
    }
  ]
} 
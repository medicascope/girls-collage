export default {
  name: 'statistic',
  title: 'Statistic',
  type: 'object',
  fields: [
    {
      name: 'number',
      title: 'Number',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'labelEn',
      title: 'Label (English)',
      type: 'string'
    },
    {
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
      description: 'e.g., +, %, etc.'
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          {title: 'Blue', value: 'blue'},
          {title: 'Purple', value: 'purple'},
          {title: 'Pink', value: 'pink'},
          {title: 'Green', value: 'green'},
          {title: 'Red', value: 'red'},
          {title: 'Yellow', value: 'yellow'}
        ]
      }
    }
  ]
} 
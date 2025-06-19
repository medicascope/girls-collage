export default {
  name: 'visionMission',
  title: 'Vision & Mission',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'text',
      rows: 3
    },
    {
      name: 'vision',
      title: 'Vision',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Vision Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'content',
          title: 'Vision Content',
          type: 'blockContent',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'mission',
      title: 'Mission',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Mission Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'content',
          title: 'Mission Content',
          type: 'blockContent',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'values',
      title: 'Core Values',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Values Section Title',
          type: 'string'
        },
        {
          name: 'valuesList',
          title: 'Values List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Value Title',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'description',
                  title: 'Value Description',
                  type: 'text',
                  rows: 2
                },
                {
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'SVG icon identifier'
                },
                {
                  name: 'color',
                  title: 'Color Theme',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Blue to Purple', value: 'blue-purple'},
                      {title: 'Purple to Pink', value: 'purple-pink'},
                      {title: 'Pink to Red', value: 'pink-red'},
                      {title: 'Green to Blue', value: 'green-blue'}
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
} 
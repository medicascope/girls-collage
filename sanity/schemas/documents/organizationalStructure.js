export default {
  name: 'organizationalStructure',
  title: 'Organizational Structure',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Structure Title',
      type: 'string',
      initialValue: 'الهيكل التنظيمي'
    },
    {
      name: 'subtitle',
      title: 'Structure Subtitle',
      type: 'text',
      rows: 2,
      initialValue: 'هيكل تنظيمي متكامل يضمن التميز في الإدارة والتعليم والبحث العلمي'
    },
    {
      name: 'rootNode',
      title: 'Root Organization Node',
      type: 'organizationNode'
    },
    {
      name: 'displaySettings',
      title: 'Display Settings',
      type: 'object',
      fields: [
        {
          name: 'theme',
          title: 'Color Theme',
          type: 'string',
          options: {
            list: [
              {title: 'Blue to Purple', value: 'blue-purple'},
              {title: 'Green to Blue', value: 'green-blue'},
              {title: 'Purple to Pink', value: 'purple-pink'},
              {title: 'Orange to Red', value: 'orange-red'}
            ]
          },
          initialValue: 'blue-purple'
        },
        {
          name: 'layout',
          title: 'Layout Style',
          type: 'string',
          options: {
            list: [
              {title: 'Network Style', value: 'network'},
              {title: 'Tree Style', value: 'tree'},
              {title: 'Flowchart Style', value: 'flowchart'}
            ]
          },
          initialValue: 'network'
        },
        {
          name: 'showIcons',
          title: 'Show Icons',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'enableAnimations',
          title: 'Enable Animations',
          type: 'boolean',
          initialValue: true
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
} 
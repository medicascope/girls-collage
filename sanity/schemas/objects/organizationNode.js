export default {
  name: 'organizationNode',
  title: 'Organization Node',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Position/Department Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Emoji or icon identifier',
      initialValue: '🏢'
    },
    {
      name: 'iconType',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          {title: 'Emoji', value: 'emoji'},
          {title: 'Lucide Icon', value: 'lucide'},
          {title: 'Custom Image', value: 'image'}
        ]
      },
      initialValue: 'emoji'
    },
    {
      name: 'customIcon',
      title: 'Custom Icon Image',
      type: 'customImage',
      hidden: ({parent}) => parent?.iconType !== 'image'
    },
    {
      name: 'lucideIcon',
      title: 'Lucide Icon Name',
      type: 'string',
      description: 'Name of Lucide icon (e.g., user, building, briefcase)',
      hidden: ({parent}) => parent?.iconType !== 'lucide'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2
    },
    {
      name: 'person',
      title: 'Associated Person',
      type: 'reference',
      to: [{type: 'staff'}],
      description: 'Link to staff member if this is a personal position'
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'contact'
    },
    {
      name: 'nodeType',
      title: 'Node Type',
      type: 'string',
      options: {
        list: [
          {title: 'Executive', value: 'executive'},
          {title: 'Administrative', value: 'administrative'},
          {title: 'Academic', value: 'academic'},
          {title: 'Support', value: 'support'},
          {title: 'Unit', value: 'unit'}
        ]
      },
      initialValue: 'administrative'
    },
    {
      name: 'level',
      title: 'Hierarchy Level',
      type: 'number',
      description: 'Used for automatic positioning (0 = top level)',
      initialValue: 0
    },
    {
      name: 'expandedByDefault',
      title: 'Expanded by Default',
      type: 'boolean',
      description: 'Should this node be expanded when page loads?',
      initialValue: false
    },
    {
      name: 'children',
      title: 'Sub-departments/Units',
      type: 'array',
      of: [{type: 'organizationNode'}],
      description: 'Departments or units that report to this position'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order among siblings'
    },
    {
      name: 'customStyling',
      title: 'Custom Styling',
      type: 'object',
      fields: [
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          description: 'Hex color code (e.g., #3B82F6)'
        },
        {
          name: 'textColor',
          title: 'Text Color',
          type: 'string',
          description: 'Hex color code (e.g., #FFFFFF)'
        },
        {
          name: 'borderColor',
          title: 'Border Color',
          type: 'string'
        },
        {
          name: 'size',
          title: 'Node Size',
          type: 'string',
          options: {
            list: [
              {title: 'Small', value: 'small'},
              {title: 'Medium', value: 'medium'},
              {title: 'Large', value: 'large'},
              {title: 'Extra Large', value: 'xl'}
            ]
          },
          initialValue: 'medium'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon',
      nodeType: 'nodeType'
    },
    prepare({title, icon, nodeType}) {
      return {
        title: `${icon || '🏢'} ${title}`,
        subtitle: nodeType || 'administrative'
      }
    }
  }
} 
export default {
  name: 'aboutPage',
  title: 'About Page Content',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'pageSubtitle',
      title: 'Page Subtitle',
      type: 'text',
      rows: 3
    },
    // College History Section
    {
      name: 'historyTitle',
      title: 'History Section Title',
      type: 'string'
    },
    {
      name: 'historyContent',
      title: 'History Content',
      type: 'blockContent'
    },
    {
      name: 'foundingPrinciples',
      title: 'Founding Principles',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Principle Title',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          }
        ]
      }]
    },
    {
      name: 'milestones',
      title: 'College Milestones',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'year',
            title: 'Year',
            type: 'string'
          },
          {
            name: 'title',
            title: 'Milestone Title',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          }
        ]
      }]
    },
    // Strategic Goals Section
    {
      name: 'strategicGoalsTitle',
      title: 'Strategic Goals Title',
      type: 'string'
    },
    {
      name: 'strategicGoalsSubtitle',
      title: 'Strategic Goals Subtitle',
      type: 'text'
    },
    {
      name: 'strategicGoals',
      title: 'Strategic Goals',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Goal Title',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Goal Description',
            type: 'text'
          },
          {
            name: 'objectives',
            title: 'Detailed Objectives',
            type: 'array',
            of: [{type: 'string'}]
          }
        ]
      }]
    },
    {
      name: 'successMetrics',
      title: 'Success Metrics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'value',
            title: 'Metric Value',
            type: 'string'
          },
          {
            name: 'label',
            title: 'Metric Label',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          }
        ]
      }]
    },
    // College Video Section
    {
      name: 'videoTitle',
      title: 'Video Section Title',
      type: 'string'
    },
    {
      name: 'videoSubtitle',
      title: 'Video Section Subtitle',
      type: 'text'
    },
    {
      name: 'mainVideo',
      title: 'Main College Video',
      type: 'video'
    },
    {
      name: 'videoFeatures',
      title: 'Video Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Feature Title',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Feature Description',
            type: 'text'
          },
          {
            name: 'color',
            title: 'Color Theme',
            type: 'string',
            options: {
              list: [
                {title: 'Blue', value: 'blue'},
                {title: 'Purple', value: 'purple'},
                {title: 'Pink', value: 'pink'},
                {title: 'Green', value: 'green'}
              ]
            }
          }
        ]
      }]
    },
    {
      name: 'additionalVideos',
      title: 'Additional Videos',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Video Title',
            type: 'string'
          },
          {
            name: 'duration',
            title: 'Duration',
            type: 'string'
          },
          {
            name: 'video',
            title: 'Video',
            type: 'video'
          }
        ]
      }]
    },
    // Quick Facts
    {
      name: 'quickFacts',
      title: 'Quick Facts',
      type: 'array',
      of: [{type: 'statistic'}]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }
  ]
} 
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Girls Medical College',

  projectId: 'f8leamg6', // You'll need to get this from sanity.io
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
}) 
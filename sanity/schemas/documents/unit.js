export default {
  name: "unit",
  title: "College Unit",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Unit Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "nameEn",
      title: "Unit Name (English)",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Unit Image",
      type: "customImage",
    },
    {
      name: "mission",
      title: "Department Mission",
      type: "text",
      rows: 3,
    },
    {
      name: "facilities",
      title: "Facilities",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "head",
      title: "Unit Head",
      type: "reference",
      to: [{ type: "staff" }],
    },
    {
      name: "staff",
      title: "Unit Staff",
      type: "array",
      of: [{ type: "reference", to: [{ type: "staff" }] }],
    },
    {
      name: "objectives",
      title: "Objectives",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "committees",
      title: "Committees",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "services",
      title: "Services Provided",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "ourVision",
      title: "Our Vision",
      type: "text",
    },
    {
      name: "achievements",
      title: "Key Achievements",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "contact",
      title: "Contact Information",
      type: "contact",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
    {
      name: "departmentQualityObjectives",
      title: "Department Quality Objectives",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};

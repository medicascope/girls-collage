export default {
  name: "department",
  title: "Department",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Department Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "nameEn",
      title: "Department Name (English)",
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
      title: "Department Image",
      type: "customImage",
    },
    {
      name: "head",
      title: "Department Head",
      type: "reference",
      to: [{ type: "staff" }],
    },
    {
      name: "faculty",
      title: "Faculty Members",
      type: "array",
      of: [{ type: "reference", to: [{ type: "staff" }] }],
    },
    {
      name: "programs",
      title: "Academic Programs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "program" }] }],
    },
    {
      name: "overview",
      title: "Overview",
      type: "blockContent",
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
      name: "departmentQualityObjectives",
      title: "Department Quality Objectives",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "ourVision",
      title: "Our Vision",
      type: "text",
    },
    {
      name: "Services",
      title: "Services",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "researchAreas",
      title: "Research Areas",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "contact",
      title: "Contact Information",
      type: "contact",
    },
    {
      name: "statistics",
      title: "Department Statistics",
      type: "array",
      of: [{ type: "statistic" }],
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Used for sorting departments",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};

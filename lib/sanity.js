import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "f8leamg6",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2024-01-01",
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Common GROQ queries
export const queries = {
  siteSettings: `*[_type == "siteSettings"][0]{
    ...,
    logo {
      ...,
      asset->
    },
    favicon {
      asset->
    }
  }`,

  hero: `*[_type == "hero"][0]{
    ...,
    heroImage {
      ...,
      asset->
    },
    deanCard {
      ...,
      image {
        ...,
        asset->
      }
    }
  }`,

  visionMission: `*[_type == "visionMission"][0]`,

  deanMessage: `*[_type == "deanMessage"][0]{
    ...,
    deanImage {
      ...,
      asset->
    }
  }`,

  latestNews: `*[_type == "news"] | order(publishedAt desc)[0...6]{
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    featuredImage {
      ...,
      asset->
    }
  }`,

  featuredNews: `*[_type == "news" && featured == true] | order(publishedAt desc)[0...3]{
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    featuredImage {
      ...,
      asset->
    }
  }`,

  allNews: `*[_type == "news"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    featuredImage {
      ...,
      asset->
    }
  }`,

  newsById: `*[_type == "news" && slug.current == $slug][0]{
    ...,
    featuredImage {
      ...,
      asset->
    }
  }`,

  departments: `*[_type == "department"] | order(order asc){
    _id,
    name,
    nameEn,
    slug,
    description,
    mission,
    overview,
    image {
      ...,
      asset->
    },
    head->{
      name,
      position,
      photo {
        ...,
        asset->
      }
    },
    statistics,
    facilities,
    researchAreas
  }`,

  departmentById: `*[_type == "department" && slug.current == $slug][0]{
    ...,
    image {
      ...,
      asset->
    },
    head->{
      ...,
      photo {
        ...,
        asset->
      }
    },
    faculty[]->{
      name,
      position,
      photo {
        ...,
        asset->
      }
    },
    programs[]->{
      title,
      type,
      slug
    }
  }`,

  programs: `*[_type == "program"] | order(order asc){
    _id,
    title,
    titleEn,
    slug,
    type,
    duration,
    description,
    image {
      ...,
      asset->
    },
    department->{
      name,
      slug
    },
    objectives,
    curriculum,
    admissionRequirements,
    careerOpportunities,
    tuition,
    applicationDeadline,
    contactPerson->{
      name,
      position,
      photo {
        ...,
        asset->
      }
    },
    featured,
    order,
    capacity,
    currentStudents,
    degree,
    level
  }`,

  programById: `*[_type == "program" && slug.current == $slug][0]{
    ...,
    image {
      ...,
      asset->
    },
    department->{
      name,
      slug
    },
    objectives,
    curriculum,
    admissionRequirements,
    careerOpportunities,
    tuition,
    applicationDeadline,
    contactPerson->{
      name,
      position,
      photo {
        ...,
        asset->
      }
    },
    featured,
    order,
    capacity,
    currentStudents,
    degree,
    level
  }`,

  units: `*[_type == "unit"] | order(order asc){
    _id,
    name,
    nameEn,
    slug,
    description,
    image {
      ...,
      asset->
    },
    head->{
      name,
      position,
      photo {
        ...,
        asset->
      }
    },
    staff[]->{
      _id,
      name,
      position,
      photo {
        ...,
        asset->
      }
    },
    committees,
    publications,
    establishedYear
  }`,

  hospitals: `*[_type == "hospital"] | order(order asc){
    _id,
    name,
    nameEn,
    slug,
    description,
    type,
    image {
      ...,
      asset->
    },
    director->{
      name,
      position,
      photo {
        ...,
        asset->
      }
    },
    capacity
  }`,
  featuredGalleries: `*[_type == "gallery" && featured == true] | order(date desc, _createdAt desc)[0...6]{
    _id,
    title,
    slug,
    description,
    category,
    date,
    featured,
    tags,
    images[0...3] {
      ...,
      asset->
    }
  }`,

  // All galleries for gallery page
  allGalleries: `*[_type == "gallery"] | order(date desc, _createdAt desc){
    _id,
    title,
    slug,
    description,
    category,
    images[0...1] {
      ...,
      asset->
    },
    date,
    featured,
    tags
  }`,

  // Single gallery for detail page
  singleGallery: `*[_type == "gallery" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    category,
    images[] {
      ...,
      asset->
    },
    date,
    tags,
    featured
  }`,

  // Related galleries (excluding current)
  relatedGalleries: `*[_type == "gallery" && slug.current != $slug] | order(date desc)[0...3]{
    _id,
    title,
    slug,
    description,
    category,
    images[0] {
      ...,
      asset->
    },
    date
  }`,

  staff: `*[_type == "staff"]{
    _id,
    name,
    nameEn,
    slug,
    position,
    positionEn,
    photo {
      ...,
      asset->
    },
    department->{
      name,
      slug
    },
    featured
  }`,

  aboutPage: `*[_type == "aboutPage"][0]{
    pageTitle,
    pageSubtitle,
    historyTitle,
    historyContent,
    foundingPrinciples,
    milestones,
    strategicGoalsTitle,
    strategicGoalsSubtitle,
    strategicGoals,
    successMetrics,
    videoTitle,
    videoSubtitle,
    mainVideo,
    videoFeatures,
    additionalVideos,
    quickFacts
  }`,

  organizationalStructure: `*[_type == "organizationalStructure"][0]{
    title,
    subtitle,
    displaySettings,
    rootNode {
      title,
      titleEn,
      icon,
      iconType,
      customIcon {
        ...,
        asset->
      },
      lucideIcon,
      description,
      person->{
        name,
        position,
        photo {
          ...,
          asset->
        },
        contact
      },
      contact,
      nodeType,
      level,
      expandedByDefault,
      order,
      customStyling,
      children[] {
        title,
        titleEn,
        icon,
        iconType,
        customIcon {
          ...,
          asset->
        },
        lucideIcon,
        description,
        person->{
          name,
          position,
          photo {
            ...,
            asset->
          },
          contact
        },
        contact,
        nodeType,
        level,
        expandedByDefault,
        order,
        customStyling,
        children[] {
          title,
          titleEn,
          icon,
          iconType,
          customIcon {
            ...,
            asset->
          },
          lucideIcon,
          description,
          person->{
            name,
            position,
            photo {
              ...,
              asset->
            },
            contact
          },
          contact,
          nodeType,
          level,
          expandedByDefault,
          order,
          customStyling,
          children[] {
            title,
            titleEn,
            icon,
            iconType,
            customIcon {
              ...,
              asset->
            },
            lucideIcon,
            description,
            person->{
              name,
              position,
              photo {
                ...,
                asset->
              },
              contact
            },
            contact,
            nodeType,
            level,
            expandedByDefault,
            order,
            customStyling
          }
        }
      }
    }
  }`,
};

// Helper function to fetch data
export async function sanityFetch({ query, params = {} }) {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}

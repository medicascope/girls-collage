import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'f8leamg6',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01',
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
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
    statistics
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
    featured
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
    contactPerson->{
      name,
      position,
      photo {
        ...,
        asset->
      },
      contact
    }
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
    }
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
  
  featuredGalleries: `*[_type == "gallery" && featured == true] | order(date desc)[0...6]{
    _id,
    title,
    slug,
    category,
    images[0...3] {
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
  }`
}

// Helper function to fetch data
export async function sanityFetch({ query, params = {} }) {
  try {
    return await client.fetch(query, params)
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return null
  }
} 
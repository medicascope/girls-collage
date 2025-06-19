# Sanity CMS Setup Instructions for Girls Medical College

## Overview
Your Girls Medical College website has been configured to use Sanity CMS for content management. This allows you to manage all website content through a user-friendly admin interface.

## 1. Create Sanity Account and Project

1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project with these settings:
   - Project name: "Girls Medical College"
   - Template: "Clean project with no template"
   - Dataset: "production"

## 2. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Fill in your Sanity project details:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-from-sanity
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token-from-sanity
```

To get your project ID and create an API token:
- Project ID: Found in your Sanity project dashboard
- API token: Go to your project settings → API → Tokens → Create new token

## 3. Deploy Sanity Studio

The studio is already configured and will be available at `/studio` once you deploy.

## 4. Content Types Available

Your CMS includes the following content types:

### Site-wide Content
- **Site Settings**: Logo, contact info, social media links
- **Hero Section**: Main banner content with statistics
- **Vision & Mission**: College vision, mission, and values

### Pages & Content
- **News**: Articles with categories, images, and SEO
- **Departments**: Academic departments with faculty and programs
- **Programs**: Academic programs with admission requirements
- **Units**: College units and administrative divisions
- **Hospitals**: Associated hospitals and medical facilities
- **Staff**: Faculty and staff profiles
- **Pages**: General content pages
- **Gallery**: Image galleries for events and facilities

### Content Features
- **Rich Text Editor**: Full formatting with images and links
- **SEO Fields**: Meta titles, descriptions, and social sharing images
- **Image Management**: Optimized images with alt text and captions
- **Multilingual Support**: Arabic and English content fields
- **Content Relationships**: Link departments to programs, staff to departments, etc.

## 5. First Steps After Setup

1. **Access the Studio**: Go to `yoursite.com/studio`
2. **Create Site Settings**: Add your logo, contact information, and social media links
3. **Set up Hero Section**: Configure the main banner with your content and statistics
4. **Add Vision & Mission**: Input your college's vision, mission, and core values
5. **Create Departments**: Add all academic departments
6. **Add Staff**: Create profiles for faculty and administration
7. **Create Programs**: Set up academic programs and link them to departments
8. **Add News**: Start publishing news articles
9. **Upload Images**: Add photos to the gallery

## 6. Content Management Best Practices

### Images
- Upload high-quality images (minimum 1200px width for hero images)
- Always add alt text for accessibility
- Use descriptive file names

### SEO
- Write unique meta titles (under 60 characters)
- Create compelling meta descriptions (under 160 characters)
- Add relevant keywords

### Arabic Content
- Use proper Arabic typography
- Ensure right-to-left text direction is correct
- Provide English translations where needed

## 7. Customization Options

### Adding New Content Types
Edit files in `sanity/schemas/documents/` to add new content types.

### Modifying Existing Schemas
Update schema files and the queries in `lib/sanity.js` to match.

### Styling Content
Modify the `PortableText.jsx` component to change how rich text content is displayed.

## 8. Support and Maintenance

### Backup
- Sanity automatically backs up your content
- Export data regularly through the CLI: `sanity dataset export`

### Performance
- Images are automatically optimized by Sanity's CDN
- Content is cached for better performance

### Security
- Use environment variables for sensitive data
- Regularly update API tokens
- Monitor access logs in Sanity dashboard

## 9. Deployment Notes

When deploying your site:
1. Ensure environment variables are set in your hosting platform
2. The studio will be available at `/studio` after deployment
3. Content changes appear immediately on the live site

## 10. Training Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Studio Customization](https://www.sanity.io/docs/studio)

## Technical Architecture

### File Structure
```
sanity/
├── schemas/
│   ├── documents/          # Main content types
│   ├── objects/           # Reusable field types
│   └── index.js          # Schema exports
├── lib/
│   └── sanity.js         # Client configuration and queries
├── components/
│   └── PortableText.jsx  # Rich text renderer
└── studio/               # Admin interface
```

### Key Files Modified
- `app/page.js`: Updated to fetch Sanity data
- `components/Hero.jsx`: Integrated with Sanity hero content
- `components/LatestNews.jsx`: Connected to Sanity news
- All other components ready for Sanity integration

Your website is now fully configured for content management through Sanity CMS! 
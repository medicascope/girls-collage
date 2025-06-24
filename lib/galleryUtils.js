// Gallery category mapping from Sanity values to Arabic display names
export const GALLERY_CATEGORIES = {
  'events': 'فعاليات الكلية',
  'facilities': 'المرافق', 
  'ceremonies': 'الحفلات',
  'student-activities': 'الأنشطة الطلابية',
  'conferences': 'المؤتمرات',
  'exhibitions': 'معارض'
}

// Get category display name
export const getCategoryDisplay = (category) => {
  return GALLERY_CATEGORIES[category] || category
}

// Transform Sanity gallery data to component format
export const transformGalleryData = (sanityItems) => {
  if (!sanityItems || !Array.isArray(sanityItems)) return []
  
  return sanityItems.map(item => ({
    _id: item._id,
    id: item._id,
    title: item.title,
    description: item.description || 'وصف الفعالية',
    slug: item.slug,
    category: item.category, // Keep original for filtering
    categoryDisplay: getCategoryDisplay(item.category), // For display
    images: item.images,
    date: item.date,
    featured: item.featured,
    tags: item.tags,
    // Keep fallback image structure for compatibility
    image: item.images?.[0]?.asset ? null : '/images/gallery/placeholder.jpg'
  }))
}

// Fallback gallery data for development/offline use
export const FALLBACK_GALLERIES = [
  {
    _id: '1',
    id: '1',
    title: 'حفل تخريج الدفعة الثالثة عشرة',
    description: 'احتفال مهيب بتخريج 150 طالبة من مختلف التخصصات الطبية',
    category: 'ceremonies',
    categoryDisplay: 'الحفلات',
    images: [{ asset: null }],
    date: '2024-01-15',
    slug: { current: 'graduation-ceremony-13' },
    featured: true,
    image: '/images/gallery/graduation-ceremony.jpg'
  },
  {
    _id: '2', 
    id: '2',
    title: 'افتتاح معمل المحاكاة الطبية المتقدم',
    description: 'تدشين أحدث معمل للمحاكاة الطبية مزود بأفضل التقنيات',
    category: 'facilities',
    categoryDisplay: 'المرافق',
    images: [{ asset: null }],
    date: '2024-01-10',
    slug: { current: 'simulation-lab-opening' },
    featured: true,
    image: '/images/gallery/simulation-lab-opening.jpg'
  },
  {
    _id: '3',
    id: '3', 
    title: 'مؤتمر التعليم الطبي الدولي',
    description: 'استضافة مؤتمر دولي حول أحدث طرق التعليم الطبي',
    category: 'conferences',
    categoryDisplay: 'المؤتمرات',
    images: [{ asset: null }],
    date: '2024-01-05',
    slug: { current: 'international-medical-conference' },
    featured: false,
    image: '/images/gallery/medical-conference.jpg'
  },
  {
    _id: '4',
    id: '4',
    title: 'زيارة وفد جامعة هارفارد الطبية',
    description: 'استقبال وفد أكاديمي مرموق لبحث سبل التعاون العلمي',
    category: 'events',
    categoryDisplay: 'فعاليات الكلية',
    images: [{ asset: null }],
    date: '2024-01-01',
    slug: { current: 'harvard-visit' },
    featured: true,
    image: '/images/gallery/harvard-visit.jpg'
  },
  {
    _id: '5',
    id: '5',
    title: 'ورشة الجراحة الروبوتية',
    description: 'تدريب الطالبات على أحدث تقنيات الجراحة الروبوتية',
    category: 'student-activities',
    categoryDisplay: 'الأنشطة الطلابية',
    images: [{ asset: null }],
    date: '2023-12-20',
    slug: { current: 'robotic-surgery-workshop' },
    featured: true,
    image: '/images/gallery/robotic-surgery.jpg'
  },
  {
    _id: '6',
    id: '6',
    title: 'معرض الابتكارات الطبية',
    description: 'عرض أحدث الابتكارات والبحوث الطبية للطالبات',
    category: 'exhibitions',
    categoryDisplay: 'معارض',
    images: [{ asset: null }],
    date: '2023-12-15',
    slug: { current: 'medical-innovations-exhibition' },
    featured: true,
    image: '/images/gallery/innovations-exhibition.jpg'
  }
]

// Format date for display
export const formatGalleryDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  })
}

 
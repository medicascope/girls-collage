'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/sanity'

const NewsListing = ({ newsData }) => {
  // Comprehensive fallback news data if Sanity data is not available
  const fallbackNews = [
    {
      id: 1,
      title: 'كلية البنات الطبية تحتفل بتخريج الدفعة الجديدة',
      excerpt: 'احتفلت كلية البنات الطبية بتخريج 150 طالبة من مختلف التخصصات الطبية في حفل مهيب حضره عدد من المسؤولين والأكاديميين وأولياء الأمور.',
      content: 'شهدت كلية البنات الطبية احتفالاً مهيباً بتخريج الدفعة الجديدة من الطالبات البالغ عددهن 150 طالبة من مختلف التخصصات الطبية. الحفل الذي أقيم في المسرح الرئيسي للكلية، حضره عدد كبير من المسؤولين والأكاديميين وأولياء الأمور، وتم خلاله تكريم الطالبات المتفوقات وتوزيع الشهادات...',
      image: '/images/news/graduation.jpg',
      date: '2024-01-15',
      category: 'أخبار الكلية',
      author: 'إدارة الإعلام'
    },
    {
      id: 2,
      title: 'إطلاق برنامج التعليم الطبي التكاملي الجديد',
      excerpt: 'أطلقت كلية البنات الطبية برنامجاً جديداً للتعليم الطبي التكاملي يهدف إلى تطوير مهارات الطالبات العملية والنظرية من خلال منهجية حديثة.',
      content: 'في إطار جهود التطوير المستمر، أطلقت كلية البنات الطبية برنامجاً مبتكراً للتعليم الطبي التكاملي يركز على دمج المعرفة النظرية مع التطبيق العملي. البرنامج يستخدم أحدث الطرق التعليمية ويشمل محاكاة طبية متقدمة ومختبرات تفاعلية...',
      image: '/images/news/integrated-learning.jpg',
      date: '2024-01-10',
      category: 'البرامج التعليمية',
      author: 'د. فاطمة الأحمد'
    },
    {
      id: 3,

      title: 'توقيع اتفاقية تعاون مع مستشفى الملك فهد',
      excerpt: 'وقعت كلية البنات الطبية اتفاقية تعاون استراتيجي مع مستشفى الملك فهد لتدريب الطالبات وتطوير البحث العلمي في المجال الطبي.',
      content: 'في خطوة مهمة نحو تعزيز التعاون الأكاديمي والطبي، وقعت كلية البنات الطبية اتفاقية تعاون استراتيجي مع مستشفى الملك فهد. الاتفاقية تشمل تدريب الطالبات في المستشفى، تبادل الخبرات، والتعاون في البحث العلمي...',
      image: '/images/news/partnership.jpg',
      date: '2024-01-05',
      category: 'الشراكات',
      author: 'مكتب الشراكات'
    },
    {
      id: 4,

      title: 'فوز أبحاث الكلية بجائزة التميز العلمي',
      excerpt: 'حصلت ثلاثة أبحاث من كلية البنات الطبية على جائزة التميز العلمي على مستوى الجامعات السعودية لهذا العام في مجال الطب والعلوم الصحية.',
      content: 'حققت كلية البنات الطبية إنجازاً علمياً متميزاً بحصول ثلاثة من أبحاثها على جائزة التميز العلمي على مستوى الجامعات السعودية. الأبحاث الفائزة تناولت مواضيع متقدمة في الطب والعلوم الصحية وساهمت في تطوير المعرفة الطبية...',
      image: '/images/news/research-award.jpg',
      date: '2023-12-20',
      category: 'البحث العلمي',
      author: 'وحدة البحث العلمي'
    },
    {
      id: 5,

      title: 'ورشة عمل حول الذكاء الاصطناعي في الطب',
      excerpt: 'نظمت وحدة التعليم الإلكتروني ورشة عمل متخصصة حول استخدام الذكاء الاصطناعي في التشخيص الطبي والعلاج بمشاركة خبراء دوليين.',
      content: 'استضافت كلية البنات الطبية ورشة عمل متخصصة حول تطبيقات الذكاء الاصطناعي في المجال الطبي. الورشة التي نظمتها وحدة التعليم الإلكتروني، شهدت مشاركة خبراء من داخل وخارج المملكة وتناولت أحدث التطورات في هذا المجال...',
      image: '/images/news/ai-workshop.jpg',
      date: '2023-12-15',
      category: 'الفعاليات',
      author: 'وحدة التعليم الإلكتروني'
    },
    {
      id: 6,

      title: 'افتتاح معمل المحاكاة الطبية المتطور',
      excerpt: 'افتتحت الكلية معمل المحاكاة الطبية الجديد المزود بأحدث التقنيات لتدريب الطالبات على المهارات السريرية في بيئة آمنة ومحاكية للواقع.',
      content: 'في إطار تطوير البنية التحتية التعليمية، افتتحت كلية البنات الطبية معمل المحاكاة الطبية المتطور الذي يضم أحدث تقنيات المحاكاة الطبية. المعمل يوفر بيئة تدريبية متقدمة تمكن الطالبات من اكتساب المهارات السريرية بطريقة آمنة وفعالة...',
      image: '/images/news/simulation-lab.jpg',
      date: '2023-12-10',
      category: 'التطوير',
      author: 'إدارة المرافق'
    },
    {
      id: 7,

      title: 'مؤتمر الطب النسائي السنوي الخامس',
      excerpt: 'تستضيف الكلية المؤتمر السنوي الخامس للطب النسائي بمشاركة أطباء وباحثين من مختلف دول العالم لمناقشة أحدث التطورات في هذا المجال.',
      content: 'تستعد كلية البنات الطبية لاستضافة المؤتمر السنوي الخامس للطب النسائي الذي يعتبر من أهم المؤتمرات المتخصصة في المنطقة. المؤتمر يشهد مشاركة واسعة من الأطباء والباحثين والأكاديميين من مختلف دول العالم...',
      image: '/images/news/conference.jpg',
      date: '2024-02-01',
      category: 'المؤتمرات',
      author: 'لجنة المؤتمرات'
    },
    {
      id: 8,

      title: 'برنامج التبادل الطلابي مع جامعة هارفارد',
      excerpt: 'أطلقت الكلية برنامج تبادل طلابي مع كلية الطب بجامعة هارفارد يتيح للطالبات المتميزات فرصة الدراسة والتدريب في إحدى أعرق الجامعات العالمية.',
      content: 'في خطوة نحو التميز الأكاديمي والانفتاح على التجارب العالمية، أطلقت كلية البنات الطبية برنامج تبادل طلابي مع كلية الطب بجامعة هارفارد الأمريكية. البرنامج يوفر فرصاً استثنائية للطالبات المتميزات للاستفادة من الخبرات العالمية...',
      image: '/images/news/exchange-program.jpg',
      date: '2024-01-20',
      category: 'البرامج التعليمية',
      author: 'مكتب العلاقات الدولية'
    },
    {
      id: 9,

      title: 'حملة التوعية الصحية في المجتمع',
      excerpt: 'تنظم طالبات الكلية حملة توعية صحية شاملة في المجتمع المحلي تركز على الوقاية من الأمراض المزمنة وتعزيز نمط الحياة الصحي.',
      content: 'في إطار رسالة الكلية المجتمعية، تنظم طالبات كلية البنات الطبية حملة توعية صحية شاملة تستهدف المجتمع المحلي. الحملة تركز على رفع الوعي حول الوقاية من الأمراض المزمنة وتعزيز أنماط الحياة الصحية...',
      image: '/images/news/health-campaign.jpg',
      date: '2024-01-12',
      category: 'الخدمة المجتمعية',
      author: 'نادي الطالبات'
    },
    {
      id: 10,

      title: 'تطوير منصة التعليم الإلكتروني الذكية',
      excerpt: 'أطلقت الكلية منصة تعليم إلكتروني ذكية جديدة تستخدم تقنيات الذكاء الاصطناعي لتوفير تجربة تعليمية مخصصة لكل طالبة.',
      content: 'واكبت كلية البنات الطبية التطور التكنولوجي بإطلاق منصة تعليم إلكتروني ذكية تستخدم تقنيات الذكاء الاصطناعي. المنصة توفر تجربة تعليمية مخصصة ومتكيفة مع احتياجات كل طالبة وتساعد في تحسين نتائج التعلم...',
      image: '/images/news/smart-platform.jpg',
      date: '2024-01-08',
      category: 'التكنولوجيا',
      author: 'وحدة التعليم الإلكتروني'
    }
  ]
  
  // Use Sanity data if available, otherwise use fallback
  // Ensure all items have unique IDs
  const processNewsData = (data) => {
    if (!data || !Array.isArray(data)) return fallbackNews
    
    return data.map((item, index) => ({
      ...item,
      // Ensure unique ID - use existing id, _id (Sanity), or generate from index
      id: item.id || item._id || `news-${index}`,
      // Ensure slug exists - use existing slug or create from ID
      slug: item.slug || { current: item.id || item._id || `news-${index}` },
      // Ensure required fields exist
      title: item.title || 'عنوان غير محدد',
      excerpt: item.excerpt || item.description || 'لا يوجد وصف',
      category: item.category || 'عام',
      date: item.date || item.publishedAt || item._createdAt || new Date().toISOString(),
      author: item.author || 'غير محدد',
      image: item.image || '/images/news/default.jpg'
    }))
  }
  
  const newsItems = processNewsData(newsData)
  
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('الكل')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const categories = ['الكل', 'أخبار الكلية', 'البرامج التعليمية', 'الشراكات', 'البحث العلمي', 'الفعاليات', 'التطوير', 'المؤتمرات', 'الخدمة المجتمعية', 'التكنولوجيا']

  const filteredNews = useMemo(() => {
    return newsItems.filter(news => {
      // Safe search with fallback for undefined properties
      const title = news.title || ''
      const excerpt = news.excerpt || ''
      const category = news.category || ''
      
      const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'الكل' || category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, newsItems])

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const currentNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const formatDate = (dateString) => {
    if (!dateString) return 'غير محدد'
    
    let date
    
    // Handle different date formats that might come from Sanity
    if (typeof dateString === 'string') {
      // Handle ISO date strings or regular date strings
      date = new Date(dateString)
    } else if (dateString instanceof Date) {
      date = dateString
    } else {
      return 'غير محدد'
    }
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'غير محدد'
    }
    
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    
    // Ensure we have valid numbers
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return 'غير محدد'
    }
    
    return `${day}/${month}/${year}`
  }

  return (
    <div className="section-container py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="gradient-text">أخبار الكلية</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          تابع آخر أخبار وفعاليات كلية البنات الطبية وإنجازاتها العلمية والأكاديمية
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl card-shadow p-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">البحث في الأخبار</label>
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن خبر..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">تصنيف الأخبار</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>عدد النتائج: {filteredNews.length}</span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-blue-600 hover:text-blue-800"
            >
              مسح البحث
            </button>
          )}
        </div>
      </div>

      {/* News Grid */}
      {currentNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentNews.map((news) => (
            <article key={news.id} className="bg-white rounded-xl card-shadow overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='16' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eصورة الخبر%3C/text%3E%3C/svg%3E"
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {news.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(news.date)}
                  </div>
                  <span className="text-xs">{news.author}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {news.excerpt}
                </p>

                <Link
                  href={`/news/${news.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                >
                  اقرأ المزيد
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد أخبار متاحة</h3>
          <p className="text-gray-500">جرب تعديل معايير البحث أو التصفية</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 space-x-reverse">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            السابق
          </button>

          <div className="flex space-x-1 space-x-reverse">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-xl ml-[5px] mr-0 transition-all duration-200 cursor-pointer ${
                  currentPage === page
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-blue-600 hover:bg-blue-50 border border-blue-600'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            التالي
          </button>
        </div>
      )}
    </div>
  )
}

export default NewsListing
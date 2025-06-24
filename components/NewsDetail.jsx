'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NewsDetail = ({ slug }) => {
  const [news, setNews] = useState(null)
  const [relatedNews, setRelatedNews] = useState([])
  const [loading, setLoading] = useState(true)

  const newsData = {
    1: {
      id: 1,
      title: 'كلية البنات الطبية تحتفل بتخريج الدفعة الجديدة',
      excerpt: 'احتفلت كلية البنات الطبية بتخريج 150 طالبة من مختلف التخصصات الطبية في حفل مهيب حضره عدد من المسؤولين والأكاديميين وأولياء الأمور.',
      content: `شهدت كلية البنات الطبية احتفالاً مهيباً بتخريج الدفعة الجديدة من الطالبات البالغ عددهن 150 طالبة من مختلف التخصصات الطبية. الحفل الذي أقيم في المسرح الرئيسي للكلية، حضره عدد كبير من المسؤولين والأكاديميين وأولياء الأمور.

      تم خلال الحفل تكريم الطالبات المتفوقات وتوزيع الشهادات، حيث حصلت الطالبة سارة أحمد على المركز الأول بمعدل 98.5%، تلتها الطالبة فاطمة محمد بمعدل 97.8%، والطالبة نورا علي بمعدل 97.2%.

      وألقت عميدة الكلية الدكتورة منى الزهراني كلمة أشادت فيها بالجهود المبذولة من قبل الطالبات وأعضاء هيئة التدريس، مؤكدة أن هذه الدفعة تمثل نقلة نوعية في جودة التعليم الطبي بالكلية.

      كما شهد الحفل توقيع اتفاقيات تدريب مع عدة مستشفيات رائدة لضمان حصول الخريجات على أفضل فرص التدريب والتطوير المهني.

      وأعربت الطالبات الخريجات عن فخرهن وامتنانهن للكلية وأعضاء هيئة التدريس الذين ساهموا في رحلتهن التعليمية، مؤكدات عزمهن على خدمة المجتمع والمساهمة في تطوير القطاع الصحي.`,
      image: '/images/news/graduation.jpg',
      date: '2024-01-15',
      category: 'أخبار الكلية',
      author: 'إدارة الإعلام',
      tags: ['تخرج', 'طالبات', 'احتفال', 'تكريم']
    },
    2: {
      id: 2,
      title: 'إطلاق برنامج التعليم الطبي التكاملي الجديد',
      excerpt: 'أطلقت كلية البنات الطبية برنامجاً جديداً للتعليم الطبي التكاملي يهدف إلى تطوير مهارات الطالبات العملية والنظرية من خلال منهجية حديثة.',
      content: `في إطار جهود التطوير المستمر، أطلقت كلية البنات الطبية برنامجاً مبتكراً للتعليم الطبي التكاملي يركز على دمج المعرفة النظرية مع التطبيق العملي.

      البرنامج الجديد يستخدم أحدث الطرق التعليمية ويشمل:
      • محاكاة طبية متقدمة باستخدام أجهزة حديثة
      • مختبرات تفاعلية مجهزة بأحدث التقنيات
      • برامج تدريبية عملية في المستشفيات المتعاونة
      • ورش عمل متخصصة مع خبراء دوليين

      وأوضحت الدكتورة فاطمة الأحمد، منسقة البرنامج، أن هذا النهج التعليمي الجديد سيساهم في إعداد جيل من الطبيبات المتميزات القادرات على مواجهة تحديات المستقبل في المجال الطبي.

      يشمل البرنامج أيضاً:
      - تطبيق استراتيجيات التعلم النشط
      - استخدام التكنولوجيا في التعليم
      - التقييم المستمر والتغذية الراجعة
      - تطوير المهارات الشخصية والمهنية

      ومن المقرر أن يبدأ تطبيق البرنامج مع بداية الفصل الدراسي القادم لجميع المستويات الدراسية.`,
      image: '/images/news/integrated-learning.jpg',
      date: '2024-01-10',
      category: 'البرامج التعليمية',
      author: 'د. فاطمة الأحمد',
      tags: ['تعليم', 'تطوير', 'تكامل', 'مناهج']
    },
    3: {
      id: 3,
      title: 'توقيع اتفاقية تعاون مع مستشفى الملك فهد',
      excerpt: 'وقعت كلية البنات الطبية اتفاقية تعاون استراتيجي مع مستشفى الملك فهد لتدريب الطالبات وتطوير البحث العلمي في المجال الطبي.',
      content: `في خطوة مهمة نحو تعزيز التعاون الأكاديمي والطبي، وقعت كلية البنات الطبية اتفاقية تعاون استراتيجي مع مستشفى الملك فهد. الاتفاقية تشمل تدريب الطالبات في المستشفى، تبادل الخبرات، والتعاون في البحث العلمي.

      تهدف الاتفاقية إلى توفير فرص تدريبية متقدمة للطالبات في بيئة طبية حقيقية، مما يساهم في إعدادهن بشكل أفضل لسوق العمل. كما تتيح للطالبات التعرف على أحدث التقنيات الطبية والممارسات السريرية المتطورة.

      من جانبها، أكدت عميدة الكلية أن هذه الشراكة تمثل خطوة مهمة في تطوير التعليم الطبي وتعزيز جودة التدريب العملي. وأشارت إلى أن المستشفى سيوفر بيئة تعليمية متميزة تساعد الطالبات على اكتساب الخبرة العملية اللازمة.`,
      image: '/images/news/partnership.jpg',
      date: '2024-01-05',
      category: 'الشراكات',
      author: 'مكتب الشراكات',
      tags: ['شراكة', 'تعاون', 'تدريب', 'مستشفى']
    },
    4: {
      id: 4,
      title: 'فوز أبحاث الكلية بجائزة التميز العلمي',
      excerpt: 'حصلت ثلاثة أبحاث من كلية البنات الطبية على جائزة التميز العلمي على مستوى الجامعات السعودية لهذا العام في مجال الطب والعلوم الصحية.',
      content: `حققت كلية البنات الطبية إنجازاً علمياً متميزاً بحصول ثلاثة من أبحاثها على جائزة التميز العلمي على مستوى الجامعات السعودية. الأبحاث الفائزة تناولت مواضيع متقدمة في الطب والعلوم الصحية وساهمت في تطوير المعرفة الطبية.

      البحث الأول بعنوان "تأثير التغذية على الصحة النفسية" قدمته الدكتورة سارة الأحمد، والثاني حول "تطبيقات الذكاء الاصطناعي في التشخيص المبكر" للدكتورة منى العلي، والثالث عن "العلاج الجيني للأمراض الوراثية" للدكتورة فاطمة محمد.

      وأعربت عميدة الكلية عن فخرها بهذا الإنجاز، مؤكدة أن الكلية تولي أهمية كبيرة للبحث العلمي وتسعى لدعم الباحثات في مختلف التخصصات الطبية.`,
      image: '/images/news/research-award.jpg',
      date: '2023-12-20',
      category: 'البحث العلمي',
      author: 'وحدة البحث العلمي',
      tags: ['بحث', 'جائزة', 'تميز', 'علمي']
    },
    5: {
      id: 5,
      title: 'ورشة عمل حول الذكاء الاصطناعي في الطب',
      excerpt: 'نظمت وحدة التعليم الإلكتروني ورشة عمل متخصصة حول استخدام الذكاء الاصطناعي في التشخيص الطبي والعلاج بمشاركة خبراء دوليين.',
      content: `استضافت كلية البنات الطبية ورشة عمل متخصصة حول تطبيقات الذكاء الاصطناعي في المجال الطبي. الورشة التي نظمتها وحدة التعليم الإلكتروني، شهدت مشاركة خبراء من داخل وخارج المملكة وتناولت أحدث التطورات في هذا المجال.

      تضمنت الورشة عروضاً تطبيقية حول استخدام الذكاء الاصطناعي في تحليل الصور الطبية، التشخيص المبكر للأمراض، وتطوير أدوية جديدة. كما ناقش المشاركون التحديات الأخلاقية والقانونية المرتبطة بهذه التقنيات.

      حضر الورشة أكثر من 200 مشارك من أعضاء هيئة التدريس والطالبات والباحثين المهتمين بهذا المجال الواعد.`,
      image: '/images/news/ai-workshop.jpg',
      date: '2023-12-15',
      category: 'الفعاليات',
      author: 'وحدة التعليم الإلكتروني',
      tags: ['ورشة', 'ذكاء اصطناعي', 'طب', 'تكنولوجيا']
    }
  }

  const allNews = [
    { id: 1, title: 'كلية البنات الطبية تحتفل بتخريج الدفعة الجديدة', category: 'أخبار الكلية', date: '2024-01-15' },
    { id: 2, title: 'إطلاق برنامج التعليم الطبي التكاملي الجديد', category: 'البرامج التعليمية', date: '2024-01-10' },
    { id: 3, title: 'توقيع اتفاقية تعاون مع مستشفى الملك فهد', category: 'الشراكات', date: '2024-01-05' },
    { id: 4, title: 'فوز أبحاث الكلية بجائزة التميز العلمي', category: 'البحث العلمي', date: '2023-12-20' },
    { id: 5, title: 'ورشة عمل حول الذكاء الاصطناعي في الطب', category: 'الفعاليات', date: '2023-12-15' }
  ]

  useEffect(() => {
    const currentNews = newsData[slug]
    if (currentNews) {
      setNews(currentNews)
      setRelatedNews(allNews.filter(item => item.id !== parseInt(slug)).slice(0, 3))
    }
    setLoading(false)
  }, [slug])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  const handleShare = (platform) => {
    if (!news) return
    
    const text = news.title
    const url = shareUrl
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`)
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
        break
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`)
        break
    }
  }

  if (loading) {
    return (
      <div className="section-container py-20">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!news) {
    return (
      <div className="section-container py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">الخبر غير موجود</h1>
        <p className="text-gray-600 mb-8">عذراً، لم نتمكن من العثور على الخبر المطلوب</p>
        <Link href="/news" className="btn-primary">
          العودة إلى الأخبار
        </Link>
      </div>
    )
  }

  return (
    <div className="section-container py-20">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
          <li><Link href="/" className="hover:text-blue-600">الرئيسية</Link></li>
          <li>/</li>
          <li><Link href="/news" className="hover:text-blue-600">الأخبار</Link></li>
          <li>/</li>
          <li className="text-gray-800 truncate">{news.title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <article className="bg-white rounded-xl card-shadow overflow-hidden">
            {/* Header Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg width='800' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='20' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eصورة الخبر%3C/text%3E%3C/svg%3E"
                }}
              />
              <div className="absolute top-4 right-4">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {news.category}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {news.title}
              </h1>

              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(news.date)}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {news.author}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-sm text-gray-600 ml-3">مشاركة:</span>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                {news.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Tags */}
              {news.tags && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">الكلمات المفتاحية:</h4>
                  <div className="flex flex-wrap gap-2">
                    {news.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-8">
            {/* Related News */}
            <div className="bg-white rounded-xl card-shadow p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">أخبار ذات صلة</h3>
              <div className="space-y-4">
                {relatedNews.map((item) => (
                  <Link key={item.id} href={`/news/${item.id}`} className="block group">
                    <div className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 mb-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">{item.category}</span>
                        <span>{formatDate(item.date)}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/news" className="block text-center mt-6 text-blue-600 hover:text-blue-800 font-medium">
                عرض جميع الأخبار →
              </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl card-shadow p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">روابط مفيدة</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  • عن الكلية
                </Link>
                <Link href="/programs" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  • البرامج الأكاديمية
                </Link>
                <Link href="/hospitals" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  • المستشفيات
                </Link>
                <Link href="/contact" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  • اتصل بنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail 
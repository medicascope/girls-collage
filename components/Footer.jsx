import Link from 'next/link'
import { urlFor } from '../lib/sanity'
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = ({ siteSettings }) => {
  // Use Sanity data if available, otherwise fallback
  const settings = siteSettings || {
    title: 'كلية البنات الطبية',
    titleEn: 'Girls Medical College',
    logo: null,
    contact: {
      email: 'info@girlsmedcollege.edu',
      phone: '+966 11 123 4567',
      address: 'الرياض، المملكة العربية السعودية'
    },
    socialMedia: [],
    footerText: 'كلية رائدة في التعليم الطبي والبحث العلمي، نسعى لإعداد جيل من الطبيبات المتميزات لخدمة المجتمع.'
  }
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'نبذة عن الكلية',
      links: [
        { name: 'نشأة الكلية', href: '/about/history' },
        { name: 'الرؤية والرسالة', href: '/about/vision' },
        { name: 'الأهداف الاستراتيجية', href: '/about/goals' },
        { name: 'كلمة العميدة', href: '/dean-message' }
      ]
    },
    {
      title: 'الأقسام والبرامج',
      links: [
        { name: 'أقسام الكلية', href: '/departments' },
        { name: 'البرامج الدراسية', href: '/programs' },
        { name: 'وحدات الكلية', href: '/units' },
        { name: 'وحدة ضمان الجودة', href: '/quality-assurance' }
      ]
    },
    {
      title: 'الخدمات',
      links: [
        { name: 'مستشفيات الكلية', href: '/hospitals' },
        { name: 'معمل المهارات', href: '/skills-lab' },
        { name: 'التعليم الإلكتروني', href: '/e-learning' },
        { name: 'الأبحاث العلمية', href: '/research' }
      ]
    },
    {
      title: 'المعلومات',
      links: [
        { name: 'الأخبار', href: '/news' },
        { name: 'الفعاليات', href: '/events' },
        { name: 'اتصل بنا', href: '/contact' },
        { name: 'الأسئلة الشائعة', href: '/faq' }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-container py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8">
          {/* College Info */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="flex items-center space-x-reverse space-x-3 mb-6">
              {settings.logo?.asset ? (
                <img 
                  src={urlFor(settings.logo).width(40).height(40).url()} 
                  alt={settings.logo.alt || settings.title}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-0 ml-[7px]">
                  <span className="text-white font-bold">كب</span>
                </div>
              )}
              <div>
                <h3 className="text-lg font-bold">{settings.title}</h3>
                <p className="text-sm text-gray-400 mt-[-5px]">{settings.titleEn}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              {settings.footerText}
            </p>
            {/* Social Media */}
            <div className="flex space-x-reverse space-x-4 mb-8 md:mb-8">
              {/* Social icons using react-icons */}
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 ml-[16px] mr-[0]" aria-label="Facebook">
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 ml-[16px] mr-[0]" aria-label="Telegram">
                <FaTelegramPlane className="text-white text-lg mt-[1px] mr-[2px]" />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300 ml-[16px] mr-[0]" aria-label="Instagram">
                <FaInstagram className="text-white text-lg" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300 ml-[16px]" aria-label="LinkedIn">
                <FaLinkedinIn className="text-white text-lg" />
              </a>
            </div>
            {/* On medium and below, show the rest of the content below icons */}
            <div className="flex flex-col md:hidden">
              {footerSections.map((section) => (
                <div key={section.title} className="mt-6">
                  <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* On large screens, show the footer sections as columns */}
          <div className="hidden md:flex lg:col-span-4 w-full">
            {footerSections.map((section) => (
              <div key={section.title} className="flex-1 ml-8">
                <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="border-t border-gray-800">
        <div className="section-container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start space-x-reverse space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center ml-3 mr-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">البريد الإلكتروني</p>
                <p className="text-white">{settings.contact?.email}</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-reverse space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center ml-3 mr-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">الهاتف</p>
                <p className="text-white">{settings.contact?.phone}</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-reverse space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center ml-3 mr-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">العنوان</p>
                <p className="text-white">{settings.contact?.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {settings.title}. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-reverse space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                شروط الاستخدام
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                خريطة الموقع
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
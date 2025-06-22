export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">معلومات الاتصال</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            يمكنكم التواصل معنا من خلال الوسائل المختلفة أو زيارة مقر الكلية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Address */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">العنوان</h3>
            <p className="text-gray-600 leading-relaxed">
              كلية البنات الطبية<br />
              طريق الملك عبدالعزيز<br />
              الرياض 12345<br />
              المملكة العربية السعودية
            </p>
          </div>

          {/* Phone & Email */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">الهاتف والبريد</h3>
            <div className="space-y-3 text-gray-600">
              <p>📞 +966 11 123 4567</p>
              <p>📠 +966 11 123 4568</p>
              <p>📧 info@girlsmedcollege.edu</p>
              <p>🌐 www.girlsmedcollege.edu</p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">ساعات العمل</h3>
            <div className="space-y-3 text-gray-600">
              <p><strong>الأحد - الخميس:</strong><br />8:00 ص - 4:00 م</p>
              <p><strong>الجمعة - السبت:</strong><br />مغلق</p>
              <p><strong>الطوارئ:</strong><br />24/7</p>
            </div>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">أرقام الأقسام</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { dept: 'شؤون الطالبات', phone: '+966 11 123 4570', ext: '101' },
              { dept: 'القبول والتسجيل', phone: '+966 11 123 4571', ext: '102' },
              { dept: 'الشؤون الأكاديمية', phone: '+966 11 123 4572', ext: '103' },
              { dept: 'المكتبة', phone: '+966 11 123 4573', ext: '104' },
              { dept: 'تقنية المعلومات', phone: '+966 11 123 4574', ext: '105' },
              { dept: 'الموارد البشرية', phone: '+966 11 123 4575', ext: '106' }
            ].map((contact, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-800 mb-2">{contact.dept}</h4>
                <p className="text-gray-600">{contact.phone}</p>
                <p className="text-sm text-gray-500">تحويلة: {contact.ext}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-8">
            <span className="gradient-text">تابعونا</span>
          </h3>
          
          <div className="flex justify-center space-x-6 space-x-reverse">
            {[
              { name: 'تويتر', icon: '🐦', link: '#' },
              { name: 'إنستغرام', icon: '📷', link: '#' },
              { name: 'لينكد إن', icon: '💼', link: '#' },
              { name: 'يوتيوب', icon: '📺', link: '#' },
              { name: 'واتساب', icon: '💬', link: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="w-12 h-12 mr-0 ml-[16px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
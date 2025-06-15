'use client'

import { useState } from 'react'

const CollegeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">فيديو تعريفي بالكلية</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            شاهد فيديو تعريفي شامل عن كلية البنات الطبية ومرافقها وبرامجها التعليمية والبحثية
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden card-shadow">
            <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100">
              {!isPlaying ? (
                // Video Thumbnail
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="relative w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='450' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='40%25' font-size='24' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eفيديو تعريفي%3C/text%3E%3Ctext x='50%25' y='60%25' font-size='16' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eكلية البنات الطبية%3C/text%3E%3C/svg%3E")`
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110 group"
                      >
                        <svg className="w-8 h-8 text-blue-600 group-hover:text-blue-700 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Video Player (placeholder)
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="mb-4">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4zM9 12l3-2v4l-3-2z" />
                      </svg>
                    </div>
                    <p className="text-lg mb-2">فيديو تعريفي بكلية البنات الطبية</p>
                    <p className="text-sm opacity-75">مدة الفيديو: 8:30 دقائق</p>
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="mt-4 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors duration-300"
                    >
                      إيقاف العرض
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Video Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center ml-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">المرافق والمباني</h3>
              </div>
              <p className="text-blue-700 text-sm">
                جولة شاملة في مرافق الكلية من قاعات التدريس والمختبرات إلى المستشفيات التعليمية
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center ml-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-purple-800">البرامج التعليمية</h3>
              </div>
              <p className="text-purple-700 text-sm">
                نظرة على البرامج الأكاديمية المتنوعة وطرق التدريس الحديثة المتبعة في الكلية
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center ml-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-pink-800">الحياة الجامعية</h3>
              </div>
              <p className="text-pink-700 text-sm">
                تعرف على الحياة الجامعية الثرية والأنشطة الطلابية والخدمات المتاحة للطالبات
              </p>
            </div>
          </div>

          {/* Additional Video Links */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">فيديوهات أخرى</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg card-shadow">
                <div className="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">جولة في المختبرات</h4>
                <p className="text-gray-600 text-sm">مدة: 5:20</p>
              </div>

              <div className="bg-white p-4 rounded-lg card-shadow">
                <div className="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">حفل التخريج 2023</h4>
                <p className="text-gray-600 text-sm">مدة: 15:45</p>
              </div>

              <div className="bg-white p-4 rounded-lg card-shadow">
                <div className="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">شهادات الخريجات</h4>
                <p className="text-gray-600 text-sm">مدة: 8:12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollegeVideo 
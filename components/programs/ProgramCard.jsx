'use client'

import { useState } from 'react'

export default function ProgramCard({ program }) {
  const [imageError, setImageError] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const handleImageError = () => {
    setImageError(true)
  }

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: '📋' },
    { id: 'curriculum', label: 'المنهج', icon: '📚' },
    { id: 'admission', label: 'القبول', icon: '📝' },
    { id: 'career', label: 'المهن', icon: '💼' },
    { id: 'fees', label: 'الرسوم', icon: '💰' }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium text-black ml-2">
                {program.level}
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium text-black">
                {program.duration}
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-3">{program.name}</h3>
            <p className="text-xl opacity-90 mb-4">{program.description}</p>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="text-center">
                <div className="text-2xl font-bold">{program.capacity}</div>
                <div className="text-sm opacity-80">سعة القبول</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{program.currentStudents}</div>
                <div className="text-sm opacity-80">طالبة حالياً</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            {!imageError ? (
              <img
                src={program.image}
                alt={program.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white border-opacity-30"
                onError={handleImageError}
              />
            ) : (
              <div className="w-32 h-32 mx-auto rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            )}
            <div className="mt-4">
              <div className="text-xl font-bold">{program.degree}</div>
              <div className="text-sm opacity-80">الدرجة العلمية</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-gray-50 px-8 py-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">نظرة عامة على البرنامج</h4>
              <p className="text-gray-600 leading-relaxed">{program.overview}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">الأهداف التعليمية</h4>
              <div className="grid grid-cols-1 gap-3">
                {program.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-600 flex-1">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'curriculum' && (
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-4 text-gray-800">المنهج الدراسي</h4>
            <div className="space-y-6">
              {Object.entries(program.curriculum).map(([year, subjects], index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h5 className="text-lg font-bold mb-4 text-blue-600">{year}</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {subjects.map((subject, subIndex) => (
                      <div key={subIndex} className="flex items-center space-x-2 space-x-reverse bg-white p-3 rounded-lg">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-gray-700 text-sm">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'admission' && (
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-4 text-gray-800">متطلبات القبول</h4>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h5 className="font-bold text-blue-800 mb-4">المتطلبات الأكاديمية</h5>
                <div className="space-y-2">
                  {program.admissionRequirements.academic.map((req, index) => (
                    <div key={index} className="flex items-start space-x-2 space-x-reverse">
                      <svg className="w-4 h-4 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h5 className="font-bold text-green-800 mb-4">المتطلبات الشخصية</h5>
                <div className="space-y-2">
                  {program.admissionRequirements.personal.map((req, index) => (
                    <div key={index} className="flex items-start space-x-2 space-x-reverse">
                      <svg className="w-4 h-4 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h5 className="font-bold text-purple-800 mb-4">المستندات المطلوبة</h5>
                <div className="space-y-2">
                  {program.admissionRequirements.documents.map((doc, index) => (
                    <div key={index} className="flex items-start space-x-2 space-x-reverse">
                      <svg className="w-4 h-4 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-gray-700 text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'career' && (
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-4 text-gray-800">الفرص المهنية</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {program.careerProspects.map((career, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">{career}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'fees' && (
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-4 text-gray-800">الرسوم الدراسية</h4>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{program.fees.tuition}</div>
                  <div className="text-gray-600">الرسوم الدراسية</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{program.fees.registration}</div>
                  <div className="text-gray-600">رسوم التسجيل</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{program.fees.lab || program.fees.research || 'غير محدد'}</div>
                  <div className="text-gray-600">{program.fees.lab ? 'رسوم المختبر' : 'رسوم البحث'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">{program.fees.total}</div>
                  <div className="text-gray-600">الإجمالي السنوي</div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>ملاحظة:</strong> الرسوم قابلة للتغيير حسب اللوائح المعتمدة. يرجى التأكد من الرسوم الحالية عند التقديم.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
            تقديم طلب الالتحاق
          </button>
          <button className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-4 px-8 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all">
            تحميل دليل البرنامج
          </button>
        </div>
      </div>
    </div>
  )
} 
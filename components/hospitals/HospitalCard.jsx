'use client'

import { useState } from 'react'

export default function HospitalCard({ hospital }) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-80 lg:h-full">
          {!imageError ? (
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-20 h-20 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-blue-600 font-medium">{hospital.name}</p>
              </div>
            </div>
          )}
          
          {/* Overlay Badge */}
          <div className="absolute top-4 right-4 bg-white bg-opacity-95 px-4 py-2 rounded-full">
            <span className="text-sm font-bold text-gray-800">
              تأسس {hospital.establishedYear}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{hospital.name}</h3>
            <p className="text-gray-600 leading-relaxed">{hospital.description}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{hospital.totalBeds}</div>
              <div className="text-sm text-gray-600">إجمالي الأسرة</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{hospital.operatingRooms}</div>
              <div className="text-sm text-gray-600">غرف العمليات</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">{hospital.icuBeds}</div>
              <div className="text-sm text-gray-600">أسرة العناية المركزة</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">{hospital.emergencyBeds}</div>
              <div className="text-sm text-gray-600">أسرة الطوارئ</div>
            </div>
          </div>

          {/* Specialties */}
          <div className="mb-8">
            <h4 className="font-bold text-gray-800 mb-4">التخصصات الطبية</h4>
            <div className="flex flex-wrap gap-2">
              {hospital.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="mb-8">
            <h4 className="font-bold text-gray-800 mb-4">المرافق والخدمات</h4>
            <div className="grid grid-cols-1 gap-2">
              {hospital.facilities.map((facility, index) => (
                <div key={index} className="flex items-center space-x-2 space-x-reverse">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 text-sm">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="mb-8">
            <h4 className="font-bold text-gray-800 mb-4">أرقام التواصل</h4>
            <div className="space-y-3">
              {hospital.contactNumbers.map((contact, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-gray-700 font-medium">{contact.type}</span>
                  <a
                    href={`tel:${contact.number}`}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-4">الاعتمادات والشهادات</h4>
            <div className="space-y-2">
              {hospital.certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 space-x-reverse">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-600 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all">
              حجز موعد
            </button>
            <button className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-bold hover:bg-blue-50 transition-all">
              معلومات أكثر
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 
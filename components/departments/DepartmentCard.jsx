'use client'

import Image from 'next/image'
import Link from 'next/link'

const DepartmentCard = ({ department }) => {
  return (
    <div className="bg-white rounded-2xl card-shadow overflow-hidden group">
      {/* Header with Image */}
      <div className="relative h-48">
        <img
          src={department.image}
          alt={department.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='16' text-anchor='middle' dy='.3em' fill='%236b7280'%3E" + department.name + "%3C/text%3E%3C/svg%3E"
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${department.color} opacity-80`}></div>
        <div className="absolute inset-0 flex items-end p-6">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">{department.name}</h3>
            <p className="opacity-90">{department.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Department Head */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">رئيس القسم</h4>
          <div className="flex items-center space-x-reverse space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">د</span>
            </div>
            <div>
              <p className="font-medium text-gray-800">{department.headOfDepartment}</p>
              <p className="text-sm text-gray-600">رئيس {department.name}</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{department.facultyCount}</div>
            <div className="text-sm text-blue-700">عضو هيئة تدريس</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{department.studentsCount}</div>
            <div className="text-sm text-purple-700">طالبة</div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="space-y-4 mb-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
              <svg className="w-4 h-4 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              الرؤية
            </h5>
            <p className="text-gray-600 text-sm leading-relaxed">{department.vision}</p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
              <svg className="w-4 h-4 ml-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              الرسالة
            </h5>
            <p className="text-gray-600 text-sm leading-relaxed">{department.mission}</p>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-800 mb-3">التخصصات الفرعية</h5>
          <div className="flex flex-wrap gap-2">
            {department.specializations.map((spec, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Organizational Structure */}
        <div className="mb-6">
          <h5 className="font-semibold text-gray-800 mb-3">الهيكل التنظيمي</h5>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span>رئيس القسم</span>
              <span className="text-blue-600 font-medium">1</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span>أساتذة</span>
              <span className="text-blue-600 font-medium">{Math.ceil(department.facultyCount * 0.3)}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span>أساتذة مشاركون</span>
              <span className="text-blue-600 font-medium">{Math.ceil(department.facultyCount * 0.4)}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span>أساتذة مساعدون</span>
              <span className="text-blue-600 font-medium">{Math.floor(department.facultyCount * 0.3)}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link 
          href={`/departments/${department.id}`}
          className="w-full btn-primary text-center block"
        >
          تفاصيل القسم
        </Link>
      </div>
    </div>
  )
}

export default DepartmentCard 
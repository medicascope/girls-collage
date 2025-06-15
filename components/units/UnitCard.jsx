export default function UnitCard({ unit }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="text-4xl">{unit.icon}</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">{unit.name}</h3>
            <p className="opacity-90">{unit.description}</p>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{unit.members}</div>
            <div className="text-sm opacity-80">عضو</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{unit.establishedYear}</div>
            <div className="text-sm opacity-80">تأسس</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{unit.publications.length}</div>
            <div className="text-sm opacity-80">منشور</div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Head Information */}
        <div className="mb-8 bg-gray-50 p-6 rounded-xl">
          <h4 className="font-bold text-gray-800 mb-3">رئيس الوحدة</h4>
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              {unit.headName.charAt(2)}
            </div>
            <div>
              <p className="font-bold text-gray-800">{unit.headName}</p>
              <p className="text-gray-600 text-sm">{unit.headTitle}</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mb-8 space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center space-x-2 space-x-reverse">
              <span className="text-blue-600">👁️</span>
              <span>الرؤية</span>
            </h4>
            <p className="text-gray-600 bg-blue-50 p-4 rounded-lg">{unit.vision}</p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center space-x-2 space-x-reverse">
              <span className="text-green-600">🎯</span>
              <span>الرسالة</span>
            </h4>
            <p className="text-gray-600 bg-green-50 p-4 rounded-lg">{unit.mission}</p>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-8">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center space-x-2 space-x-reverse">
            <span className="text-purple-600">📋</span>
            <span>الأهداف</span>
          </h4>
          <div className="space-y-2">
            {unit.objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-600 flex-1">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-8">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center space-x-2 space-x-reverse">
            <span className="text-orange-600">⚡</span>
            <span>الأنشطة</span>
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {unit.activities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-2 space-x-reverse bg-orange-50 p-3 rounded-lg">
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-gray-700 text-sm">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Committees */}
        <div className="mb-8">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center space-x-2 space-x-reverse">
            <span className="text-indigo-600">👥</span>
            <span>اللجان</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {unit.committees.map((committee, index) => (
              <div key={index} className="bg-indigo-50 p-3 rounded-lg text-center">
                <span className="text-indigo-700 font-medium text-sm">{committee}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-8">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center space-x-2 space-x-reverse">
            <span className="text-pink-600">📚</span>
            <span>المنشورات</span>
          </h4>
          <div className="space-y-2">
            {unit.publications.map((publication, index) => (
              <div key={index} className="flex items-center space-x-2 space-x-reverse bg-pink-50 p-3 rounded-lg">
                <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-gray-700 text-sm">{publication}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-bold text-gray-800 mb-4">معلومات التواصل</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 space-x-reverse">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${unit.contact.phone}`} className="text-gray-700 hover:text-blue-600">
                {unit.contact.phone}
              </a>
            </div>
            
            <div className="flex items-center space-x-3 space-x-reverse">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${unit.contact.email}`} className="text-gray-700 hover:text-green-600">
                {unit.contact.email}
              </a>
            </div>
            
            <div className="flex items-center space-x-3 space-x-reverse">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700">{unit.contact.office}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
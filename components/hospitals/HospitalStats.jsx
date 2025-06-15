export default function HospitalStats({ hospitals }) {
  // Calculate totals
  const totalBeds = hospitals.reduce((sum, hospital) => sum + hospital.totalBeds, 0)
  const totalOperatingRooms = hospitals.reduce((sum, hospital) => sum + hospital.operatingRooms, 0)
  const totalIcuBeds = hospitals.reduce((sum, hospital) => sum + hospital.icuBeds, 0)
  const totalEmergencyBeds = hospitals.reduce((sum, hospital) => sum + hospital.emergencyBeds, 0)

  const stats = [
    {
      title: 'إجمالي الأسرة',
      value: totalBeds,
      icon: '🏥',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      title: 'غرف العمليات',
      value: totalOperatingRooms,
      icon: '⚕️',
      color: 'from-green-600 to-green-700',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      title: 'أسرة العناية المركزة',
      value: totalIcuBeds,
      icon: '🫀',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      title: 'أسرة الطوارئ',
      value: totalEmergencyBeds,
      icon: '🚨',
      color: 'from-red-600 to-red-700',
      bgColor: 'from-red-50 to-red-100'
    },
    {
      title: 'عدد المستشفيات',
      value: hospitals.length,
      icon: '🏢',
      color: 'from-indigo-600 to-indigo-700',
      bgColor: 'from-indigo-50 to-indigo-100'
    },
    {
      title: 'التخصصات الطبية',
      value: [...new Set(hospitals.flatMap(h => h.specialties))].length,
      icon: '👩‍⚕️',
      color: 'from-pink-600 to-pink-700',
      bgColor: 'from-pink-50 to-pink-100'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">إحصائيات المستشفيات</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نظرة شاملة على الخدمات الطبية والمرافق المتاحة في مستشفيات كلية البنات الطبية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.bgColor} p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 text-6xl">{stat.icon}</div>
                <div className="absolute bottom-4 left-4 text-4xl opacity-50">{stat.icon}</div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className={`text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value.toLocaleString()}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-700">
                  {stat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl text-center">
            <h4 className="font-bold mb-2">خدمة على مدار الساعة</h4>
            <p className="text-sm opacity-90">طوارئ 24/7 في جميع المستشفيات</p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-xl text-center">
            <h4 className="font-bold mb-2">أحدث التقنيات</h4>
            <p className="text-sm opacity-90">أجهزة طبية متطورة ومعايير عالمية</p>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl text-center">
            <h4 className="font-bold mb-2">كادر مؤهل</h4>
            <p className="text-sm opacity-90">أطباء واستشاريون ذوو خبرة عالية</p>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-xl text-center">
            <h4 className="font-bold mb-2">بيئة تعليمية</h4>
            <p className="text-sm opacity-90">مستشفيات تعليمية لتدريب الطالبات</p>
          </div>
        </div>

        {/* Hospital Capacity Chart */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">توزيع السعة السريرية</span>
          </h3>
          
          <div className="space-y-6">
            {hospitals.map((hospital, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-800">{hospital.name}</h4>
                  <span className="text-2xl font-bold text-blue-600">{hospital.totalBeds}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">الأسرة العادية</span>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{width: `${((hospital.totalBeds - hospital.icuBeds - hospital.emergencyBeds) / hospital.totalBeds) * 100}%`}}
                        ></div>
                      </div>
                      <span className="font-medium">{hospital.totalBeds - hospital.icuBeds - hospital.emergencyBeds}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">العناية المركزة</span>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{width: `${(hospital.icuBeds / hospital.totalBeds) * 100}%`}}
                        ></div>
                      </div>
                      <span className="font-medium">{hospital.icuBeds}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">الطوارئ</span>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-600 h-2 rounded-full" 
                          style={{width: `${(hospital.emergencyBeds / hospital.totalBeds) * 100}%`}}
                        ></div>
                      </div>
                      <span className="font-medium">{hospital.emergencyBeds}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
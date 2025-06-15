export default function ProgramStats({ programs }) {
  // Calculate totals
  const totalCapacity = programs.reduce((sum, program) => sum + program.capacity, 0)
  const totalCurrentStudents = programs.reduce((sum, program) => sum + program.currentStudents, 0)
  const occupancyRate = Math.round((totalCurrentStudents / totalCapacity) * 100)
  
  const stats = [
    {
      title: 'عدد البرامج',
      value: programs.length,
      icon: '🎓',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      title: 'إجمالي الطالبات',
      value: totalCurrentStudents,
      icon: '👩‍🎓',
      color: 'from-green-600 to-green-700',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      title: 'سعة القبول',
      value: totalCapacity,
      icon: '📊',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      title: 'معدل الإشغال',
      value: `${occupancyRate}%`,
      icon: '📈',
      color: 'from-orange-600 to-orange-700',
      bgColor: 'from-orange-50 to-orange-100'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">إحصائيات البرامج الأكاديمية</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نظرة شاملة على البرامج الأكاديمية المتنوعة وأعداد الطالبات المسجلات في كلية البنات الطبية
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.bgColor} p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 text-4xl">{stat.icon}</div>
                <div className="absolute bottom-4 left-4 text-2xl opacity-50">{stat.icon}</div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                </div>
                <h3 className="text-lg font-bold text-gray-700">
                  {stat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Programs Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">
              <span className="gradient-text">توزيع الطالبات حسب البرنامج</span>
            </h3>
            <div className="space-y-4">
              {programs.map((program, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-800 text-sm">{program.name}</h4>
                    <span className="text-sm font-medium text-gray-600">
                      {program.currentStudents} / {program.capacity}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500" 
                      style={{width: `${(program.currentStudents / program.capacity) * 100}%`}}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{program.level}</span>
                    <span>{Math.round((program.currentStudents / program.capacity) * 100)}% ممتلئ</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">
              <span className="gradient-text">مقارنة الرسوم الدراسية</span>
            </h3>
            <div className="space-y-4">
              {programs.map((program, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{program.name}</h4>
                      <p className="text-xs text-gray-500">{program.level} - {program.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{program.fees.total}</div>
                      <div className="text-xs text-gray-500">سنوياً</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">حقائق سريعة</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">أقل رسوم</h4>
              <p className="text-2xl font-bold text-blue-600">
                {Math.min(...programs.map(p => parseInt(p.fees.total.replace(/[^\d]/g, '')))).toLocaleString()} ريال
              </p>
              <p className="text-sm text-gray-600 mt-1">دبلوم طب الأسرة</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">أكبر سعة</h4>
              <p className="text-2xl font-bold text-green-600">
                {Math.max(...programs.map(p => p.capacity))} طالبة
              </p>
              <p className="text-sm text-gray-600 mt-1">بكالوريوس الطب</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">أعلى إشغال</h4>
              <p className="text-2xl font-bold text-purple-600">
                {Math.max(...programs.map(p => Math.round((p.currentStudents / p.capacity) * 100)))}%
              </p>
              <p className="text-sm text-gray-600 mt-1">ماجستير الطب الباطني</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">أطول مدة</h4>
              <p className="text-2xl font-bold text-orange-600">6 سنوات</p>
              <p className="text-sm text-gray-600 mt-1">بكالوريوس الطب والجراحة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
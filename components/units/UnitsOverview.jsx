export default function UnitsOverview({ units }) {
  // Calculate totals
  const totalMembers = units.reduce((sum, unit) => sum + unit.members, 0)
  const totalPublications = units.reduce((sum, unit) => sum + unit.publications.length, 0)
  const totalCommittees = units.reduce((sum, unit) => sum + unit.committees.length, 0)
  const avgEstablishedYear = Math.round(units.reduce((sum, unit) => sum + unit.establishedYear, 0) / units.length)

  const stats = [
    {
      title: 'عدد الوحدات',
      value: units.length,
      icon: '🏢',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      title: 'إجمالي الأعضاء',
      value: totalMembers,
      icon: '👥',
      color: 'from-green-600 to-green-700',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      title: 'إجمالي المنشورات',
      value: totalPublications,
      icon: '📚',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      title: 'إجمالي اللجان',
      value: totalCommittees,
      icon: '⚙️',
      color: 'from-orange-600 to-orange-700',
      bgColor: 'from-orange-50 to-orange-100'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">نظرة عامة على الوحدات</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تعمل وحدات الكلية المتخصصة على تطوير جودة التعليم الطبي وخدمة المجتمع من خلال التميز والابتكار
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
                  {stat.value.toLocaleString()}
                </div>
                <h3 className="text-lg font-bold text-gray-700">
                  {stat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Units by Category */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">
              <span className="gradient-text">وحدات الجودة والتطوير</span>
            </h3>
            <div className="space-y-4">
              {units.filter(unit => ['وحدة ضمان الجودة والاعتماد الأكاديمي', 'وحدة القياس والتقويم'].includes(unit.name)).map((unit, index) => (
                <div key={index} className="flex items-center space-x-3 space-x-reverse p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl ml-[5px] mr-0">{unit.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{unit.name}</h4>
                    <p className="text-gray-600 text-sm">{unit.members} عضو</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">
              <span className="gradient-text">وحدات التعليم والتدريب</span>
            </h3>
            <div className="space-y-4">
              {units.filter(unit => ['وحدة التعليم الطبي المتكامل', 'وحدة التعلم الإلكتروني', 'مختبر المهارات الطبية'].includes(unit.name)).map((unit, index) => (
                <div key={index} className="flex items-center space-x-3 space-x-reverse p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl ml-[5px] mr-0">{unit.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{unit.name}</h4>
                    <p className="text-gray-600 text-sm">{unit.members} عضو</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-14">
            <span className="gradient-text">المميزات الرئيسية للوحدات</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">معايير الجودة</h4>
              <p className="text-gray-600">تطبيق أعلى معايير الجودة العالمية في التعليم الطبي</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">التطوير المستمر</h4>
              <p className="text-gray-600">تحديث مستمر للمناهج والأساليب التعليمية</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">فريق متخصص</h4>
              <p className="text-gray-600">خبراء ومختصون في مختلف المجالات الطبية والأكاديمية</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">البحث والنشر</h4>
              <p className="text-gray-600">إنتاج بحوث علمية ومنشورات متخصصة</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">الابتكار</h4>
              <p className="text-gray-600">تطوير حلول مبتكرة للتحديات التعليمية</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">الشراكات</h4>
              <p className="text-gray-600">تعاون مع مؤسسات محلية وعالمية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
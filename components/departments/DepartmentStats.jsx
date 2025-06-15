const DepartmentStats = ({ departments }) => {
  // Calculate overall statistics
  const totalFaculty = departments.reduce((sum, dept) => sum + dept.facultyCount, 0)
  const totalStudents = departments.reduce((sum, dept) => sum + dept.studentsCount, 0)
  const totalSpecializations = departments.reduce((sum, dept) => sum + dept.specializations.length, 0)
  const totalDepartments = departments.length

  const stats = [
    {
      value: totalDepartments,
      label: 'قسم طبي',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-blue-600 to-blue-800',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      value: totalFaculty,
      label: 'عضو هيئة تدريس',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'from-purple-600 to-purple-800',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      value: totalStudents,
      label: 'طالبة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      color: 'from-pink-600 to-pink-800',
      bgColor: 'from-pink-50 to-pink-100'
    },
    {
      value: totalSpecializations,
      label: 'تخصص فرعي',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-green-600 to-green-800',
      bgColor: 'from-green-50 to-green-100'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">إحصائيات الأقسام</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نظرة شاملة على الأعداد والإحصائيات الخاصة بجميع أقسام الكلية
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className={`bg-gradient-to-br ${stat.bgColor} p-8 rounded-2xl card-shadow group hover:scale-105 transition-transform duration-300`}>
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Department Distribution Chart */}
        <div className="bg-white p-8 rounded-2xl card-shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">توزيع أعضاء هيئة التدريس حسب الأقسام</h3>
          
          <div className="space-y-4">
            {departments.map((dept, index) => {
              const percentage = (dept.facultyCount / totalFaculty * 100).toFixed(1)
              return (
                <div key={index} className="flex items-center">
                  <div className="w-40 text-sm font-medium text-gray-700 flex-shrink-0">
                    {dept.name}
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 bg-gradient-to-r ${dept.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-600 w-16 text-left">
                    {dept.facultyCount} ({percentage}%)
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Academic Ranks Distribution */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl card-shadow text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {Math.ceil(totalFaculty * 0.3)}
            </div>
            <div className="text-gray-600">أساتذة</div>
            <div className="text-sm text-gray-500 mt-1">
              {(totalFaculty * 0.3 / totalFaculty * 100).toFixed(0)}% من إجمالي أعضاء هيئة التدريس
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl card-shadow text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-2">
              {Math.ceil(totalFaculty * 0.4)}
            </div>
            <div className="text-gray-600">أساتذة مشاركون</div>
            <div className="text-sm text-gray-500 mt-1">
              {(totalFaculty * 0.4 / totalFaculty * 100).toFixed(0)}% من إجمالي أعضاء هيئة التدريس
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl card-shadow text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-pink-600 mb-2">
              {Math.floor(totalFaculty * 0.3)}
            </div>
            <div className="text-gray-600">أساتذة مساعدون</div>
            <div className="text-sm text-gray-500 mt-1">
              {(totalFaculty * 0.3 / totalFaculty * 100).toFixed(0)}% من إجمالي أعضاء هيئة التدريس
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DepartmentStats 
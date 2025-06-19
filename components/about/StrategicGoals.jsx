const StrategicGoals = ({ aboutData }) => {
  const fallbackGoals = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'التميز في التعليم الطبي',
      description: 'تطوير برامج تعليمية متقدمة تواكب أحدث التطورات في المجال الطبي وتخرج كوادر طبية متميزة قادرة على المنافسة عالمياً',
      objectives: [
        'تطوير المناهج الدراسية وفق أحدث المعايير الدولية',
        'استخدام أساليب التعليم التفاعلي والمحاكاة الطبية',
        'تطوير مهارات أعضاء هيئة التدريس باستمرار',
        'تعزيز برامج التعلم المدمج والتعليم الإلكتروني'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'ضمان الجودة والاعتماد',
      description: 'الحفاظ على أعلى معايير الجودة في جميع البرامج والخدمات والحصول على الاعتماد من أفضل المؤسسات المحلية والدولية',
      objectives: [
        'تطبيق نظام شامل لضمان الجودة',
        'الحصول على الاعتماد الأكاديمي المؤسسي والبرامجي',
        'التحسين المستمر للعمليات والخدمات',
        'قياس رضا الطالبات وأصحاب المصلحة'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'البحث العلمي والابتكار',
      description: 'تطوير البحث العلمي المتقدم والابتكار في المجال الطبي لحل المشكلات الصحية المجتمعية وتطوير العلوم الطبية',
      objectives: [
        'زيادة عدد البحوث المنشورة في المجلات المحكمة',
        'تطوير مراكز البحث المتخصصة',
        'تعزيز الشراكات البحثية مع المؤسسات العالمية',
        'نقل وتوطين التكنولوجيا الطبية المتقدمة'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'خدمة المجتمع والشراكة',
      description: 'تقديم خدمات صحية متميزة للمجتمع وبناء شراكات استراتيجية مع القطاع الصحي والمؤسسات التعليمية',
      objectives: [
        'تطوير الخدمات الصحية المجتمعية',
        'تنفيذ برامج التوعية الصحية',
        'بناء شراكات مع المستشفيات والمراكز الطبية',
        'المساهمة في حل المشكلات الصحية المجتمعية'
      ]
    }
  ]

  // Default icon for goals
  const defaultIcon = (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )

  // Use Sanity data or fallback
  const goals = aboutData?.strategicGoals?.length > 0 
    ? aboutData.strategicGoals.map((goal, index) => ({
        ...goal,
        icon: fallbackGoals[index]?.icon || defaultIcon
      }))
    : fallbackGoals

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">{aboutData?.strategicGoalsTitle || 'الغايات والأهداف الاستراتيجية'}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {aboutData?.strategicGoalsSubtitle || 'نسعى لتحقيق أهداف استراتيجية طموحة تجعل من كلية البنات الطبية رائدة في التعليم الطبي والبحث العلمي وخدمة المجتمع'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl card-shadow">
              <div className="flex items-center space-x-reverse space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0 ml-5 mr-0">
                  {goal.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{goal.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">الأهداف التفصيلية:</h4>
                {goal.objectives.map((objective, objIndex) => (
                  <div key={objIndex} className="flex items-start space-x-reverse space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StrategicGoals 
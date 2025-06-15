const VisionMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">رؤيتنا ورسالتنا</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نسعى لتحقيق التميز في التعليم الطبي والبحث العلمي لإعداد جيل من الطبيبات المؤهلات لخدمة المجتمع
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl card-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center ml-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">رؤيتنا</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              أن تكون كلية البنات الطبية كلية رائدة ومتميزة في التعليم الطبي والبحث العلمي على المستوى المحلي والإقليمي، 
              تسهم في إعداد كوادر طبية نسائية مؤهلة وقادرة على تقديم أفضل الخدمات الصحية للمجتمع، 
              وتواكب أحدث التطورات في مجال التعليم الطبي والممارسة الطبية.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl card-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center ml-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">رسالتنا</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              تلتزم كلية البنات الطبية بتقديم تعليم طبي متميز ومتطور، وإجراء بحوث علمية تطبيقية تخدم المجتمع، 
              وتقديم خدمات صحية عالية الجودة، مع الحرص على بناء شخصية الطالبة المسلمة المتوازنة علمياً وأخلاقياً، 
              وإعدادها لتكون طبيبة متميزة قادرة على المساهمة الفعالة في تطوير الخدمات الصحية.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">قيمنا الأساسية</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">التميز الأكاديمي</h4>
              <p className="text-gray-600">نسعى للتميز في جميع برامجنا التعليمية والبحثية</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">خدمة المجتمع</h4>
              <p className="text-gray-600">نلتزم بخدمة المجتمع وتحسين الصحة العامة</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">النزاهة والشفافية</h4>
              <p className="text-gray-600">نحافظ على أعلى معايير النزاهة في جميع أعمالنا</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission 
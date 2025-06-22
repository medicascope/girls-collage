import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import { sanityFetch, queries, urlFor } from '../../../lib/sanity'
import PortableText from '../../../components/PortableText'
import { notFound } from 'next/navigation'

// Helper function to extract text from portable text
const extractText = (content) => {
  if (!content) return '';
  if (typeof content === 'string') return content;
  
  if (Array.isArray(content)) {
    return content
      .map(block => {
        if (block._type === 'block' && block.children) {
          return block.children.map(child => child.text || '').join('');
        }
        return '';
      })
      .join(' ');
  }
  
  if (content._type === 'block' && content.children) {
    return content.children.map(child => child.text || '').join('');
  }
  
  return '';
};

// Helper function to get statistic value
const getStatValue = (stats, key) => {
  if (!Array.isArray(stats)) return 0;
  const stat = stats.find(s => s.label === key || s.key === key);
  return stat?.value || 0;
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const department = await sanityFetch({ 
    query: queries.departmentById, 
    params: { slug: resolvedParams.id } 
  });

  if (!department) {
    return {
      title: 'القسم غير موجود | كلية البنات الطبية',
    };
  }

  return {
    title: `${extractText(department.name)} | كلية البنات الطبية`,
    description: extractText(department.description) || `تفاصيل ${extractText(department.name)} في كلية البنات الطبية`,
  };
}

export default async function DepartmentDetailPage({ params }) {
  const resolvedParams = await params;
  
  // Fetch department data and site settings
  const [department, siteSettings] = await Promise.all([
    sanityFetch({ query: queries.departmentById, params: { slug: resolvedParams.id } }),
    sanityFetch({ query: queries.siteSettings }),
  ]);

  // Handle case where department is not found
  if (!department) {
    notFound();
  }

  // Extract safe data
  const safeData = {
    name: extractText(department.name) || 'قسم غير محدد',
    nameEn: extractText(department.nameEn) || '',
    description: department.description,
    mission: extractText(department.mission) || 'رسالة غير متوفرة',
    overview: department.overview,
    headOfDepartment: department.head?.name || 'غير محدد',
    headPosition: department.head?.position || 'رئيس القسم',
    headPhoto: department.head?.photo,
    facultyCount: getStatValue(department.statistics, 'facultyCount') || department.faculty?.length || 0,
    studentsCount: getStatValue(department.statistics, 'studentsCount') || 0,
    faculty: department.faculty || [],
    programs: department.programs || [],
    facilities: department.facilities || [],
    researchAreas: department.researchAreas || [],
    statistics: department.statistics || [],
    contact: department.contact,
    image: department.image,
  };

  return (
    <main>
      <Navigation siteSettings={siteSettings} />

      {/* Hero Section */}
      <section className="relative pt-30 pb-12 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[10px] z-1"></div>
        {safeData.image && (
          <div className="absolute inset-0">
            <img
              src={urlFor(safeData.image).width(1920).height(600).url()}
              alt={safeData.name}
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        )}
        
        <div className="relative section-container z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">كلية البنات الطبية - جامعة الأزهر</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              {safeData.name}
            </h1>
            
            {safeData.nameEn && (
              <h2 className="text-xl lg:text-2xl text-blue-200 mb-6 font-medium">
                {safeData.nameEn}
              </h2>
            )}
            
            {safeData.description && (
              <div className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
                <PortableText content={safeData.description} />
              </div>
            )}
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{safeData.facultyCount}</div>
                <div className="text-sm text-blue-200">عضو هيئة تدريس</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{safeData.studentsCount}</div>
                <div className="text-sm text-blue-200">طالبة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{safeData.facilities.length}</div>
                <div className="text-sm text-blue-200">مرفق طبي</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{safeData.programs.length || '5+'}</div>
                <div className="text-sm text-blue-200">برنامج أكاديمي</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Head & Mission */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Department Head */}
            {safeData.headOfDepartment !== 'غير محدد' && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center ml-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  رئيس القسم
                </h2>
                
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    {safeData.headPhoto ? (
                      <img
                        src={urlFor(safeData.headPhoto).width(100).height(100).url()}
                        alt={safeData.headOfDepartment}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <span className="text-xl text-white font-bold">د</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {safeData.headOfDepartment}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {safeData.headPosition}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      يقود القسم بخبرة واسعة في المجال الطبي والأكاديمي
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Mission */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center ml-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 713.138-3.138z" />
                  </svg>
                </div>
                رسالة القسم
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {safeData.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      {safeData.overview && (
        <section className="py-8 bg-gray-50">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 card-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center ml-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  نظرة عامة
                </h3>
                <div className="text-gray-600 leading-relaxed text-sm">
                  <PortableText content={safeData.overview} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Facilities & Research Areas */}
      {(safeData.facilities.length > 0 || safeData.researchAreas.length > 0) && (
        <section className="py-8 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Facilities */}
              {safeData.facilities.length > 0 && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    المرافق والتجهيزات
                  </h3>
                  <div className="space-y-2">
                    {safeData.facilities.map((facility, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Research Areas */}
              {safeData.researchAreas.length > 0 && (
                <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center ml-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    مجالات البحث العلمي
                  </h3>
                  <div className="space-y-2">
                    {safeData.researchAreas.map((area, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Faculty Members */}
      {safeData.faculty.length > 0 && (
        <section className="py-8 bg-gray-50">
          <div className="section-container">
            <h2 className="text-2xl font-bold text-center mb-8">أعضاء هيئة التدريس</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {safeData.faculty.map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-4 card-shadow text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200">
                    {member.photo ? (
                      <img
                        src={urlFor(member.photo).width(100).height(100).url()}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <span className="text-lg text-white font-bold">د</span>
                      </div>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">{member.name}</h4>
                  <p className="text-blue-600 text-xs">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Academic Programs & Contact */}
      <section className="py-8 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Academic Programs */}
            {safeData.programs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">البرامج الأكاديمية</h2>
                <div className="space-y-4">
                  {safeData.programs.map((program, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{program.title}</h4>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">النوع:</span>
                        <span className="font-medium text-blue-600">{program.type}</span>
                      </div>
                      {program.duration && (
                        <div className="flex justify-between items-center text-sm mt-1">
                          <span className="text-gray-600">المدة:</span>
                          <span className="font-medium text-purple-600">{program.duration}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Information */}
            {safeData.contact && (
              <div>
                <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                  <div className="space-y-4">
                    {safeData.contact.phone && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold">الهاتف</h4>
                          <p className="text-sm opacity-90">{safeData.contact.phone}</p>
                        </div>
                      </div>
                    )}

                    {safeData.contact.email && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold">البريد الإلكتروني</h4>
                          <p className="text-sm opacity-90">{safeData.contact.email}</p>
                        </div>
                      </div>
                    )}

                    {safeData.contact.office && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold">المكتب</h4>
                          <p className="text-sm opacity-90">{safeData.contact.office}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer siteSettings={siteSettings} />
    </main>
  );
}

import { notFound } from "next/navigation";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { sanityFetch, queries, urlFor } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const unit = await sanityFetch({
    query: queries.unitBySlug,
    params: { slug: params.slug },
  });

  if (!unit) {
    return {
      title: "Unit Not Found",
    };
  }

  return {
    title: `${unit.name} | كلية البنات الطبية`,
    description: unit.description || `معلومات حول ${unit.name}`,
  };
}

export default async function UnitDetailPage({ params }) {
  const [unit, siteSettings] = await Promise.all([
    sanityFetch({
      query: queries.unitBySlug,
      params: { slug: params.slug },
    }),
    sanityFetch({ query: queries.siteSettings }),
  ]);

  if (!unit) {
    notFound();
  }

  return (
    <main>
      <Navigation siteSettings={siteSettings} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 mt-[80px] md:mt-[88px]">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[10px] z-1"></div>
        {unit.image && (
          <div className="absolute inset-0">
            <img
              src={urlFor(unit.image).url()}
              alt={unit.name}
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
              {unit.name}
            </h1>
            
            {unit.nameEn && (
              <h2 className="text-xl lg:text-2xl text-blue-200 mb-6 font-medium">
                {unit.nameEn}
              </h2>
            )}
            
            {unit.description && (
              <div className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
                <PortableText value={unit.description} />
              </div>
            )}
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{(unit?.staff?.length || 0) + (unit?.head ? 1 : 0)}</div>
                <div className="text-sm text-blue-200">عضو فريق العمل</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{unit?.services?.length || 0}</div>
                <div className="text-sm text-blue-200">خدمة مقدمة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{unit?.committees?.length || 0}</div>
                <div className="text-sm text-blue-200">لجنة متخصصة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{unit?.facilities?.length || 0}</div>
                <div className="text-sm text-blue-200">مرفق ومختبر</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      {(unit.ourVision || unit.mission) && (
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {unit.ourVision && (
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">رؤيتنا</h3>
                  <p className="text-gray-700 leading-relaxed">{unit.ourVision}</p>
                </div>
              )}
              {unit.mission && (
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">رسالتنا</h3>
                  <p className="text-gray-700 leading-relaxed">{unit.mission}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Unit Head */}
      {unit.head && (
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">رئيس الوحدة</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    {unit.head.photo && (
                      <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                        <img
                          src={urlFor(unit.head.photo).url()}
                          alt={unit.head.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2 text-center md:text-right">
                    <h3 className="text-3xl font-bold mb-2 text-gray-900">
                      {unit.head.name}
                    </h3>
                    {unit.head.nameEn && (
                      <p className="text-xl text-gray-600 mb-4">{unit.head.nameEn}</p>
                    )}
                    <p className="text-xl text-blue-600 font-semibold mb-4">
                      {unit.head.position}
                    </p>
                    {unit.head.positionEn && (
                      <p className="text-lg text-gray-500">{unit.head.positionEn}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Objectives & Quality Objectives */}
      {(unit.objectives?.length > 0 || unit.departmentQualityObjectives?.length > 0) && (
        <section className="py-20 bg-white">
          <div className="section-container">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">الأهداف</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {unit.objectives?.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-gray-900">الأهداف العامة</h3>
                  <div className="space-y-4">
                    {unit.objectives.map((objective, index) => (
                      <div key={index} className="flex items-start space-x-4 space-x-reverse">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{objective}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {unit.departmentQualityObjectives?.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-gray-900">أهداف الجودة</h3>
                  <div className="space-y-4">
                    {unit.departmentQualityObjectives.map((objective, index) => (
                      <div key={index} className="flex items-start space-x-4 space-x-reverse">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{objective}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Services & Committees */}
      {(unit.services?.length > 0 || unit.committees?.length > 0) && (
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {unit.services?.length > 0 && (
                <div>
                  <h3 className="text-3xl font-bold mb-8">
                    <span className="gradient-text">الخدمات المقدمة</span>
                  </h3>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-1 gap-4">
                      {unit.services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-3 space-x-reverse">
                          <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <p className="text-gray-700">{service}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {unit.committees?.length > 0 && (
                <div>
                  <h3 className="text-3xl font-bold mb-8">
                    <span className="gradient-text">اللجان</span>
                  </h3>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-1 gap-4">
                      {unit.committees.map((committee, index) => (
                        <div key={index} className="flex items-center space-x-3 space-x-reverse">
                          <div className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></div>
                          <p className="text-gray-700">{committee}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Facilities & Achievements */}
      {(unit.facilities?.length > 0 || unit.achievements?.length > 0) && (
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {unit.facilities?.length > 0 && (
                <div>
                  <h3 className="text-3xl font-bold mb-8">
                    <span className="gradient-text">المرافق والتجهيزات</span>
                  </h3>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                    <div className="space-y-4">
                      {unit.facilities.map((facility, index) => (
                        <div key={index} className="flex items-start space-x-3 space-x-reverse">
                          <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{facility}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {unit.achievements?.length > 0 && (
                <div>
                  <h3 className="text-3xl font-bold mb-8">
                    <span className="gradient-text">الإنجازات الرئيسية</span>
                  </h3>
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
                    <div className="space-y-4">
                      {unit.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3 space-x-reverse">
                          <div className="w-6 h-6 bg-green-600 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Staff */}
      {unit.staff?.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">فريق العمل</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {unit.staff.map((staffMember) => (
                <div key={staffMember._id} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  {staffMember.photo && (
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={urlFor(staffMember.photo).url()}
                        alt={staffMember.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h4 className="text-xl font-bold mb-2 text-gray-900">
                    {staffMember.name}
                  </h4>
                  {staffMember.nameEn && (
                    <p className="text-sm text-gray-600 mb-2">{staffMember.nameEn}</p>
                  )}
                  <p className="text-blue-600 font-semibold">{staffMember.position}</p>
                  {staffMember.positionEn && (
                    <p className="text-sm text-gray-500">{staffMember.positionEn}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Information */}
      {unit.contact && (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="section-container">
            <h2 className="text-4xl font-bold text-center mb-16">معلومات التواصل</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-20 p-8 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {unit.contact.phone && (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">الهاتف</h3>
                      <p className="text-xl">{unit.contact.phone}</p>
                    </div>
                  )}
                  {unit.contact.email && (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">البريد الإلكتروني</h3>
                      <p className="text-xl">{unit.contact.email}</p>
                    </div>
                  )}
                  {unit.contact.address && (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">العنوان</h3>
                      <p className="text-xl">{unit.contact.address}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer siteSettings={siteSettings} />
    </main>
  );
} 
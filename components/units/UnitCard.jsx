import Link from 'next/link';
import { urlFor } from '../../lib/sanity';
import { PortableText } from '@portabletext/react';

// Utility function to safely extract text from Portable Text or return plain text
const extractText = (content) => {
  if (!content) return '';
  
  // If it's already a string, return it
  if (typeof content === 'string') return content;
  
  // If it's a Portable Text array
  if (Array.isArray(content)) {
    return content
      .map(block => {
        if (block._type === 'block' && block.children) {
          return block.children
            .map(child => child.text || '')
            .join('');
        }
        return '';
      })
      .join(' ');
  }
  
  // If it's a single Portable Text block
  if (content._type === 'block' && content.children) {
    return content.children
      .map(child => child.text || '')
      .join('');
  }
  
  return '';
};

// Helper function to get image URL with fallback
const getImageUrl = (image) => {
  if (image && image.asset) {
    return urlFor(image).width(800).height(600).url();
  }
  return "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eوحدة الكلية%3C/text%3E%3C/svg%3E";
};

export default function UnitCard({ unit }) {
  if (!unit) return null;

  // Use schema fields with safe extraction
  const safeData = {
    name: unit?.name || 'وحدة غير محددة',
    nameEn: unit?.nameEn || '',
    description: extractText(unit?.description) || 'وصف غير متوفر',
    vision: unit?.ourVision || 'رؤية غير متوفرة', 
    mission: unit?.mission || 'رسالة غير متوفرة',
    headName: unit?.head?.name || 'غير محدد',
    headTitle: unit?.head?.position || 'غير محدد',
    headPhoto: unit?.head?.photo,
    image: getImageUrl(unit?.image),
    staffCount: unit?.staff?.length || 0,
    committeesCount: unit?.committees?.length || 0,
    servicesCount: unit?.services?.length || 0,
    facilitiesCount: unit?.facilities?.length || 0,
    slug: unit?.slug?.current || unit?.id,
  };
  
  const unitUrl = safeData.slug ? `/units/${safeData.slug}` : '#';

  return (
    <Link href={unitUrl} className="block">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group">
        {/* Header with Image */}
        <div className="relative h-48">
          <img
            src={safeData.image}
            alt={safeData.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = getImageUrl(null);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-purple-900/70"></div>
          <div className="absolute inset-0 flex items-start p-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                {safeData.name}
              </h3>
              {safeData.nameEn && (
                <p className="text-lg opacity-90 mb-2">{safeData.nameEn}</p>
              )}
              <p className="opacity-90 line-clamp-3 leading-relaxed">
                {safeData.description}
              </p>
            </div>
          </div>
          
          {/* Stats overlay */}
          <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
            <div className="flex items-center space-x-4 space-x-reverse text-white text-sm">
              <div className="text-center">
                <div className="font-bold">{safeData.staffCount + 1}</div>
                <div className="opacity-90">عضو</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="font-bold">{safeData.servicesCount}</div>
                <div className="opacity-90">خدمة</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Department Head */}
          {safeData.headName !== 'غير محدد' && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">رئيس الوحدة</h4>
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ml-[5px] flex items-center justify-center overflow-hidden">
                  {safeData.headPhoto ? (
                    <img
                      src={urlFor(safeData.headPhoto).url()}
                      alt={safeData.headName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-semibold text-sm">د</span>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{safeData.headName}</p>
                  <p className="text-sm text-gray-600">{safeData.headTitle}</p>
                </div>
              </div>
            </div>
          )}

          {/* Vision & Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4">
              <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                <svg className="w-4 h-4 text-blue-600 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
                الرؤية
              </h5>
              <p className="text-gray-700 text-sm line-clamp-3">{safeData.vision}</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4">
              <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                <svg className="w-4 h-4 text-green-600 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                الرسالة
              </h5>
              <p className="text-gray-700 text-sm line-clamp-3">{safeData.mission}</p>
            </div>
          </div>

          {/* Key Services/Committees */}
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {unit?.services && unit.services.length > 0 && (
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-4 h-4 text-orange-600 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    الخدمات الرئيسية
                  </h5>
                  <div className="space-y-2">
                    {unit.services.slice(0, 2).map((service, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                    {unit.services.length > 2 && (
                      <p className="text-gray-500 text-xs">+{unit.services.length - 2} خدمات أخرى</p>
                    )}
                  </div>
                </div>
              )}
              
              {unit?.committees && unit.committees.length > 0 && (
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-4 h-4 text-purple-600 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    اللجان
                  </h5>
                  <div className="space-y-2">
                    {unit.committees.slice(0, 2).map((committee, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{committee}</span>
                      </div>
                    ))}
                    {unit.committees.length > 2 && (
                      <p className="text-gray-500 text-xs">+{unit.committees.length - 2} لجان أخرى</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Staff Preview */}
          {unit?.staff && unit.staff.length > 0 && (
            <div className="mb-6">
              <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                <svg className="w-4 h-4 text-blue-600 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                فريق العمل
              </h5>
              <div className="flex space-x-2 space-x-reverse">
                {unit.staff.slice(0, 4).map((staffMember, index) => (
                  <div key={staffMember._id || index} className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 border-2 border-white shadow-sm">
                                       {staffMember.photo ? (
                     <img
                       src={urlFor(staffMember.photo).url()}
                       alt={staffMember.name || 'عضو فريق العمل'}
                       className="w-full h-full object-cover"
                     />
                   ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {staffMember.name ? staffMember.name.charAt(0) : 'د'}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
                {unit.staff.length > 4 && (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white shadow-sm">
                    <span className="text-gray-600 text-xs font-bold">+{unit.staff.length - 4}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl text-center group-hover:from-blue-700 group-hover:to-purple-700 transition-all">
              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <span className="font-bold">عرض التفاصيل الكاملة</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </div>
              <p className="text-sm opacity-90 mt-1">اطلع على جميع الخدمات والأنشطة</p>
            </div>
          </div>
      </div>
      </div>
    </Link>
  )
} 
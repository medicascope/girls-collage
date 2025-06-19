'use client'

import Image from 'next/image'
import Link from 'next/link'

import { urlFor } from '../lib/sanity'
import PortableText from './PortableText'

const DeanMessage = ({ deanMessageData }) => {
  // Fallback data if Sanity data is not available
  const data = deanMessageData || {
    title: 'كلمة معالي العميدة',
    deanName: 'د. فاطمة أحمد السالم',
    deanTitle: 'عميدة كلية البنات الطبية',
    deanImage: null,
    shortMessage: 'أهلاً وسهلاً بكم في كلية البنات الطبية، حيث نسعى لتحقيق التميز في التعليم الطبي والبحث العلمي.',
    fullMessage: null
  }
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden card-shadow">
              <img
                src={data.deanImage?.asset ? urlFor(data.deanImage).width(500).height(600).url() : "https://d31nhj1t453igc.cloudfront.net/cloudinary/2022/Apr/08/imOSR3BLBDw2Xckl2c4R.jpg"}
                alt={data.deanImage?.alt || "معالي العميدة - صورة رسمية"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg width='400' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='18' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eمعالي العميدة%3C/text%3E%3C/svg%3E"
                }}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-black">{data.title}</span>
              </h2>
              <div className="text-lg text-gray-600 mb-6">
                <p className="font-semibold">{data.deanName}</p>
                <p>{data.deanTitle}</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              {data.fullMessage ? (
                <PortableText value={data.fullMessage} />
              ) : (
                <>
                  <p className="text-lg">
                    بسم الله الرحمن الرحيم، والصلاة والسلام على أشرف المرسلين سيدنا محمد وعلى آله وصحبه أجمعين.
                  </p>
                  
                  <p>
                    يسعدني أن أرحب بكم في موقع كلية البنات الطبية، هذه المؤسسة التعليمية العريقة التي تسعى لتحقيق التميز في مجال التعليم الطبي والبحث العلمي.
                  </p>

                  <p>
                    إن كليتنا تؤمن بأهمية دور المرأة في المجال الطبي، ونحن نعمل جاهدين على إعداد جيل من الطبيبات المتميزات اللواتي يمتلكن العلم والمهارة والأخلاق الحميدة لخدمة مجتمعهن ووطنهن.
                  </p>

                  <p>
                    نحن نفتخر بما حققته كليتنا من إنجازات على مدى السنوات الماضية، ونسعى دائماً لمواكبة أحدث التطورات في مجال التعليم الطبي والتكنولوجيا الحديثة.
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/dean-message" className="btn-primary text-center">
                اقرأ الكلمة كاملة
              </Link>
              <Link href="/about" className="btn-secondary text-center">
                تعرف على الكلية
              </Link>
            </div>

            {/* Signature */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-600 italic">
                "نحن نؤمن بأن التعليم الطبي المتميز هو الطريق لبناء مستقبل صحي أفضل لمجتمعنا"
              </p>
              <div className="mt-3 text-gray-800 font-semibold">
                معالي العميدة
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeanMessage 
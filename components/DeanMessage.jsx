"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { urlFor } from "../lib/sanity";
import PortableText from "./PortableText";

const DeanMessage = ({ deanMessageData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef(null);
  const modalRef = useRef(null);

  // Handle clicking outside modal to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    // Handle escape key to close modal
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      // Restore scrolling when modal is closed
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  // Fallback data if Sanity data is not available
  const data = deanMessageData || {
    title: "كلمة معالي العميدة",
    deanName: "د. فاطمة أحمد السالم",
    deanTitle: "عميدة كلية البنات الطبية",
    deanImage: null,
    shortMessage:
      "أهلاً وسهلاً بكم في كلية البنات الطبية، حيث نسعى لتحقيق التميز في التعليم الطبي والبحث العلمي.",
    fullMessage: null,
  };
  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-12 scale-95"
            }`}
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden card-shadow">
              <img
                src={
                  data.deanImage?.asset
                    ? urlFor(data.deanImage).width(500).height(600).url()
                    : "https://d31nhj1t453igc.cloudfront.net/cloudinary/2022/Apr/08/imOSR3BLBDw2Xckl2c4R.jpg"
                }
                alt={data.deanImage?.alt || "معالي العميدة - صورة رسمية"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg width='400' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-size='18' text-anchor='middle' dy='.3em' fill='%236b7280'%3Eمعالي العميدة%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20"></div>
          </div>

          {/* Content Side */}
          <div
            className={`space-y-6 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
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
                    بسم الله الرحمن الرحيم، والصلاة والسلام على أشرف المرسلين
                    سيدنا محمد وعلى آله وصحبه أجمعين.
                  </p>

                  <p>
                    يسعدني أن أرحب بكم في أروقة كلية الطب- بنات- جامعة الأزهر
                    بالقاهرة وهي كلية عريقة انشئت منذ ما يقرب من نصف قرن ولها
                    رسالة سامية ورؤية تجعل الطالبة هي محور العملية التعليمية
                    وثمرتها وغاية وجودها.
                  </p>

                  <p>
                    وإعدادها لمواجهة الحياة وتحدياتها في الحاضر والمستقبل هو
                    الهدف الأساسي الذي تسعي اليه كليتنا وانطلاقا من ذلك تعمل
                    الكلية على إعداد خريجات مزودات بالمعارف النظرية والخبرات
                    العملية والسلوكيات الإيجابية،
                  </p>

                  <p>
                    ولديهن القدرة على توظيفها في بناء ذواتهم وتنمية مجتمعهم وذلك
                    بتقديم تعليم عالي الجودة وفقاً للمعايير العالمية وتطوير
                    مستوى الخدمات الأكاديمية المقدمة للطالبات، وتحسين وتطوير
                    البرامج الأكاديمية بما يتوافق مع حاجة سوق العمل. كذلك بتبني
                    فلسفة التعلم الذاتي في حل المشكلات والتعلم مدي الحياة.
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setShowModal(true)}
                className="btn-primary text-center"
                type="button"
              >
                اقرأ الكلمة كاملة
              </button>
              <Link href="/about" className="btn-secondary text-center">
                تعرف على الكلية
              </Link>
            </div>

            {/* Modal for Full Speech */}
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent transition-all duration-300">
                <div
                  ref={modalRef}
                  className="bg-white rounded-lg card-shadow p-6 md:p-8 max-w-2xl w-[90%] md:w-[600px] aspect-square overflow-hidden relative animate-fadeIn transform transition-all duration-300"
                >
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-3 left-3 text-gray-500 hover:text-red-600 transition-colors duration-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                    aria-label="إغلاق"
                  >
                    ×
                  </button>
                  <h2 className="text-2xl font-bold mb-4 text-center text-blue-900 border-b border-blue-100 pb-3">
                    كلمة عميدة الكلية
                  </h2>
                  <div className="prose prose-lg h-[calc(100%-110px)] overflow-y-auto custom-scrollbar text-gray-800 leading-relaxed text-right mb-4 dir-rtl px-2">
                    <p className="text-xl font-semibold text-blue-800">
                      بسم الله الرحمن الرحيم
                    </p>
                    <p>
                      يسعدني أن أرحب بكم في أروقة كلية الطب- بنات- جامعة الأزهر
                      بالقاهرة وهي كلية عريقة انشئت منذ ما يقرب من نصف قرن ولها
                      رسالة سامية ورؤية تجعل الطالبة هي محور العملية التعليمية
                      وثمرتها وغاية وجودها. وإعدادها لمواجهة الحياة وتحدياتها في
                      الحاضر والمستقبل هو الهدف الأساسي الذي تسعي اليه كليتنا
                      وانطلاقا من ذلك تعمل الكلية على إعداد خريجات مزودات
                      بالمعارف النظرية والخبرات العملية والسلوكيات الإيجابية،
                      ولديهن القدرة على توظيفها في بناء ذواتهم وتنمية مجتمعهم
                      وذلك بتقديم تعليم عالي الجودة وفقاً للمعايير العالمية
                      وتطوير مستوى الخدمات الأكاديمية المقدمة للطالبات، وتحسين
                      وتطوير البرامج الأكاديمية بما يتوافق مع حاجة سوق العمل.
                      كذلك بتبني فلسفة التعلم الذاتي في حل المشكلات والتعلم مدي
                      الحياة.
                    </p>
                    <p>
                      كما تسعي الكلية وفق خطتها الاستراتيجية إلى التركيز على
                      البحث العلمي ونشر ثقافة البحث العلمي والابتكار والإبداع،
                      وتشجيع الكفاءات المتميزة من أعضاء هيئة التدريس والطالبات
                      للمساهمة في صناعة المعرفة مما يضمن تخريج كوادر مدربة قادرة
                      على الابتكار وتحقيق الريادة في مجالات تخصصاتهم وقيادة
                      مجتمعاتهم.
                    </p>
                    <p>
                      وتتميز كليتنا بأن لديها هيئة تدريسية ذات كفاءة عالية تعمل
                      بروح الفريق وأهم ما يميز هذا الفريق هو روح الانسجام
                      والمحبة والتعاون، حيث تعمل بكل جد وتفان من أجل مساعدة
                      الطالبات وتشجيعهن على الحوار والانفتاح على الثقافات
                      المختلفة للارتقاء بمستوى تعليمي جامعي ينعكس على أدائهن
                      المهني في أماكن عملهن.
                    </p>
                    <p>
                      وفي الختام نسأل الله جل وعلا أن يحفظ وطننا وشعبنا من كل
                      مكروه، والله ولي التوفيق،
                    </p>
                    <div className="mt-6 border-t border-gray-200 pt-3">
                      <p className="font-bold text-lg text-blue-900">
                        أ.د/ هناء عبد الحميد العبيسي
                      </p>
                      <p className="text-blue-700">عميدة كلية طب الأزهر بنات</p>
                    </div>
                  </div>
                  <div className="text-center absolute bottom-4 left-0 right-0">
                    <button
                      onClick={() => setShowModal(false)}
                      className="btn-secondary px-6 py-2 inline-block"
                      type="button"
                    >
                      إغلاق
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Signature */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-600 italic">
                "نحن نؤمن بأن التعليم الطبي المتميز هو الطريق لبناء مستقبل صحي
                أفضل لمجتمعنا"
              </p>
              <div className="mt-3 text-gray-800 font-semibold">
                معالي العميدة
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeanMessage;

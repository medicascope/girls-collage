import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import LocationMap from "../../components/contact/LocationMap";
import { sanityFetch, queries } from "../../lib/sanity";

export const metadata = {
  title: "اتصل بنا | كلية البنات الطبية",
  description:
    "تواصل مع كلية البنات الطبية - معلومات الاتصال وعنوان الكلية ونموذج التواصل",
};

export default async function ContactPage() {
  const siteSettings = await sanityFetch({ query: queries.siteSettings });
  return (
    <main>
      <Navigation siteSettings={siteSettings} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-[80px] md:mt-[88px]">
        <div className="section-container">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">اتصل بنا</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نحن هنا للإجابة على استفساراتكم وتقديم المساعدة. تواصلوا معنا عبر
              الطرق المختلفة المتاحة أو زوروا مقر الكلية.
            </p>
          </div>
        </div>
      </section>

      <ContactInfo />
      <ContactForm />
      <LocationMap />

      {/* Quick Contact */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold mb-8">تواصل سريع</h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90">
            للاستفسارات العاجلة أو الحصول على معلومات فورية
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">الخط الساخن</h3>
              <p className="opacity-90">+966 11 123 4567</p>
              <p className="text-sm opacity-75 mt-1">متاح 24/7</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">واتساب</h3>
              <p className="opacity-90">+966 50 123 4567</p>
              <p className="text-sm opacity-75 mt-1">الرد خلال ساعة</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
              <p className="opacity-90">info@girlsmedcollege.edu</p>
              <p className="text-sm opacity-75 mt-1">الرد خلال 24 ساعة</p>
            </div>
          </div>
        </div>
      </section>

      <Footer siteSettings={siteSettings} />
    </main>
  );
}

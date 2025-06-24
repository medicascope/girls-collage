import UnitIcon from "./UnitIcon";

// Utility function to safely extract text from Portable Text or return plain text
const extractText = (content) => {
  if (!content) return "";

  // If it's already a string, return it
  if (typeof content === "string") return content;

  // If it's a Portable Text array
  if (Array.isArray(content)) {
    return content
      .map((block) => {
        if (block._type === "block" && block.children) {
          return block.children.map((child) => child.text || "").join("");
        }
        return "";
      })
      .join(" ");
  }

  // If it's a single Portable Text block
  if (content._type === "block" && content.children) {
    return content.children.map((child) => child.text || "").join("");
  }

  return "";
};

export default function UnitsOverview({ units }) {
  // Safety check
  if (!units || !Array.isArray(units)) return null;

  // Debug: log the staff arrays for each unit
  console.log(
    "Units staff arrays:",
    units.map((unit) => unit.staff)
  );
  // Calculate totals with safe defaults
  const totalMembers = units.reduce((sum, unit) => {
    // Count staff array length + 1 if head exists
    const staffCount = Array.isArray(unit.staff) ? unit.staff.length : 0;
    const headCount = unit.head ? 1 : 0;
    return sum + staffCount + headCount;
  }, 0);
  const totalPublications = units.reduce(
    (sum, unit) => sum + (unit?.publications?.length || 0),
    0
  );
  const totalCommittees = units.reduce(
    (sum, unit) => sum + (unit?.committees?.length || 0),
    0
  );
  const avgEstablishedYear =
    units.length > 0
      ? Math.round(
          units.reduce(
            (sum, unit) => sum + (unit?.establishedYear || 2020),
            0
          ) / units.length
        )
      : 2020;

  const stats = [
    {
      title: "عدد الوحدات",
      value: units.length,
      icon: "building",
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      title: "إجمالي الأعضاء",
      value: totalMembers,
      icon: "people",
      color: "from-green-600 to-green-700",
      bgColor: "from-green-50 to-green-100",
    },
    {
      title: "إجمالي المنشورات",
      value: totalPublications,
      icon: "books",
      color: "from-purple-600 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      title: "إجمالي اللجان",
      value: totalCommittees,
      icon: "gear",
      color: "from-orange-600 to-orange-700",
      bgColor: "from-orange-50 to-orange-100",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">نظرة عامة على الوحدات</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تعمل وحدات الكلية المتخصصة على تطوير جودة التعليم الطبي وخدمة
            المجتمع من خلال التميز والابتكار
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
                <div className="absolute top-4 right-4">
                  <UnitIcon iconType={stat.icon} className="w-10 h-10" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-50">
                  <UnitIcon iconType={stat.icon} className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <UnitIcon
                    iconType={stat.icon}
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <div
                  className={`text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
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
              {units
                .filter((unit) =>
                  [
                    "وحدة ضمان الجودة والاعتماد الأكاديمي",
                    "وحدة القياس والتقويم",
                  ].includes(extractText(unit?.name))
                )
                .map((unit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 space-x-reverse p-4 bg-blue-50 rounded-lg"
                  >
                    <div className="ml-[5px] mr-0">
                      <UnitIcon iconType={unit?.icon} className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {extractText(unit?.name)}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {unit?.members || 0} عضو
                      </p>
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
              {units
                .filter((unit) =>
                  [
                    "وحدة التعليم الطبي المتكامل",
                    "وحدة التعلم الإلكتروني",
                    "مختبر المهارات الطبية",
                  ].includes(extractText(unit?.name))
                )
                .map((unit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 space-x-reverse p-4 bg-green-50 rounded-lg"
                  >
                    <div className="ml-[5px] mr-0">
                      <UnitIcon iconType={unit?.icon} className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {extractText(unit?.name)}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {unit?.members || 0} عضو
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Why Choose Our Units */}
        <div className="bg-white p-12 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">لماذا وحداتنا متميزة؟</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">الجودة والتميز</h4>
              <p className="text-gray-600">
                معايير جودة عالمية في جميع الخدمات
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">فريق متخصص</h4>
              <p className="text-gray-600">
                خبراء ومختصون في مختلف المجالات الطبية والأكاديمية
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">البحث والنشر</h4>
              <p className="text-gray-600">إنتاج بحوث علمية ومنشورات متخصصة</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">الابتكار</h4>
              <p className="text-gray-600">
                تطوير حلول مبتكرة للتحديات التعليمية
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">الشراكات</h4>
              <p className="text-gray-600">تعاون مع مؤسسات محلية وعالمية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

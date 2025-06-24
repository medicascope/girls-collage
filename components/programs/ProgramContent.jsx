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

export default function ProgramContent({ program, activeTab }) {
  if (!program)
    return <div className="p-6 text-center text-gray-500">لا توجد بيانات</div>;

  // Safe data extraction with PortableText handling
  const safeDescription =
    extractText(program?.description) || "لا توجد معلومات متاحة حالياً";
  const safeOverview = extractText(program?.overview) || "";
  const safeTuition =
    typeof program?.tuition === "number" ? program.tuition : null;

  if (activeTab === "overview") {
    return (
      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-bold mb-4 text-gray-800">
            نظرة عامة على البرنامج
          </h4>
          <p className="text-gray-600 leading-relaxed">{safeDescription}</p>
        </div>

        {/* Admission Requirements Section */}
        {program?.admissionRequirements &&
          Array.isArray(program.admissionRequirements) &&
          program.admissionRequirements.length > 0 && (
            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-800">
                شروط القبول
              </h4>
              <ul className="list-disc list-inside space-y-2">
                {program.admissionRequirements.map((req, idx) => (
                  <li key={idx} className="text-gray-700">
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

        {program?.objectives &&
          Array.isArray(program.objectives) &&
          program.objectives.length > 0 && (
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">
                الأهداف التعليمية
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {program.objectives.slice(0, 5).map((objective, index) => (
                  <div
                    key={`objective-${index}`}
                    className="flex items-start space-x-3 space-x-reverse"
                  >
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 ml-2 mr-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-600 flex-1">
                      {extractText(objective)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    );
  }

  if (activeTab === "details") {
    return (
      <div className="space-y-6">
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          تفاصيل البرنامج
        </h4>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h5 className="font-bold text-blue-800 mb-4">معلومات أساسية</h5>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">المستوى:</span>
                <span className="font-medium">
                  {typeof program?.level === "object" &&
                  program.level !== null &&
                  typeof program.level.value === "number"
                    ? program.level.value
                    : extractText(program?.level) || "غير محدد"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">المدة:</span>
                <span className="font-medium">
                  {extractText(program?.duration) + " سنين" || "غير محدد"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">الدرجة:</span>
                <span className="font-medium">
                  {extractText(program?.type)
                    ? extractText(program.type).charAt(0).toUpperCase() +
                      extractText(program.type).slice(1)
                    : "غير محدد"}
                </span>
              </div>
            </div>
          </div>
          {/* 
          <div className="bg-green-50 p-6 rounded-xl">
            <h5 className="font-bold text-green-800 mb-4">الإحصائيات</h5>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">سعة القبول:</span>
                <span className="font-medium">
                  {program?.capacity || "غير محدد"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">الطلاب الحاليين:</span>
                <span className="font-medium">
                  {program?.currentStudents || "غير محدد"}
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }

  if (activeTab === "fees") {
    return (
      <div className="space-y-6">
        <h4 className="text-xl font-bold mb-4 text-gray-800">
          الرسوم الدراسية
        </h4>
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {safeTuition !== null
                ? safeTuition.toLocaleString() + " جنيه"
                : "غير محدد"}
            </div>
            <div className="text-gray-600 text-sm">الرسوم الدراسية</div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>ملاحظة:</strong> الرسوم قابلة للتغيير حسب اللوائح
              المعتمدة.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <div className="p-6 text-center text-gray-500">محتوى غير متاح</div>;
}

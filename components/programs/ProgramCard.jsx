"use client";

import { useState } from "react";
import ProgramImage from "./ProgramImage";
import ProgramHeader from "./ProgramHeader";
import ProgramTabs from "./ProgramTabs";
import ProgramContent from "./ProgramContent";

export default function ProgramCard({ program }) {
  const [activeTab, setActiveTab] = useState("overview");

  // Safety check - return early if no program
  if (!program || typeof program !== "object") {
    return (
      <div className="bg-gray-100 rounded-2xl p-6 text-center">
        <p className="text-gray-500">لا توجد بيانات للبرنامج</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-fit">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="grid grid-cols-1 gap-4 items-center">
          <ProgramImage program={program} />
          <ProgramHeader program={program} />
        </div>
      </div>

      {/* Tabs Navigation */}
      <ProgramTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      <div className="p-6">
        <ProgramContent program={program} activeTab={activeTab} />

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button className="cursor-pointer w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-bold text-sm hover:from-blue-700 hover:to-purple-700 transition-all">
            تقديم طلب الالتحاق
          </button>
          <a
            href="/Program_Specifications_IMP.docx"
            className="cursor-pointer flex justify-center items-center w-full bg-white border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-bold text-sm hover:bg-blue-50 transition-all text-center"
          >
            تحميل دليل البرنامج
          </a>
        </div>
      </div>
    </div>
  );
}

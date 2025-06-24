import React from "react";

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

export default function ProgramHeader({ program }) {
  if (!program) return <></>;

  // Safely extract text values
  const programName =
    extractText(program?.name) ||
    extractText(program?.title) ||
    "برنامج بدون اسم";
  const programLevel =
    typeof program?.level === "object" &&
    program.level !== null &&
    typeof program.level.value === "number"
      ? program.level.value
      : extractText(program?.level) || "غير محدد";
  const programDuration = extractText(program?.duration) + " سنين" || "غير محدد";

  return (
    <div className="text-center">
      <div className="flex items-center justify-center space-x-3 space-x-reverse mb-3">
        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium ml-2 text-black">
          {programLevel}
        </span>
        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium text-black">
          {programDuration}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-2">{programName}</h3>
      <div className="flex items-center justify-center space-x-4 space-x-reverse"></div>
    </div>
  );
}

import React from 'react';

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

export default function ProgramHeader({ program }) {
  if (!program) return <></>;

  // Safely extract text values
  const programName = extractText(program?.name) || extractText(program?.title) || 'برنامج بدون اسم';
  const programDescription = extractText(program?.description) || 'لا يوجد وصف';
  const programLevel = extractText(program?.level) || 'غير محدد';
  const programDuration = extractText(program?.duration) || 'غير محدد';
  const programDegree = extractText(program?.degree) || 'غير محدد';

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
      <p className="text-sm opacity-90 mb-3">{programDescription}</p>
      <div className="text-lg font-bold mb-2">{programDegree}</div>
      <div className="flex items-center justify-center space-x-4 space-x-reverse">
        <div className="text-center mr-0 ml-[10px]">
          <div className="text-lg font-bold">{program?.capacity || 'غير محدد'}</div>
          <div className="text-xs opacity-80">سعة القبول</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold">{program?.currentStudents || 'غير محدد'}</div>
          <div className="text-xs opacity-80">طالبة حالياً</div>
        </div>
      </div>
    </div>
  );
} 
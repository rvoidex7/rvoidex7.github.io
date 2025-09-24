
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`border-2 border-fuchsia-500 bg-black bg-opacity-50 ${className}`}>
      <h2 className="bg-fuchsia-500 text-black font-bold p-1 text-sm">{title}</h2>
      <div className="p-3">
        {children}
      </div>
    </div>
  );
};

export default Section;

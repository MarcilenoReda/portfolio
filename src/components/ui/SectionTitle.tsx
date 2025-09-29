import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  light = true,
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-gray-100' : 'text-gray-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = true,
  onClick, 
  className = '',
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-md font-medium text-sm transition-all duration-300
        ${primary 
          ? 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-lg hover:shadow-blue-800/25' 
          : 'bg-transparent border border-blue-800 text-blue-800 hover:bg-blue-800/10'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
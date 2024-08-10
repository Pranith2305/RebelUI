import React from 'react';
import { FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa';

const Button = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  disabled = false,
  icon = null,
  iconPosition = 'left',
  className = '',
}) => {
  const lightThemeClasses = {
    default: "bg-black text-white hover:bg-primary/90 rounded",
    destructive: "bg-red-500 text-white hover:bg-red-600 rounded",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 rounded",
    ghost: "hover:bg-gray-100 hover:text-gray-900 rounded",
    success: "bg-green-500 text-white hover:bg-green-600 rounded",
    gradient: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 rounded",
    outlineHover: "border-2 border-blue-500 bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white rounded",
    animated: "bg-green-500 text-white hover:bg-green-600 rounded transition-transform transform hover:scale-105",
    glass: "bg-opacity-60 backdrop-blur-md border border-gray-300 text-black hover:bg-opacity-50 rounded",
    neon: "bg-black text-white border border-transparent hover:border-blue-500 hover:text-blue-500 hover:bg-transparent rounded transition-all",
    threeD: "bg-gray-800 text-white shadow-lg hover:shadow-2xl hover:translate-y-1 rounded transition-transform",
    pill: "bg-teal-500 text-white rounded px-6 py-2 hover:bg-teal-600",
    iconOnly: "bg-black text-white rounded p-2 hover:bg-black-800",
    tag: "bg-yellow-200 text-yellow-800 border border-yellow-300 rounded px-4 py-1 text-sm hover:bg-yellow-300",
    linkButton: "bg-transparent text-blue-500 hover:underline rounded px-2 py-1",
    pulse: "bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-105 animate-pulse",
    flip: "relative bg-blue-500 text-white rounded px-4 py-2 perspective-1000 group cursor-pointer",
    typewriter: "relative bg-gray-800 text-white rounded px-4 py-2 overflow-hidden group cursor-pointer after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-500 after:to-transparent after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:transform group-hover:after:scale-x-100",
    liquid: "relative bg-blue-500 text-white rounded px-4 py-2 overflow-hidden group",
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `
    ${lightThemeClasses[variant]} 
    ${sizeClasses[size]} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
    ${className}
    flex items-center justify-center
  `;

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0 mr-2">{icon}</span>
      )}
      {icon && iconPosition === 'center' && (
        <span className="flex-shrink-0 mx-2">{icon}</span>
      )}
      {children && (
        <span>{children}</span>
      )}
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0 ml-2">{icon}</span>
      )}
    </button>
  );
};

export default Button;

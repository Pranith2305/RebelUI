import React from 'react';

// Utility function to join class names
const classNames = (...classes) => {
  return classes
    .filter(Boolean) // Filter out falsey values (e.g., null, undefined, false)
    .join(' ');      // Join the array elements into a single string
};

// Base Card Component with optional hover effect
const Card = ({ className, children, hover = false, ...props }) => (
  <div
    className={classNames(
      "rounded-lg border bg-white shadow-sm transition-transform duration-300",
      hover ? "hover:shadow-lg hover:scale-105" : "",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

// Card Header Component
const CardHeader = ({ className, children, ...props }) => (
  <div className={classNames('flex flex-col space-y-1.5 p-6', className)} {...props}>
    {children}
  </div>
);

// Card Title Component
const CardTitle = ({ className, children, ...props }) => (
  <h3 className={classNames("text-2xl font-semibold leading-none tracking-tight", className)} {...props}>
    {children}
  </h3>
);

// Card Description Component
const CardDescription = ({ className, children, ...props }) => (
  <p className={classNames("text-sm text-gray-400", className)} {...props}>
    {children}
  </p>
);

// Card Content Component
const CardContent = ({ className, children, ...props }) => (
  <div className={classNames('p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

// Card Footer Component
const CardFooter = ({ className, children, ...props }) => (
  <div className={classNames('flex items-center p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };

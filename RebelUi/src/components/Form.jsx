import React from "react";

// Form component
export function Form({ children }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-4 drop-shadow-xl hover:drop-shadow-2xl">
        <div className="rounded-lg bg-white w-80 text-center p-6 h-max px-8">
          {children}
        </div>
      </div>
    </div>
  );
}

// Heading component
export function Heading({ label }) {
  return <div className="font-bold text-4xl pt-6 mb-4">{label}</div>;
}

// SubHeading component
export function SubHeading({ label }) {
  return <div className="text-slate-500 text-md mb-4">{label}</div>;
}

// InputBox component
export function InputBox({ label, placeholder }) {
  return (
    <div className="mb-4">
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  );
}

// Button component
export function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4"
    >
      {label}
    </button>
  );
}

// BottomWarning component
export function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div>{label}</div>
      <a className="pointer underline pl-1 cursor-pointer" href={to}>
        {buttonText}
      </a>
    </div>
  );
}

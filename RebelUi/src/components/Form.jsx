import React from "react";

function Form({childrens}) {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            {childrens} 
        </div>
      </div>
    </div>
  );
}

function Heading({ label }) {
  return <div className="font-bold text-4xl pt-6">{label}</div>;
}

function SubHeading({ label }) {
  return <div className="text-slate-500 text-md pt-1 px-4 pb-4">{label}</div>;
}

function InputBox({ label, placeholder }) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  );
}

function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      {label}
    </button>
  );
}

function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div>{label}</div>
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
  );
}

// Exporting all the components as a default object
export default {
  Form,
  Heading,
  SubHeading,
  InputBox,
  Button,
  BottomWarning,
};

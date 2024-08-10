import React from "react";

const Card = ({
  title,
  description,
  image,
  actionText,
  onActionClick,
  type = "default",
  shadow = "lg",
  hoverEffect = false,
}) => {
  // Define different card styles based on the type
  const cardStyles = {
    default: "bg-white",
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
    success: "bg-green-500",
    danger: "bg-red-500",
  };

  // Define different shadow styles
  const shadowStyles = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
  };

  // Define hover effect
  const hoverStyles = hoverEffect
    ? "hover:shadow-xl hover:scale-105 transition-transform duration-300"
    : "";

  return (
    <div
      className={`${cardStyles[type]} ${shadowStyles[shadow]} rounded-lg overflow-hidden ${hoverStyles}`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-center"
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        {actionText && (
          <button
            onClick={onActionClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
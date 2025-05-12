import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={\`px-6 py-2 rounded font-semibold transition $\{
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700"
      \} \${className}\`}
    >
      {children}
    </button>
  );
};

export default Button;
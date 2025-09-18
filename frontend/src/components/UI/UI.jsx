import React, { useState } from "react";

// Button Component
export const Button = ({
  children,
  className = "",
  size = "md",
  variant = "default",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variantStyles = {
    default: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline:
      "border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${
        variantStyles[variant] || variant
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Card Components
export const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white rounded-lg shadow ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = "", ...props }) => (
  <h2 className={`text-xl font-semibold text-gray-800 ${className}`} {...props}>
    {children}
  </h2>
);

export const CardDescription = ({ children, className = "", ...props }) => (
  <p className={`text-gray-600 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className = "", ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

// Badge Component
export const Badge = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  const variantStyles = {
    default: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 bg-transparent text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span
      className={`${baseStyles} ${
        variantStyles[variant] || variant
      } ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// Input Component
export const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

// Label Component
export const Label = ({ children, className = "", htmlFor, ...props }) => (
  <label
    className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </label>
);

// Textarea Component
export const Textarea = ({ className = "", rows = 4, ...props }) => (
  <textarea
    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    rows={rows}
    {...props}
  />
);

// Select Components
export const Select = ({ children, ...props }) => (
  <div className="relative" {...props}>
    {children}
  </div>
);

export const SelectTrigger = ({ children, className = "", ...props }) => (
  <div
    className={`w-full px-3 py-2 border border-gray-300 rounded-lg bg-white flex items-center justify-between cursor-pointer ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const SelectValue = ({ placeholder, className = "", ...props }) => (
  <span className={`text-gray-500 ${className}`} {...props}>
    {placeholder}
  </span>
);

export const SelectContent = ({ children, className = "", ...props }) => (
  <div
    className={`absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const SelectItem = ({ children, value, className = "", ...props }) => (
  <div
    className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${className}`}
    data-value={value}
    {...props}
  >
    {children}
  </div>
);

// Tabs Components
export const Tabs = ({ children, defaultValue, className = "", ...props }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className} {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

export const TabsList = ({
  children,
  className = "",
  activeTab,
  setActiveTab,
  ...props
}) => (
  <div className={`flex border-b border-gray-200 ${className}`} {...props}>
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);

export const TabsTrigger = ({
  children,
  value,
  className = "",
  activeTab,
  setActiveTab,
  ...props
}) => (
  <button
    className={`px-4 py-2 text-sm font-medium ${
      activeTab === value
        ? "border-b-2 border-blue-500 text-blue-500"
        : "text-gray-600 hover:text-blue-500"
    } ${className}`}
    onClick={() => setActiveTab(value)}
    {...props}
  >
    {children}
  </button>
);

export const TabsContent = ({
  children,
  value,
  activeTab,
  className = "",
  ...props
}) => (
  <div
    className={`py-4 ${activeTab === value ? "block" : "hidden"} ${className}`}
    {...props}
  >
    {children}
  </div>
);

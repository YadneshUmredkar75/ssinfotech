import React from "react";
import { cn } from "../../lib/utils";

const Badge = ({ className, variant = "default", ...props }) => {
  // Define base classes
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  // Variant styles
  const variantClasses = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  };

  // Apply variant class based on the variant prop
  const variantClass = variantClasses[variant] || variantClasses.default;

  // Combine base and variant classes with any additional classes
  const classes = cn(baseClasses, variantClass, className);

  return <div className={classes} {...props} />;
};

export default Badge;
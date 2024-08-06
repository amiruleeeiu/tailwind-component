import { FC, ReactNode } from "react";

// Define the available color and size options
const colorClasses: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-800 focus:ring-blue-500",
  success: "bg-green-500 text-white hover:bg-green-700 focus:ring-green-500",
  warning: "bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-yellow-500",
  danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
};

const sizeClasses: Record<string, string> = {
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
};

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  color?: "primary" | "success" | "warning" | "danger";
  size?: "md" | "lg" | "xl";
}

const Button: FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  className = "",
  disabled = false,
  color = "primary",
  size = "md",
}) => {
  const baseClasses = "rounded focus:outline-none transition duration-300";
  const disabledClasses = "opacity-50 cursor-not-allowed";
  const colorClass = colorClasses[color];
  const sizeClass = sizeClasses[size];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${sizeClass} ${colorClass} ${className} ${
        disabled ? disabledClasses : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

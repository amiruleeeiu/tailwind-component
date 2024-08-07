import { FC, ReactNode } from "react";

const colorClasses: Record<string, string> = {
  primary:
    "bg-blue-600 border border-blue-600 text-white hover:bg-blue-800 focus:ring-blue-500",
  success:
    "bg-green-700 border border-green-700 text-white hover:bg-green-800 focus:ring-green-800",
  warning:
    "bg-yellow-500 border border-yellow-600 text-black hover:bg-yellow-600 focus:ring-yellow-500",
  danger:
    "bg-red-500 border border-red-600 text-white hover:bg-red-600 focus:ring-red-500",
};

const outlineColorClasses: Record<string, string> = {
  primary:
    "shadow-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
  success:
    "shadow-md border border-green-700 text-green-700 hover:bg-green-700 hover:text-white focus:ring-green-700",
  warning:
    "shadow-md border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black focus:ring-yellow-500",
  danger:
    "shadow-md border border-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:ring-red-500",
};

const sizeClasses: Record<string, string> = {
  md: "px-2 py-1 text-base",
  lg: "px-4 py-2 text-lg font-normal",
  xl: "px-6 py-3 text-xl font-semibold",
};

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  color?: "primary" | "success" | "warning" | "danger";
  size?: "md" | "lg" | "xl";
  outline?: boolean;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  className = "",
  disabled = false,
  color = "primary",
  size = "lg",
  outline = false,
  loading = false,
}) => {
  disabled = loading ? loading : disabled;
  const baseClasses = "rounded focus:outline-none transition duration-300";
  const disabledClasses = "opacity-50 cursor-not-allowed";
  const colorClass = outline ? outlineColorClasses[color] : colorClasses[color];
  const sizeClass = sizeClasses[size];

  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`flex items-center gap-1 ${baseClasses} ${sizeClass} ${colorClass} ${className} ${
          disabled ? disabledClasses : ""
        }`}
        disabled={disabled}
      >
        {loading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              opacity="0.25"
            />
            <path
              fill="currentColor"
              d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
            >
              <animateTransform
                attributeName="transform"
                dur="0.75s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </path>
          </svg>
        )}
        {children}
      </button>
    </div>
  );
};

export default Button;

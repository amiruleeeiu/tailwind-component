import classNames from "classnames";
import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  name?: string;
  status?: "online" | "offline";
  rounded?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  name = "",
  status = "",
  rounded = false,
}) => {
  const sizeClasses: Record<string, string> = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-md",
    lg: "w-16 h-16 text-lg",
    xl: "w-24 h-24 text-xl",
  };

  const getInitials = (name: string): string => {
    const [firstName, lastName] = name.split(" ");
    return `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase();
  };

  return (
    <div className="relative inline-block">
      <div
        className={classNames(
          "rounded bg-gray-200 flex items-center justify-center font-semibold text-white overflow-hidden",
          { "rounded-full": rounded },
          sizeClasses[size]
        )}
      >
        {src ? (
          <img
            src={src}
            alt={alt || name}
            className="w-full h-full object-cover"
          />
        ) : (
          name && getInitials(name)
        )}
      </div>
      {status && (
        <span
          className={classNames(
            "absolute bottom-0 right-0 block w-3 h-3 rounded-full ring-2 ring-white",
            status === "online" ? "bg-green-500" : "bg-gray-400"
          )}
        />
      )}
    </div>
  );
};

export default Avatar;

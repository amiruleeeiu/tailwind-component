import { ReactNode } from "react";

interface CardProps {
  image?: string;
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-white border rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

import React from "react";

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`p-4 text-xl font-semibold ${className}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => {
  return <div className={`px-4 ${className}`}>{children}</div>;
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`p-4 ${className}`}>{children}</div>
  );
};

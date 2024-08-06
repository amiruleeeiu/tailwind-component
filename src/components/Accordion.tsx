import React, { ReactNode, useEffect, useRef, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  activeColor?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  activeColor = "bg-green-50",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<string | number>("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const isOpenBtnClass = `${activeColor} border-b `;

  return (
    <div className=" border-gray-200 border-b w-full">
      <button
        className={`p-4 flex justify-between items-center transition-colors w-full text-left focus:outline-none ease-in-out ${
          isOpen ? isOpenBtnClass : ""
        }`}
        onClick={toggleAccordion}
      >
        <span className="font-medium">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-100 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;

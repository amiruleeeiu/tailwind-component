import classNames from "classnames";
import { FC, ReactElement, ReactNode, useEffect, useState } from "react";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string | ReactElement;
  children: ReactNode;
  size?: string;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "lg",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const sizeClasses: Record<string, string> = {
    sm: "w-[20%]",
    md: "w-[40%]",
    lg: "w-[50%]",
    xl: "w-[90%]",
  };

  return (
    <div
      className={classNames(
        "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
        {
          "opacity-0 pointer-events-none": !isOpen,
          "opacity-100": isOpen,
        }
      )}
      aria-hidden={!isOpen}
      role="dialog"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />
      <div
        className={classNames(
          "bg-white max-h-[80vh] rounded overflow-hidden shadow-lg transform transition-all duration-300",
          sizeClasses[size],
          {
            "translate-y-full": !isOpen,
            "translate-y-0": isOpen,
          }
        )}
      >
        <div className="flex flex-col max-h-[80vh]">
          <div className="py-3 px-4 border-b flex justify-between items-center flex-shrink-0">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:bg-gray-200 duration-300 outline-none p-2 rounded-full focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            <div className="">{children}</div>
          </div>
          <div className="py-3 px-4  border-t flex justify-end flex-shrink-0">
            <Button
              onClick={() => setIsLoading(true)}
              color="primary"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

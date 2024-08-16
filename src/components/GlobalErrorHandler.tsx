import React, { ReactNode, useEffect, useState } from "react";

// Define props type
interface GlobalErrorHandlerProps {
  children: ReactNode;
}

const GlobalErrorHandler: React.FC<GlobalErrorHandlerProps> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleError = (
      message: string | Event,
      source?: string,
      lineno?: number,
      colno?: number,
    //   error?: Error
    ) => {
      const errorMessage = `Error: ${message} at ${source}:${lineno}:${colno}`;
      setError(errorMessage);
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      const rejectionMessage = `Promise Rejection: ${event.reason}`;
      setError(rejectionMessage);
    };

    // Attach global error listeners
    window.onerror = handleError;
    window.onunhandledrejection = handleRejection;

    return () => {
      // Clean up listeners
      window.onerror = null;
      window.onunhandledrejection = null;
    };
  }, []);

  return (
    <>
      {error && <div className="error-banner">{error}</div>}
      {children}
    </>
  );
};

export default GlobalErrorHandler;

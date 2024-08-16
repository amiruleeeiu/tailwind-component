import { ReactNode, useEffect } from "react";

interface PageWrapperProps {
  children: ReactNode;
  title: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, title }) => {
  useEffect(() => {
    document.title = `${title} | ${import.meta.env.VITE_APP_SITE_NAME}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};

export default PageWrapper;

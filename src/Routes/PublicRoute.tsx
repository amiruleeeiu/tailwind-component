import NotFound from "@/pages/NotFound";
import { ReactElement } from "react";
import UserService from "UserService";

interface PrivateRouteProps {
  children: ReactElement;
}

const PublicRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = UserService.isLoggedIn();

  if (!isAuthenticated) {
    return children;
  } else {
    return <NotFound />;
  }
};

export default PublicRoute;

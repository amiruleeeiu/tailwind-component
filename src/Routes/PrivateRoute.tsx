import NotAuthenticated from "@/pages/NotAuthenticated";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
  roles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, roles }) => {
  const isAuthenticated = false;
  const role = "USER";

  console.log(roles);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated && roles.includes(role)) {
    return children;
  } else {
    return <NotAuthenticated />;
  }
};

export default PrivateRoute;

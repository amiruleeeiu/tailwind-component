import { useGetAuthQuery } from "@/features/app/auth";
import NotAuthenticated from "@/pages/NotAuthenticated";
import { jwtDecode } from "jwt-decode";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import UserService from "UserService";

const getUserInfoFromToken = (token: any) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

interface PrivateRouteProps {
  children: ReactNode;
  roles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, roles }) => {
  const { data } = useGetAuthQuery(UserService.getUsername());
  console.log(data);
  const isAuthenticated = UserService.isLoggedIn();
  const role = "USER";

  console.log(UserService.hasRole);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  console.log(isAuthenticated);

  if (isAuthenticated && roles.includes(role)) {
    return children;
  } else {
    return <NotAuthenticated />;
  }
};

export default PrivateRoute;

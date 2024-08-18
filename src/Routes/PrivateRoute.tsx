import { useGetAuthQuery } from "@/features/app/auth";
import NotAuthenticated from "@/pages/NotAuthenticated";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import UserService from "UserService";

interface PrivateRouteProps {
  children: ReactNode;
  roles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, roles }) => {
  const { data, isFetching, isLoading } = useGetAuthQuery(
    UserService.getUsername(),
    {
      refetchOnMountOrArgChange: true,
    }
  );

  console.log(data);

  const isAuthenticated = UserService.isLoggedIn();

  const role = data?.userTypeNames && data?.userTypeNames[0];

  if (isFetching && isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated && !isFetching && !isLoading) {
    return <Navigate to="/" />;
  }

  console.log(isAuthenticated);

  if (isAuthenticated && roles.includes(role) && !isFetching && !isLoading) {
    return children;
  } else {
    return <NotAuthenticated />;
  }
};

export default PrivateRoute;

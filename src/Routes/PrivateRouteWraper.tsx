import NotFound from "@/pages/NotFound";
import { FC, ReactElement } from "react";
import UserService from "UserService";

export interface RouteWraperProps {
  children: ReactElement | ReactElement[];
}

const PrivateRouteWraper: FC<RouteWraperProps> = ({ children }) =>
  UserService.isLoggedIn() ? children : <NotFound />;

export default PrivateRouteWraper;

import NotFound from "@/pages/NotFound";
import { FC } from "react";
import UserService from "UserService";
import { RouteWraperProps } from "./PrivateRouteWraper";

const PublicRouteWraper: FC<RouteWraperProps> = ({ children }) =>
  !UserService.isLoggedIn() ? children : <NotFound />;

export default PublicRouteWraper;

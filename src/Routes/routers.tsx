import NotFound from "@/pages/NotFound";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { routes } from "./routes";

const Routers: FC = () => {
  return (
    <Routes>
      {routes.map((i, index) => (
        <Route
          key={index}
          path={i.path}
          element={<PrivateRoute roles={i.roles}>{i.element}</PrivateRoute>}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;

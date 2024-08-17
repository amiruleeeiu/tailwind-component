import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { routes } from "./routes";

export const routers = (
  <Routes>
    {routes.map((i, index) => (
      <Route
        key={index}
        path={i.path}
        element={<PrivateRoute roles={i.roles}>{i.element}</PrivateRoute>}
      />
    ))}
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

import AccordionPage from "@/pages/AccordionPage";
import AvatarPage from "@/pages/AvatarPage";
import ButtonPage from "@/pages/ButtonPage";
import FormPage from "@/pages/FormPage";
import InputPage from "@/pages/InputPage";
import ModalPage from "@/pages/ModalPage";
import NotFound from "@/pages/NotFound";
import TablePage from "@/pages/TablePage";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { routes } from "./routes";
import Login from "@/pages/Login";

export const routers = (
  <Routes>
    <Route path="/form" element={<FormPage />} />
    <Route path="/input" element={<InputPage />} />
    <Route path="/button" element={<ButtonPage />} />
    <Route path="/table" element={<TablePage />} />
    <Route path="/accordion" element={<AccordionPage />} />
    <Route path="/modal" element={<ModalPage />} />
    {routes.map((i, index) => (
      <Route
        key={index}
        path={i.path}
        element={<PrivateRoute roles={i.roles}>{i.element}</PrivateRoute>}
      />
    ))}

    <Route path="/avatar" element={<AvatarPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

/* eslint-disable react-refresh/only-export-components */
import FileUpload from "@/components/UploadFile";
import { fileUpload } from "@/menu";
import { lazy, ReactElement } from "react";

interface RoutersType {
  path: string;
  element: ReactElement;
  roles: string[];
}

const CardPage = lazy(() => import("@/pages/CardPage"));
const AccordionPage = lazy(() => import("@/pages/AccordionPage"));
const AvatarPage = lazy(() => import("@/pages/AvatarPage"));
const ButtonPage = lazy(() => import("@/pages/ButtonPage"));
const FormPage = lazy(() => import("@/pages/FormPage"));
const InputPage = lazy(() => import("@/pages/InputPage"));
const ModalPage = lazy(() => import("@/pages/ModalPage"));
const TablePage = lazy(() => import("@/pages/TablePage"));

export const routes: RoutersType[] = [
  {
    path: "card",
    element: <CardPage />,
    roles: ["USER", "INNOVATION_ADMIN"],
  },
  {
    path: "avatar",
    element: <AvatarPage />,
    roles: ["USER", "INNOVATION_ADMIN"],
  },
  {
    path: "form",
    element: <FormPage />,
    roles: ["USER", "INNOVATION_ADMIN"],
  },
  {
    path: "input",
    element: <InputPage />,
    roles: ["USER", "INNOVATION_ADMIN"],
  },
  {
    path: "button",
    element: <ButtonPage />,
    roles: ["USER", "INNOVATION_ADMIN"],
  },
  {
    path: "table",
    element: <TablePage />,
    roles: ["USER", "INNOVATION_ADMIN"],
  },
  {
    path: "accordion",
    element: <AccordionPage />,
    roles: ["USER", "INNOVATION_ADMIN"],
  },
  {
    path: "modal",
    element: <ModalPage />,
    roles: ["USER", "INNOVATION_ADMIN"],
  },
  {
    path: fileUpload.path,
    element: <FileUpload />,
    roles: fileUpload.roles,
  },
];

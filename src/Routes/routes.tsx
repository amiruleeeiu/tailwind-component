/* eslint-disable react-refresh/only-export-components */
import { lazy, ReactElement } from "react";

interface RoutersType {
  path: string;
  element: ReactElement;
  roles: string[];
}

const CardPage = lazy(() => import("@/pages/CardPage"));

export const routes: RoutersType[] = [
  {
    path: "card",
    element: <CardPage />,
    roles: ["ADMIN", "USER"],
  },
];

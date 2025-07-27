import type { ReactNode } from "react";
import { HOME } from "../components/features/home";
import ItemDetails from "../pages/itemDetails";
import { ADD_ITEM } from "../components/features/addItem";
import { MY_REQUESTS } from "../components/features/myRequests";
import { MY_PROFILE } from "../components/features/profileDetails";
import { MAP } from "../components/features/map";
import NotFoundPage from "../pages/notFoundPage";

export type RouteConfig = {
  path: string;
  element: ReactNode;
};

export const routes: RouteConfig[] = [
  { path: "/", element: <HOME.HOME_PAGE/> },
  { path: "/items/:id", element: <ItemDetails/> },
  { path: "/add-item", element: <ADD_ITEM/> },
  { path: "/my-requests", element: <MY_REQUESTS/> },
  { path: "/map", element: <MAP/> },
  { path: "/profile", element: <MY_PROFILE/> },
  { path: "*", element:<NotFoundPage/>  },
];

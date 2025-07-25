import type { ReactNode } from "react";
import { HOME } from "../components/features/home";

export type RouteConfig = {
  path: string;
  element: ReactNode;
};

export const routes: RouteConfig[] = [
  { path: "/", element: <HOME.HOME_PAGE/> },
  { path: "/items/:id", element: <p>Item Details</p> },
  { path: "/add-item", element: <p>Add Item</p> },
  { path: "/my-requests", element: <p>My Requests</p> },
  { path: "/map", element: <p>Map View</p> },
  { path: "/profile", element: <p>Profile</p> },
  { path: "*", element: <h1 style={{color:'red'}}>404 Not Found</h1> },
];

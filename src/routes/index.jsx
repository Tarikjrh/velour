import { Navigate, useRoutes } from "react-router-dom";

import LandingPage from "../views/LandingPage";
import { mainRoutes } from "./main";
import VNavBar from "../components/VNavbar";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <>
          <VNavBar />
          <LandingPage />
        </>
      ),
    },

    // // Main routes
    ...mainRoutes,

    // No match 404
    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

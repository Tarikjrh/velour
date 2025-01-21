import { Navigate, useRoutes } from "react-router-dom";

import LandingPage from "../views/LandingPage";
import { mainRoutes } from "./main";
import SimpleLayout from "../layout/SimpleLayout";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <SimpleLayout>
          <LandingPage />
        </SimpleLayout>
      ),
    },

    // // Main routes
    ...mainRoutes,

    // No match 404
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

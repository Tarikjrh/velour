import { Outlet } from "react-router-dom";
import Catalog from "../views/Catalog";
import Configurator from "../views/Configurator";
import { Suspense } from "react";
import SplashScreen from "../components/SplashScreen";

// ----------------------------------------------------------------------

// export const HomePage = lazy(() => import("src/pages/home"));

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      // <SimpleLayout>
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
      // </SimpleLayout>
    ),
    children: [
      { path: "catalog", element: <Catalog /> },
      { path: "configure", element: <Configurator /> },
    ],
  },
];

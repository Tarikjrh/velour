import { Outlet } from "react-router-dom";
import Catalog from "../views/Catalog";
import Configurator from "../views/Configurator";
import { Suspense } from "react";
import SplashScreen from "../components/SplashScreen";
import VNavBar from "../components/VNavbar";
import Page404 from "../pages/error/Page404";

// ----------------------------------------------------------------------

// export const HomePage = lazy(() => import("src/pages/home"));

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      // <SimpleLayout>
      <>
        <VNavBar />

        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </>
      // </SimpleLayout>
    ),
    children: [
      { path: "catalog", element: <Catalog /> },
      { path: "configurator", element: <Configurator /> },
    ],
  },
  {
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      // { path: "coming-soon", element: <ComingSoonPage /> },
      // { path: "maintenance", element: <MaintenancePage /> },
      // { path: "500", element: <Page500 /> },
      { path: "404", element: <Page404 /> },
      // { path: "403", element: <Page403 /> },
    ],
  },
];

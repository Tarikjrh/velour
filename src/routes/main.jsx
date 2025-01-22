import { Outlet } from "react-router-dom";
import Catalog from "../views/Catalog";
import Configurator from "../views/Configurator";
import { Suspense } from "react";
import SplashScreen from "../components/SplashScreen";
import Page404 from "../pages/error/Page404";
import SimpleLayout from "../layout/SimpleLayout";
import ContactUs from "../views/ContactUs";
import Collections from "../views/Collections";

// ----------------------------------------------------------------------

// export const HomePage = lazy(() => import("src/pages/home"));

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      <SimpleLayout noPaddingTop>
        <Outlet />
      </SimpleLayout>
    ),
    children: [
      { path: "catalog", element: <Catalog /> },
      { path: "contact", element: <ContactUs /> },
      { path: "Collections", element: <Collections /> },
      {
        path: "configurator",
        element: <Configurator />,
        children: [{ path: ":id", element: <Configurator /> }],
      },
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

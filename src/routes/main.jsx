import { Outlet } from "react-router-dom";
import Catalog from "../views/Catalog";
import Configurator from "../views/Configurator";
import { Suspense } from "react";
import SplashScreen from "../components/SplashScreen";
import Page404 from "../pages/error/Page404";
import SimpleLayout from "../layout/SimpleLayout";
import ContactUs from "../views/ContactUs";
import AboutUs from "../views/AboutUs";

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
      { path: "catalog/:id", element: <Catalog /> },
      { path: "contact", element: <ContactUs /> },
      {
        path: "configurator",
        element: <Configurator />,
        children: [{ path: ":id", element: <Configurator /> }],
      },
    ],
  },
  {
    element: (
      <SimpleLayout>
        <Outlet />
      </SimpleLayout>
    ),
    children: [{ path: "about", element: <AboutUs /> }],
  },

  {
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [{ path: "404", element: <Page404 /> }],
  },
];

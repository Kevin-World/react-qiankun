import type { RouteObject } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../routes/Home";
import ManualLoad from "../routes/ManualLoadMicroApp";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/manual-load",
        element: <ManualLoad />,
      },
      { path: "*", element: '' },
    ],
  },
];

export default routes;
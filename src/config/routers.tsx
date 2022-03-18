/* eslint-disable */
import React from "react";
import { RouteObject } from "react-router-dom";

// const Layout = React.lazy(() => import("../components/Layout"));

import Layout from "../components/Layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: '' },
      {
        path: "/courses",
        element: '',
        children: [
          { index: true, element: '' },
          { path: "/courses/:id", element: '' },
        ],
      },
      { path: "*", element: '' },
    ],
  },
];

export default routes;
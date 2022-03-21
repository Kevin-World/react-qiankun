import type { RouteObject } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../routes/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/user/list",
        element: <div>User List</div>,
      },
      {
        path: "/settings",
        element: <div>Settings</div>,
      },
    ],
  },
];

export default routes;
import React from "react";
import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Shared/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
    ],
  },
]);

export default router;

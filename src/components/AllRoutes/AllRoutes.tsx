/** @format */

import React from "react";
import { useRoutes } from "react-router-dom";
import Signin from "../UserSign/Signin";
import Signup from "../UserSign/Signup";

const AllRoutes = () => {
  const element = useRoutes([
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/",
      element: <Signup />,
    },
  ]);

  return element;
};

export default AllRoutes;

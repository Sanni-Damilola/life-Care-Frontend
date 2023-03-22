/** @format */

import React from "react";
import { useQuery } from "react-query";
import AllRoutes from "./components/AllRoutes/AllRoutes";
import UserRoutes from "./components/AllRoutes/UserDashRoutes";
import { useAppSelector } from "./components/Global/Store";
import { UserData } from "./components/interface/interface";

function App() {
  //
  const userData = useAppSelector((state) => state.currentUser);

  return <div>{userData?.name ? <UserRoutes /> : <AllRoutes />}</div>;
}

export default App;

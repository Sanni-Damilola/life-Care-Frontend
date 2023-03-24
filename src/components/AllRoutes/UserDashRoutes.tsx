/** @format */

import React from "react";
import { useRoutes } from "react-router";
import styled from "styled-components";
import DashAppointment from "../Dashboard/DashAppoint";
import DashFundWallet from "../Dashboard/DashFundWallet";
// import DashBoardHome from "../Dashboard/DashBoardHome";
import DashHeader from "../Dashboard/DashHeader";
import DashHomeComp from "../Dashboard/DashHome/DashHomeComp";
import SideBar from "../Dashboard/DashSiderBar";
import DashTransPage from "../Dashboard/DashTransPage";

const UserRoutes = () => {

  const element = useRoutes([
    {
      path: "/dashboardhome",
      element: <DashHomeComp />,
    },
    {
      path: "/transactions",
      element: <DashTransPage />,
    },
    {
      path: "/makeappointment",
      element: <DashAppointment />,
    },
    {
      path: "/fundwallet",
      element: <DashFundWallet />,
    },
  ]);

  return (
    <>
      <Body>
        {/* {
                        agentSelector?.role === "Agent" ? */}
        <Head>
          <DashHeader />
        </Head>
        {/* :
                        null
                    } */}

        <Bottom>
          {/* {
                            agentSelector?.role === "Agent" ? */}
          <Side>
            <SideBar />
          </Side>
          {/* : 
                            null
                        } */}

          <DashRoute>{element}</DashRoute>
        </Bottom>
      </Body>
    </>
  );
};

export default UserRoutes;

// const DashHead = styled.div``;

const DashRoute = styled.div`
  width: calc(100% - 275px);
  height: 100%;
`;

const Side = styled.div`
  width: 250px;
  height: 100vh;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
`;

const Head = styled.div`
  width: 100%;
  height: 65px;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #eaeaea;
`;

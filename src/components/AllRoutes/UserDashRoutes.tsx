/** @format */

import React from "react";
import { useRoutes } from "react-router";
import styled from "styled-components";
import DashBoardHome from "../Dashboard/DashBoardHome";
import DashHeader from "../Dashboard/DashHeader";
import DashSiderBar from "../Dashboard/DashSiderBar";

const UserRoutes = () => {
  // const agentSelector = useAppSelector((state) => state.Agent)

  const element = useRoutes([
    {
      path: "/dashboard",
      element: <DashBoardHome />,
    },
    // {
    //     path: "/houseforsale",
    //     element: <HouseSale />,
    // },
    // {
    //     path: "/houseforrent",
    //     element: <HouseRent />,
    // },
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
            <DashSiderBar />
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
  postition: fixed;
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
  // background-color: black;
`;

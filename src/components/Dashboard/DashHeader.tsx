/** @format */

import React from "react";
import styled from "styled-components";
import DashSiderBar from "./DashSiderBar";
import pics from "../Assets/Medical-logo.png";
import { UseAppDispach, useAppSelector } from "../Global/Store";
import { useNavigate } from "react-router-dom";
import { logout } from "../Global/ReduxState";

const DashHeader = () => {
  const dispatch = UseAppDispach();
  const navigate = useNavigate();
  const getUser = useAppSelector((state) => state.currentUser);

  return (
    <div>
      <Head>
        <Logo>LOGO</Logo>
        <button
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}>
          logout
        </button>
        <User>
          <Icon>{/* < /> */}</Icon>

          <UserLetter>{getUser?.name.charAt(0).toUpperCase()}</UserLetter>

          <Username>{getUser?.name}</Username>
        </User>
      </Head>
    </div>
  );
};

export default DashHeader;

// const User = styled.div``;

// const User = styled.div``;

// const User = styled.div``;

// const User = styled.div``;

// const User = styled.div``;

const Icon = styled.div``;

const Username = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: white;
`;

const UserLetter = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: 700;
  color: white;
  border: 2px solid white;
  margin-right: 15px;
  margin-left: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
`;

const Logo = styled.h5`
  font-size: 25px;
  color: white;
  font-weight: 700;
  margin-left: 25px;
`;

const Side = styled.div``;

const Head = styled.div`
  height: 70px;
  width: 100%;
  background-color: #6c63ff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  position: fixed;
`;

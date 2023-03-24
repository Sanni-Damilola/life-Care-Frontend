import React from "react";
import styled from "styled-components";

const DashFundWallet = () => {
  return (
    <div>
      <Head>

        <Side>

            <Tap>
                <Label>Enter Amount</Label>

                <Here type="" placeholder='Tap here and enter .. (e.g 5000)'/>
            </Tap>

            <Proceed>Fund Now</Proceed>

        </Side>

      </Head>
    </div>
  );
};

export default DashFundWallet;

// const User = styled.div``;

// const UserButton = styled.button``;

const Proceed = styled.button`
cursor: pointer;
width: 85%;
height: 40px;
// color: white;
color: #000000;
background-color: #a8ff37;
margin-bottom: 15px;
margin-top: 15px;
border: none;
border-radius: 7px 7px 7px 0;
font-weight: 700;
`;

const Here = styled.input`
width: 100%;
height: 40px;
border-radius: 7px 7px 7px 0;
// padding-left: 5px;
`;

const Label = styled.div`
margin-top: 30px;
margin-bottom: 7px;
font-size: 12px;
font-weight: 700;
// color: #a8ff37;
// color: gray;
`;

const Tap = styled.div`
display: flex;
flex-direction: column; 
width: 80%;
`;

const UserInput = styled.input``;

const Side = styled.form`
width: 300px;
height: 200px;
background-color: white;
border-radius: 10px 0 10px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Head = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

import React from "react";
import styled from "styled-components";
import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { UserLogin } from "../Global/ReduxState";
// import { useAppDispatch } from "../Global/Store";
// import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { useQueryClient } from "@tanstack/react-query";
// import { useMutation } from "@tanstack/react-query";
// import { UserSignUp } from "../APICALLS/API";
import accidentSignup from "../Assets/accidentSignup.png";



const Signup = () => {
  const navigate = useNavigate();

  // const dispatch = useAppDispatch();

  // const queryclient = useQueryClient();

  // Setting up the schemas for our form using yup validator
  const Schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("Password do not match"),
    phoneno: yup.number().required("Please enter your phone number"),
  });

  type formData = yup.InferType<typeof Schema>;

  // const {
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  //   register,
  // } = useForm<formData>({ resolver: yupResolver(Schema) });

  // //   To sign up users:
  // const UsersSignUp = useMutation({
  //   mutationKey: ["New Users"],
  //   mutationFn: UserSignUp,
  //   onSuccess: (data: any) => {
  //     dispatch(UserLogin(data.data));
  //   },
  // });

  // const SignedUpUser = handleSubmit((data: any) => {
  //   UsersSignUp.mutate(data);
  //   reset();
  //   navigate("/user-signin");
  //   Swal.fire({
  //     icon: "success",
  //     title: "User Sign Up Successful",
  //     //   text: UsersSignUp!.data!.message,
  //   });
  // });

  return (
    <>
      <Body>
        {/* <Black></Black> */}

        <Hold>
          <Left>
            <Form>
              <div
                style={{
                  fontSize: "20px",
                  color: "#039EE6",
                  fontWeight: "700",
                  marginBottom: "20px",
                  textAlign: "center",
                }}>
                User Sign Up
              </div>

              <Input
                type="text"
                placeholder="Full Name"
                // {...register("name")}
                // props={errors?.name ? "outline" : ""}
              />
              {/* <p>{errors?.name && errors?.name?.message}</p> */}

              <Input
                type="text"
                // props={errors?.email ? "outline" : ""}
                placeholder="Email"
                // {...register("email")}
              />
              {/* <p>{errors?.email && errors?.email?.message}</p> */}

              <Input
                // props={errors?.password ? "outline" : ""}
                type="password"
                placeholder="Password"
                // {...register("password")}
              />
              {/* <p>{errors?.password && errors?.password?.message}</p> */}

              <Input
                // props={errors?.confirmPassword ? "outline" : ""}
                type="text"
                placeholder="Confirm Password"
                // {...register("confirmPassword")}
              />
              <p>
                {/* {errors?.confirmPassword && errors?.confirmPassword?.message} */}
              </p>

              <Button type="submit">Sign Up</Button>

              <Already>Already have an account? Sign in</Already>
            </Form>
          </Left>

          <Right>
            <RightImg src="/images/accidentSignin.svg" />
          </Right>
        </Hold>
      </Body>
    </>
  );
};

export default Signup;

// const Body = styled.div``;

// const Body = styled.div``;

const RightImg = styled.img`
  width: 500px;
  color: #039ee6;
`;

const Right = styled.div`
  width: 50%;
`;

// const Body = styled.div``;

const Already = styled.div`
  font-size: 13px;
  cursor: pointer;
  color: #039ee6;
  margin-top: 15px;
  text-align: center;
`;

const Button = styled.button`
  width: 105%;
  height: 40px;
  background: #039ee6;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background-color: #039ee6c7;
  }
`;

const Input = styled.input
// <{ props: string }>
`
  width: 100%;
  height: 40px;
  border: none;
  box-shadow: 0 0 2px #039ee6;
  margin-bottom: 20px;
  border-radius: 7px;
  padding-left: 10px;
`;

const Form = styled.form`
  width: 270px;
  /* background-color: red; */
  height: 450px;
  box-shadow: 0 0 3px #039ee6;
  border-radius: 10px 0 10px 0;
  padding: 30px;
  padding-right: 40px;
  margin-top: 40px;
`;

const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hold = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const Black = styled.div`
// width: 100%;
// height: 100%;
// position: absolute;
// background-color: black;
// opacity: 0.8;
// `;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: url("/images/room4.jpg");
  // background-size: cover;
  // position: relative;
`;

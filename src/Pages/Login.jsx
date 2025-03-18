import React from "react";
import "./Login.css";
import Navbar from "../Components/Navbar/Navbar";
import LoginRegister from "../Components/LoginRegister/LoginRegister";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="wrapLog">
        <LoginRegister />
      </div>
    </>
  );
}

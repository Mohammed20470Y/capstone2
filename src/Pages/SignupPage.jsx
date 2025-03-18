import React from "react";
import "./SignupPage.css";
import Navbar from "../Components/Navbar/Navbar";
import Signup from "../Components/SignUp/Signup";

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <div className="SignWrap">
        <Signup />
      </div>
    </>
  );
}

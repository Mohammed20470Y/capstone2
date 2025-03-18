import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar/Navbar";
import Welcom from "../Components/Welcome/Welcom";
import ScrollableCards from "../Components/Cards/ScrollableCards";
export default function Home() {
  return (
    <>
      <Navbar />
      <Welcom />
    </>
  );
}

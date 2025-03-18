import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";
import clinicImage1 from "../../assets/clinic1.jpg";
import clinicImage2 from "../../assets/clinic2.jpg";
import clinicImage3 from "../../assets/clinic3.jpg";

const Welcome = () => {
  return (
    <div className="Message">
      <div className="text-content">
        <h1 className="heading-text">Welcome to FastMed</h1>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </h2>
        <Link to="/service">
          <button className="serviceButton">Service</button>
        </Link>
      </div>
      <div className="image-content">
        <div className="image-slider">
          <img src={clinicImage1} alt="Clinic 1" />
          <img src={clinicImage2} alt="Clinic 2" />
          <img src={clinicImage3} alt="Clinic 3" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;

import React, { useContext } from "react";
import { AppData } from "../context/appContext";

function Hero() {
  const { personalData } = useContext(AppData);
  const heroData = personalData?.hero || [];

  return (
    <div className="hero" id="hero">
      <div className="hero-con">
        <div className="hero-details">
          <h2 style={{ color: "blue" }}>{heroData && heroData.welcome}</h2>
          <h1 style={{ color: "orangered" }}>{heroData && heroData.title}</h1>
          <h3 style={{ color: "darkgray" }}>
            {heroData && heroData.subTitle}
          </h3>
          <p className="paragraph">{heroData && heroData.description}</p>
          <a href="#contacts" className="contact-btn">
            Hire Me
          </a>
        </div>


        <div className="hero-img">
          <img src={heroData && heroData.profileImage} />
        </div>
      </div>
    </div>
  );
}
export default Hero;

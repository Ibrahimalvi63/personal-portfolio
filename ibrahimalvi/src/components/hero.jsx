import React, { useContext } from "react";
import { AppData } from "../context/appContext";

function Hero() {
  const { personalData } = useContext(AppData);
  const heroData = personalData?.hero || [];

  return (
    <div className="hero" id="hero">
      <div className="hero-con">
        <div className="hero-details">
          <h2 style={{ color: "lightblue" }}>{heroData && heroData.welcome}</h2>
          <h1 style={{ color: "orangered" }}>{heroData && heroData.title}</h1>
          <h3 style={{ color: "#e7d4e9e5" }}>
            {heroData && heroData.subTitle}
          </h3>
          <p className="paragraph">{heroData && heroData.description}</p>
          <a href="#contacts" className="contact-btn">
            Hire Me
          </a>
        </div>

        <div
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            background: "rgba(255, 0,150)",
            filter: "blur(90px)",
            zIndex: "0",
          }}
        />

        <div className="hero-img">
          <img src={heroData && heroData.profileImage} />
        </div>
      </div>
    </div>
  );
}
export default Hero;

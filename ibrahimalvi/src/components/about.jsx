import React, { useContext } from "react";
import { AppData } from "../context/appContext";
import SkillCard from "./skillCard";

function About() {
  const { personalData } = useContext(AppData);
  const aboutData = personalData?.about;
  return (
    <div className="about-con">
      <div className="about">
        <div className="about-me">
          <div className="about-img">
            <img src={aboutData && aboutData.aboutImage} />
          </div>
          <div className="about-data">
            <h2>{aboutData && aboutData.title}</h2>
            <p className="paragraph">{aboutData && aboutData.bio}</p>
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skill-grid">
            {aboutData &&
              aboutData.skills.map((skillData, index) => (
                <SkillCard
                  key={index}
                  skill={skillData.title}
                  progress={skillData.progress}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

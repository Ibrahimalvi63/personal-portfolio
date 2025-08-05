import React, { useContext } from "react";
import { AppData } from "../context/appContext";

function Projects() {
  const { personalData } = useContext(AppData);
  const projectData = personalData?.projects || [];
  console.log(projectData);
  return (
    <div className="project-con">
      <div className="projects">
        <h2>Projects</h2>
        <div className="project">
          {projectData.map((item) => (
            <div key={item._id} className="project-item">
              <a href={item.link} target="_blank">
                <img src={item.projectImage} />
                <h3>{item.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/style.css";

function SkillCard({ skill, progress }) {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < progress) {
        current++;
        setPercentage(current);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [progress]);
  return (
    <>
      <div style={{ width: "80px", marginTop: "10px" }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#fff",
            trailColor: "#444",
            textSize: "16px",
            pathColor: "orangered",
          })}
        />
        <p style={{ textAlign: "center", color: "#fff" }}>{skill}</p>
      </div>
    </>
  );
}
export default SkillCard;

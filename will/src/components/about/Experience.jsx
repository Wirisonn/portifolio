import React from "react";
import "./About.css";
import { IonIcon } from "@ionic/react";
import * as icon from "ionicons/icons";

const Experience = () => {
  const exData = [
    {
      year: "2022-Present",
      role: "Software Developer",
      company: "Centro Electronico",
      description: "Software development and Testing",
    },
    {
      year: "2021-2022",
      role: "Systems Analyst & Admin",
      company: "Hamara Group",
      description: "Systems Analysis and Administration",
    },
    {
      year: "2021-2021",
      role: "Retail Sales Supervisor",
      company: "Hamara Group",
      description: "Retail Sales Analysis and Improvement",
    },
  ];

  const edData = [
    {
      year: "2024-Present",
      role: "IBM Cybersecurity Analyst",
      company: "Coursera, IBM",
      description: "IT Security analysis concepts and tools",
    },
    {
      year: "2024-Present",
      role: "Prof FullStack Developer",
      company: "Coursera, IBM",
      description: "Full stack development concepts and tools",
    },
    {
      year: "2019-2023",
      role: "Bsc in Informatics & Analytics",
      company: "NUST, Zimbabwe",
      description: "Software, ML, AI, Data Analytics",
    },
  ];

  return (
    <div className="main-ex">
      <h2>Experience & Education</h2>
      <div className="ex-info">
        <div className="experience">
          {exData.map((ex) => (
            <div key={ex} className="sub-ex">
              <div className="icon-container">
                <IonIcon
                  icon={icon.briefcaseSharp}
                  className="ex-icon"
                  style={{ backgroundColor: "#646cff", marginRight: "20px" }}
                />
                <div className="vertical-line"></div>
              </div>

              <div>
                <p>{ex.year}</p>
                <h3 className="role-text">
                  {ex.role} <span className="spacer" /> <p>- {ex.company}</p>
                </h3>
                <p>{ex.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experience">
          {edData.map((ex) => (
            <div key={ex} className="sub-ex">
              <div className="icon-container">
                <IonIcon
                  icon={icon.librarySharp}
                  className="ex-icon"
                  style={{ backgroundColor: "#646cff", marginRight: "20px" }}
                />
                <div className="vertical-line"></div>
              </div>

              <div>
                <p>{ex.year}</p>
                <h3 className="role-text">
                  {ex.role} <span className="spacer" /> <p>- {ex.company}</p>
                </h3>
                <p>{ex.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
import "./MyPortfolio.css";
import { IonIcon } from "@ionic/react";
import * as icon from "ionicons/icons";
import { computer, will } from "../../assets";
import { Link } from "react-router-dom";


const MyPortfolio = () => {
  const projectList = [
    { name: "Retail Management Desktop Application", img: computer, to: "" },
    { name: "Retail Dashboard Web Application", img: computer, to: "" },
    { name: "eWallet Mobile Cross-Platform Application", img: computer, to: "" },
    { name: "Professional Website for Tech Company", img: computer, to: "" },
    { name: "Ticketing Web Application With NFC's", img: computer, to: "" },
    { name: "FAO Project Mobile Application", img: computer, to: "" },
  ];

  return (
    <div className="main-port">
      <h1>Portfolio</h1>
      <div className="projects">
        {projectList.map((project) => (
          <div key={project}>
            <div
              style={{
                width: '300px',
                height: '200px',
                borderRadius: '10px',
                backgroundImage: `url(${project.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "rgba(34, 240, 240, 0.5)",
              }}
            >
              <div className="content-overlay">
                <h3>{project.name}</h3>
                <Link to={project.to} className="go-link">
                  <IonIcon icon={icon.logoGithub} className="nav-icon" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPortfolio;

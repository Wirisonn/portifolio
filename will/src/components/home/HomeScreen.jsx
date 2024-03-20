import React from "react";
import { will } from "../../assets";
import "./HomeScreen.css";
import Typewriter from "typewriter-effect";
import { IonIcon } from "@ionic/react";
import * as icon from "ionicons/icons";

const HomeScreen = () => {
  const downloadCV = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/assets/Wilson.pdf";
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "wilson_resume.pdf";
    anchor.click();
  };

  return (
    <div className="home-container">
      <div className="img-container">
        <img src={will} alt="wilson rwafa" className="img" />
      </div>
      <div className="intro-container">
        <div className="head">
          <h1>- I'm Wilson Rwafa</h1>
        </div>
        <h2>
          <Typewriter
            options={{
              strings: [
                "Full Stack Software Developer",
                "Cybersecurity Analyst",
                "Data Analyst",
                "IT Support Specialist",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p>
          Versatile tech enthusiast specializing in crafting innovative
          solutions. With a passion for problem-solving and adaptability, I
          navigate the dynamic intersection of technology, seamlessly addressing
          challenges in diverse domains.
        </p>
        <button className="btn">
          Download CV
          <IonIcon
            icon={icon.arrowDownSharp}
            className="btn-icon"
            onClick={downloadCV}
          />
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;

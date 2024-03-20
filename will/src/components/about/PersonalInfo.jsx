import React from "react";
import "./About.css";

const PersonalInfo = () => {
  return (
    <div className="pers-container">
      <h1 className="heading">About Me</h1>
      <div className="pers-sub">
        <div className="pers-info">
          <h2>Personal Info</h2>
          <div className="info-container">
            <div className="info">
              <p><span className="bold-text">First Name:</span> Takudzwa Wilson</p>
              <p><span className="bold-text">Age:</span>  24</p>
              <p><span className="bold-text">Freelance:</span> Available</p>
              <p><span className="bold-text">Phone:</span>  +263785933</p>
              <p><span className="bold-text">Company:</span>  WiRisoft</p>
            </div>
            <div className="info">
              <p><span className="bold-text">Last Name:</span>  Rwafa</p>
              <p><span className="bold-text">Nationality:</span>  Zimbabwean</p>
              <p><span className="bold-text">Address:</span>  Harare, Zimbabwe</p>
              <p><span className="bold-text">Email:</span>  wilson@wirisoft.co.zw</p>
              <p><span className="bold-text">Languages:</span>  English, Shona</p>
            </div>
          </div>
        </div>
        <div className="pers-stats">
          <div className="stat">
            <h1>2+</h1>
            <p>Years of <br/> Experience</p>
          </div>
          <div className="stat">
            <h1>12+</h1>
            <p>Projects <br/> Completed</p>
          </div>
          <div className="stat">
            <h1>5+</h1>
            <p>Clients <br/> Satisfied</p>
          </div>
          <div className="stat">
            <h1>5+</h1>
            <p>Attained <br/> Certificates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

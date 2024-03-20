import React, { useState } from "react";
import "./ContactMe.css";
import { IonIcon } from "@ionic/react";
import * as icon from "ionicons/icons";
import { Link } from "react-router-dom";

const ContactMe = () => {
  const iconList = [
    { key: 1, to: "https://www.facebook.com", con: icon.logoFacebook },
    { key: 2, to: "https://www.twitter.com", con: icon.logoTwitter },
    { key: 3, to: "https://www.github.com", con: icon.logoGithub },
    { key: 4, to: "https://www.whatsapp.com", con: icon.logoWhatsapp },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="contact-main">
      <h1>Get In Touch</h1>
      <div className="contact-container">
        <div className="main-info">
          <h3>Always Available!</h3>
          <p>
            Feel free to reach out for project collaborations, business
            inquiries, or simply to say hello. Let's create something amazing
            together!
          </p>
          <div className="icon-box">
            <IonIcon
              icon={icon.mailOpenSharp}
              className="con-icon"
              style={{ backgroundColor: "#646cff" }}
            />
            <p>
              Mail Me <br /> wilson@wirisoft.co.zw
            </p>
          </div>
          <div className="icon-box">
            <IonIcon
              icon={icon.callSharp}
              className="con-icon"
              style={{ backgroundColor: "#646cff" }}
            />
            <p>
              Call Me <br /> +263 78 593 3159
            </p>
          </div>
          <div>
            <ul className="con-list">
              {iconList.map((icon) => (
                <Icon
                  key={icon.key}
                  to={icon.to}
                  icon={icon.con}
                  onClick={() => handleIconClick(icon.con)}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="sub-entry">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="top-entry"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="top-entry"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="top-entry"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              id=""
              cols="102"
              rows="15"
              placeholder="Your Message"
              className="entry"
            />
            <button className="btn" type="submit" style={{ width: "12rem" }}>
              Send Message
              <IonIcon icon={icon.sendSharp} className="btn-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Icon = ({ to, icon, isActive, onClick }) => {
  return (
    <li className={`icon ${isActive ? "active" : ""}`} onClick={onClick}>
      <Link to={to}>
        <IonIcon icon={icon} className="con-icon" />
      </Link>
    </li>
  );
};

export default ContactMe;

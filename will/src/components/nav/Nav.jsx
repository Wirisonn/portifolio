import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import * as icon from "ionicons/icons";
import "./Nav.css";
import { Link } from "react-router-dom";

const IconList = () => {
  const [activeIcon, setActiveIcon] = useState(icon.homeSharp);
  const [openMenu, setOpenMenu] = useState(true);

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  const showMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
    console.log(openMenu);
  };

  const iconList = [
    {id: 1, to: "/", con: icon.homeSharp },
    {id: 2, to: "/about", con: icon.personSharp },
    {id: 3, to: "/portfolio", con: icon.folderOpenSharp },
    {id: 4, to: "/contact", con: icon.mailOpenSharp },
  ];

  return (
    <div className="nav-container">
      <ul className={openMenu ? "icon-list" : "icon-list-closed"}>
        {iconList.map((icon) => (
          <Icon
            key={icon.id}
            to={icon.to}
            icon={icon.con}
            isActive={activeIcon === icon.con}
            onClick={() => handleIconClick(icon.con)}
          />
        ))}
      </ul>
      <IonIcon
        icon={openMenu ? icon.chevronDownSharp : icon.chevronUpSharp}
        className="menu-btn"
        onClick={showMenu}
      />
    </div>
  );
};

const Icon = ({ to, icon, isActive, onClick }) => {
  return (
    <li className={`icon ${isActive ? "active" : ""}`} onClick={onClick}>
      <Link to={to}>
        <IonIcon icon={icon} className="nav-icon" />
      </Link>
    </li>
  );
};

export default IconList;

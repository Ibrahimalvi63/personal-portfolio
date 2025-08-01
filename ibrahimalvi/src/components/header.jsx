import React, { useContext } from "react";
import { AppData } from "../context/appContext";

function Header({ activeSection }) {
  const { personalData } = useContext(AppData);
  const userName = personalData?.userName || [];

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contacts", label: "Contacts" },
  ];

  return (
    <div className="header">
      <div className="logo-img">
        {/* <img src="./name-logo.png" alt="Logo" /> */}
        <h3>{userName ? userName : ""}</h3>
      </div>
      <div className="nav">
        {navItems.map((item) => (
          <div className="link" key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          </div>
        ))}
        <a href="#contacts" className="contact-btn">
          Get in touch
        </a>
      </div>
    </div>
  );
}
export default Header;

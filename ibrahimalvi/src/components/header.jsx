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
      <div className="header-con">
        <h3>{userName ? userName : ""}</h3>

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
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;

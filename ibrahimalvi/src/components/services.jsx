import React, { useContext } from "react";
import { AppData } from "../context/appContext";

function Services() {
  const { personalData } = useContext(AppData);
  const serviceData = personalData?.services || [];

  return (
    <div className="services">
      <h2>Services</h2>
      <div className="service-con">
        {serviceData.map((item) => (
          <div key={item._id} className="service-item">
            <h3 className="service-title">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

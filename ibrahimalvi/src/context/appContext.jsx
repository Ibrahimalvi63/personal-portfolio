import React, { createContext, useEffect, useState } from "react";

export const AppData = createContext();

export const AppProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState({});
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_URI;
    const getData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/getData`);
        const data = await response.json();
        if (data) setPersonalData(data);
      } catch (err) {
        console.error("An error ocured: ", err);
      }
    };
    getData();
  }, []);

  return (
    <AppData.Provider value={{ personalData }}>{children}</AppData.Provider>
  );
};

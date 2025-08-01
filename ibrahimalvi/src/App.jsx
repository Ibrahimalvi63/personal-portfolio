import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (window.scrollY >= top - height / 2) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <Footer />
    </>
  );
}

export default App;

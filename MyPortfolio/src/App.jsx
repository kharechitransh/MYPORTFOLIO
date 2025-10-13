

import React from "react";
import Header from "./components/header";


import Home from "./components/home";

import Skill from "./components/Skill";
import Contact from "./components/contact";
import About from "./components/about";

import Project from "./components/achivement";
import Education from "./components/education";


import { useEffect, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(hash || "home");
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <Header />
      {activeSection === "home" && <Home />}
      {activeSection === "about" && <About />}
  {activeSection === "skills" && <Skill />}
  {activeSection === "education" && <Education />}
  {activeSection === "projects" && <Project />}
  {activeSection === "contact" && <Contact />}
    </>
  );
}

export default App;

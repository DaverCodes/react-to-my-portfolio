import React, { useState } from "react";
import Header from "./components/header";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";


function App() {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} handleNavigation={handleNavigation} />
      {activeSection === "about" && <About />}
      {activeSection === "portfolio" && <Portfolio />}
      {activeSection === "contact" && <Contact />}
      {activeSection === "resume" && <Resume />}
    </div>
  );
}

export default App;

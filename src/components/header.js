import React from "react";
import Navigation from "./nav";

function Header(props) {
    return (
      <header>
        <h1>Dave S</h1>
        <Navigation activeSection={props.activeSection} handleNavigation={props.handleNavigation} />
      </header>
    );
  }
  
export default Header;
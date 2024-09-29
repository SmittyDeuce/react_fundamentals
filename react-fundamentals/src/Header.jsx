import React from "react";
import spookyImage from "./photo/spooky.jpg";
import "./Header.css";
function Header() {
  return (
    <>
      <div id="header-container">
        <header>
          <img src={spookyImage} alt="Jack-O-Lantern" />
          <p id="header-name">Jack the Lantern</p>
        </header>
      </div>
    </>
  );
}

export default Header;

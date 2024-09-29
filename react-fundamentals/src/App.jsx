import React from "react";
import spookyImage from "./photo/spooky.jpg";
import "./App.css";

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

function About() {
  return (
    <>
      <div id="about-container">
        <h2>About</h2>
        <p id="about">
          In the shadowy corners of the haunted forest, a fearsome villain
          roams: Jack the Lantern, a skeletal figure with a glowing
          jack-o'-lantern for a head. With hollow eye sockets that flicker like
          candlelight, he strikes fear into the hearts of those who dare to
          wander too close. Jack's bony fingers, long and claw-like, clutch a
          staff entwined with creeping vines, radiating an eerie glow that seems
          to dance with the spirits of the night. Legends whisper of his cursed
          existence, bound to protect his domain from intruders, forever seeking
          vengeance against those who disturb the peace of his eerie realm. As
          Halloween approaches, the tales of Jack the Lantern spread like
          wildfire, warning all to stay away from the flickering lights that
          lure the unsuspecting into his grasp.
        </p>
      </div>
    </>
  );
}


function App() {
  return (
    <>
      <Header />
      <About /> 
    </>
  );
}


export default App;


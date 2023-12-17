import React from "react";
import portrait from "../imgs/portrait.png";
export default function Header() {
  return (
    <div className="navbar">
      <img className="nav-img" src={portrait} alt="Potrait" />

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/#projects">Projects</a>
        <a href="/#contact">Contact</a>
      </div>
    </div>
  );
}

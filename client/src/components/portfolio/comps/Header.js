import React from "react";

import "./header.css";

export default function Header() {
  function scroll(e) {
    var loc = null;
    switch (e) {
      case 1:
        window.scrollTo(0, 0);
        break;
      case 2:
        loc = document.getElementById("about").offsetTop;
        console.log(loc);
        window.scrollTo(0, loc);
        break;
      case 3:
        loc = document.getElementById("exp-loc").offsetTop;
        console.log(loc);
        window.scrollTo(0, loc - 100);
        break;
      case 4:
        loc = document.getElementById("projects").offsetTop;
        console.log(loc);
        window.scrollTo(0, loc - 100);
        break;
      case 5:
        loc = document.getElementById("contact").offsetTop;
        console.log(loc);
        window.scrollTo(0, loc - 100);
        break;
      default:
        break;
    }
  }
  return (
    <div className="navbar">
      <div className="nav-title">Taylor.dev</div>
      <div className="nav-links">
        <div onClick={() => scroll(1)}>Home</div>
        <div onClick={() => scroll(2)}>About</div>
        <div onClick={() => scroll(3)}>Experience</div>
        <div onClick={() => scroll(4)}>Projects</div>
        <div onClick={() => scroll(5)}>Contact</div>
      </div>
    </div>
  );
}

import React from "react";

import "./portfolio/styles/portfolio.css";
import About from "./portfolio/pages/About";
import Skills from "./portfolio/pages/Skills";
import Projects from "./portfolio/pages/Projects";
import Contact from "./portfolio/pages/Contact";

export default function Landing() {
  function scroll() {
    var loc = document.getElementById("contact").offsetTop;
    console.log(loc);
    window.scrollTo(0, loc - 100);
  }
  return (
    <div className="landing-container">
      <div className="content-container">
        <div className="content land">
          <div className="html-code html-html">&lt;html&gt;</div>
          <div className="html-code body-html">&lt;body&gt;</div>
          <div className="html-code div-html">&lt;div&gt;</div>
          <div className="container">
            <div className="content-ctnr">
              <div className="content-intro ctnr">Hi,</div>
              <div className="content-name ctnr">I'm Taylor</div>
              <div className="content-desc ctnr">
                <div className="html-code">&lt;p&gt;</div>
                <span>Full Stack Web Designer | Programmer</span>
                <div className="html-code">&lt;/p&gt;</div>
              </div>
              <div className="content-contact ctnr">
                <span onClick={() => scroll()}>Contact me!</span>
              </div>
            </div>
          </div>
          <div className="html-code div-html">&lt;/div&gt;</div>
          <div className="html-code body-html">&lt;/body&gt;</div>
          <div className="html-code html-html">&lt;/html&gt;</div>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

import React from "react";

import About from "./Portfolio/About";
import Skills from "./Portfolio/Skills";
import Projects from "./Portfolio/Projects";
import Contact from "./Portfolio/Contact";

export default function Landing() {
  function scroll() {
    var loc = document.getElementById("contact").offsetTop;
    console.log(loc);
    window.scrollTo(0, loc - 100);
  }
  return (
    <div className="landing-container">
      <div className="content-container land">
        <div className="content land">
          <div className="html-code html-html" id="top">
            &lt;html&gt;
          </div>
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
      <div className="about-me-section" id="about">
        <div className="section-header">About Me</div>
        <div className="about-me">
          <About />
          <Skills />
        </div>
      </div>

      <Projects />
      <Contact />
    </div>
  );
}

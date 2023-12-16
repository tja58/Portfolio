import React from "react";

import Projects from "./Projects";
import Contact from "./Contact";

import Header from "../components/Header";
import Socials from "../components/Social";

export default function Landing() {
  return (
    <>
      <div className="landing-container">
        <Header />
        <div className="p-content p-page">
          <div className="p-intro-content">
            <div className="p-intro-name-lead">Hi, my name is</div>
            <div className="p-intro-name">Taylor Atkin</div>
            <div className="p-intro-desc">
              I'm a software developer based in the United States. I build
              interactive, complex websites using{" "}
              <span className="p-intro-bold">React</span> and{" "}
              <span className="p-intro-bold">NodeJS</span>. Currently I am
              learning a variety of concepts such as{" "}
              <span className="p-intro-bold">Python Servers</span>,{" "}
              <span className="p-intro-bold">Web Security</span>, and more. I
              specialize in <span className="p-intro-bold">full-stack</span> web
              development, but I strive to constantly learn new things.
            </div>

            <a className="p-intro-contact" href="/#contact">
              Contact me
            </a>
          </div>
        </div>
        <Projects />
        <Contact />
        <div>Designed & Created by Taylor Atkin</div>
      </div>
      <Socials />
    </>
  );
}

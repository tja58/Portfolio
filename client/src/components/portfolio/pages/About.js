import React from "react";
import Desk from "../imgs/desk.jpg";

export default function About() {
  return (
    <div className="content-container" id="about">
      <div className="content about-content">
        <div className="about-container">
          <div className="about-desc-container">
            <img src={Desk} className="about-img" alt="About Me" />
          </div>
          <div className="about-desc-container">
            <div className="intro-ctnr">
              <div className="intro-header">About me</div>
              <div className="intro-desc">
                A dedicated full stack developer based in Arizona, United States
              </div>
            </div>
            <div className="about">
              I have developed many different front-end and back-end
              applications. From Solan appications to Ecomerce platforms. I'm a
              passionate programmer focused on beautiful, pixel-perfect,
              responive interfaces. With complex back-end implementation to
              respond and react to any requests. When I'm not at the computer I
              usually am working out, listening to my favorite podcasts, or
              working.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

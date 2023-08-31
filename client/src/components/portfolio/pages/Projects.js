import React from "react";

import Logo from "../imgs/logo.png";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="content-container">
      <div className="content">
        <div className="section-header" id="projects">
          Projects
        </div>
        <div className="project-container">
          <div className="project-img">
            <img src={Logo} alt="CodeConnet Logo" />
          </div>
          <div className="project-desc-ctnr">
            <div className="project-title">
              <Link to="/pets-choice">Pets Choice</Link>
            </div>
            <div className="project-desc">
              Shop all your pets needs! Purchase pet food, products, and
              supplies. Earn Rewards and let your pets choose what they like.
            </div>
            <div className="project-items">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>HTML</span>
              <span>Redux</span>
              <span>Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

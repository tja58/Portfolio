import React from "react";

import PetsChoice from "../../imgs/Portfolio/PetsChoice.png";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="content-container" id="projects">
      <div className="content">
        <div className="section-header">Projects</div>
        <div className="project-container">
          <img src={PetsChoice} alt="CodeConnet Logo" className="project-img" />

          <div className="project-desc-ctnr">
            <div className="project-title">Pets Choice</div>
            <div className="project-desc">
              Pets Choice is an online shoping application that pet owners can
              pruchase products, services, and learn more about their pets. With
              a user friendly interface it allows for users to traverse the site
              with ease and purchase all their pets needs in one place.
            </div>
            <div className="project-links">
              <Link to="/pets-choice">Live Demo</Link>
              <Link to="#/">Source Code</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

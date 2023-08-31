import React from "react";

export default function Skills() {
  function expandTab(e) {
    switch (e) {
      case 1:
        document.getElementById("prog-lang-title").classList.toggle("active");
        var pl = document.getElementById("pl");
        if (pl.style.height) {
          pl.style.height = null;
        } else {
          pl.style.height = pl.scrollHeight + "px";
        }
        break;
      case 2:
        document.getElementById("db-title").classList.toggle("active");
        var db = document.getElementById("db");
        if (db.style.height) {
          db.style.height = null;
        } else {
          db.style.height = db.scrollHeight + "px";
        }
        break;
      case 3:
        document.getElementById("app-title").classList.toggle("active");
        var app = document.getElementById("app");
        if (app.style.height) {
          app.style.height = null;
        } else {
          app.style.height = app.scrollHeight + "px";
        }
        break;
      case 4:
        document.getElementById("tps-title").classList.toggle("active");
        var tps = document.getElementById("tps");
        if (tps.style.height) {
          tps.style.height = null;
        } else {
          tps.style.height = tps.scrollHeight + "px";
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="content-container" id="prog-lang">
      <div className="content">
        <div className="section-header" id="exp-loc">
          Experience
        </div>
        <div className="skills-container">
          <div className="skills-card">
            <span onClick={() => expandTab(1)} id="prog-lang-title">
              Programming Languages
            </span>
            <div className="skills-card-content" id="pl">
              <div>HTML</div>
              <div>CSS</div>
              <div>JavaScript</div>
              <div>Java</div>
              <div>Python</div>
              <div>PHP</div>
              <div>C#</div>
              <div>Clojure</div>
              <div>React</div>
            </div>
          </div>
          <div className="skills-card">
            <span onClick={() => expandTab(2)} id="db-title">
              Databases
            </span>
            <div className="skills-card-content" id="db">
              <div>MongoDB</div>
              <div>Firebase</div>
              <div>MySQL</div>
            </div>
          </div>
          <div className="skills-card">
            <span onClick={() => expandTab(3)} id="app-title">
              Applications
            </span>
            <div className="skills-card-content" id="app">
              <div>React Applications</div>
              <div>Front-End Dev</div>
              <div>Back-End Dev</div>
              <div>Mobile Applications</div>
              <div>Game Development</div>
              <div>UI / UX Design</div>
              <div>Python Applications</div>
            </div>
          </div>
          <div className="skills-card">
            <span onClick={() => expandTab(4)} id="tps-title">
              Third Party Softwares
            </span>
            <div className="skills-card-content" id="tps">
              <div>Firebase</div>
              <div>Google Console</div>
              <div>Google Admin Suite</div>
              <div>Stripe</div>
              <div>Send Grid</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

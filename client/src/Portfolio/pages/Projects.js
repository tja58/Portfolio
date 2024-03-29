import React from "react";

import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="p-content p-page" id="projects">
      <div className="p-projects-ctnr">
        <div className="p-project-content">
          <div className="p-project">
            <div className="project-title">Dynamic Business Sync</div>
            <div className="project-desc">
              Model time clock service for employers. Employers can handle all
              employees, visitors, and organizations data.
            </div>
            <div className="project-info">
              <div className="project-con">
                <Link>Express</Link>
                <Link>React</Link>
                <Link>Electron</Link>
              </div>
              <div className="project-links">
                <a href="/dbs" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a
                  href="https://github.com/atk21009/Senior-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="p-project">
            <div className="project-title">Task Manager</div>
            <div className="project-desc">
              Erlang server to handle tasks. With this users can add tasks, add
              task descriptions, complete tasks, and delete tasks
            </div>
            <div className="project-info">
              <div className="project-con">
                <Link>Erlang</Link>
              </div>
              <div className="project-links">
                <a href="https://github.com/tja58/Erlang-task_manager">
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="p-project">
            <div className="project-title">Grandpa's Closet</div>
            <div className="project-desc">
              This is a freelance e-commerce application designed to sell
              clothing items. In this application customers can order clothes,
              and place orders for available products. **This application is
              currently under development since 1/18/2024**
            </div>
            <div className="project-info">
              <div className="project-con">
                <Link>Express</Link>
                <Link>React</Link>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/tja58/GrandpasCloset"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          {/* <div className="p-project">
            <div className="project-title">Apps Galore</div>
            <div className="project-desc">Tons of apps, tons of fun.</div>
            <div className="project-info">
              <div className="project-con">
                <Link>Express</Link>
                <Link>React</Link>
              </div>
              <div className="project-links">
                <Link to="/">Source Code</Link>
              </div>
            </div>
          </div> */}
          {/* <div className="p-project">
            <div className="project-title">Wrapping Spotify</div>
            <div className="project-desc">
              An app to help you explore new music, and redefine your music
              pallet.
            </div>
            <div className="project-info">
              <div className="project-con">
                <Link>Express</Link>
                <Link>React</Link>
                <Link>Electron</Link>
              </div>
              <div className="project-links">
                <Link to="/">Live Demo</Link>
                <Link to="/">Source Code</Link>
              </div>
            </div>
          </div> */}
          {/* <div className="p-project">
            <div className="project-title">Image Wiz 101</div>
            <div className="project-desc">
              Image sharing platform designed at storing, sharing and organizing
              images.
            </div>
            <div className="project-info">
              <div className="project-con">
                <Link>Express</Link>
                <Link>React</Link>
                <Link>Electron</Link>
              </div>
              <div className="project-links">
                <Link to="/">Live Demo</Link>
                <Link to="/">Source Code</Link>
              </div>
            </div>
          </div> */}
          {/* <div className="p-project">
            <div className="project-title">Picture Perfection</div>
            <div className="project-desc">
              Photography tool designed at helping photographers share photos to
              their clients, and allow access to their clients.
            </div>
            <div className="project-info">
              <div className="project-con">
                <Link>Express</Link>
                <Link>React</Link>
                <Link>Electron</Link>
              </div>
              <div className="project-links">
                <Link to="/">Live Demo</Link>
                <Link to="/">Source Code</Link>
              </div>
            </div>
          </div> */}
          {/* <div className="p-project">
            <div className="project-title">AI Channel</div>
            <div className="project-desc">
              Integration of AI, exploring the potentials of AI.
            </div>
            <div className="project-info">
              <div className="project-con">
                <Link>Express</Link>
                <Link>React</Link>
                <Link>Electron</Link>
              </div>
              <div className="project-links">
                <Link to="/">Live Demo</Link>
                <Link to="/">Source Code</Link>
              </div>
            </div>
          </div> */}
          {/* <div className="p-project">
            <div className="project-title">Silent Message</div>
            <div className="project-desc">
              Secure messaging app with encryption, security, and other
              protective features. Designed in React Native.
            </div>
            <div className="project-info">
              <div className="project-con">
                <Link>Express</Link>
                <Link>React</Link>
                <Link>Electron</Link>
              </div>
              <div className="project-links">
                <Link to="/">Live Demo</Link>
                <Link to="/">Source Code</Link>
              </div>
            </div>
          </div> */}
          <div className="p-project">
            <div className="project-title">Portfolio</div>
            <div className="project-desc">
              Explore the coding for this website. All projects have been
              implemented in a mono repository, and all functionality of the
              projects are hooked to this website.
            </div>
            <div className="project-info">
              <div className="project-con">
                <Link>Express</Link>
                <Link>React</Link>
                <Link>Electron</Link>
              </div>
              <div className="project-links">
                <Link to="/">Live Demo</Link>
                <a
                  href="https://github.com/tja58/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          {/* <div className="p-project">
            <div className="project-title">Certificate Workflow</div>
            <div className="project-desc">
              Explore some of the projects created during my study of various
              computer science and data science certificates. I'm currently
              working towards various certificates and learning new concepts.
            </div>
            <div className="project-info">
              <div className="project-con">
                <Link>Express</Link>
                <Link>React</Link>
                <Link>Electron</Link>
              </div>
              <div className="project-links">
                <Link to="/">Live Demo</Link>
                <a
                  href="https://github.com/tja58/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

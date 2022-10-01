import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import "./style.css";

// const projectsLinkData = [
//   {
//     title: "Star Wars Planets",
//     url: "https://oligregz.github.io/Star-Wars-Planets-Project/"
//   }
// ];

function Projects() {
  return (
    <div className="projectsPage">
      <NavBar />
      <div className="listLinks">
        <ul>
          <li>
            <div className="starLine">
                <h3>Star Wars Planets </h3>
                <a
                  href="https://oligregz.github.io/Star-Wars-Planets-Project/"
                  target={"blank"}
                  className="taga"
                >
                  {"Ei, clica aqui ;)"}
                </a>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Projects;
import "./App.css";
import React, { useState, useEffect } from "react";
import ProjectSideD from "./components/ProjectSideD";
import ProjectsSlider from "./components/ProjectsSlider";
import SVGWave from "./components/SVGWave";
import GitIcon from "./components/GitIcon";
import lionGif from "./assets/images/lion.gif";
import { VscNotebook } from "react-icons/vsc";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Next",
  "Typescript",
  "Sass",
  "Git",
];

function App() {
  const [openProjectDrawers, setOpenProjectDrawers] = useState(false);
  const [logoClassInitial, setLogoClassInitial] = useState(false);
  const [lionClass, setLionClass] = useState(false);

  const [clickedLink, setClickedLink] = useState("");

  const openDrawersHandler = (link) => {
    setClickedLink(link);
    setOpenProjectDrawers(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLogoClassInitial(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timeoutLion = setTimeout(() => {
      setLionClass(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutLion);
    };
  });

  return (
    <React.Fragment>
      <div className="app">
        <GitIcon />
        <div className="mobileMenu">
          <ul>
            <li onClick={() => openDrawersHandler("about")}>About</li>
            <li onClick={() => openDrawersHandler("skills")}>Skills</li>
            <li onClick={() => openDrawersHandler("projects")}>Projects</li>
          </ul>
        </div>
        {openProjectDrawers && (
          <ProjectSideD
            className={`mobile drawerLeft ${
              openProjectDrawers && "transGrLeft"
            }`}
          >
            {clickedLink === "about" && (
              <p style={{ fontSize: "18px", maxWidth: "65%" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
                aliqua.consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            )}
            {clickedLink === "skills" && (
              <ul
                style={{
                  listStyle: "none",
                  textAlign: "center",
                }}
              >
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            )}
            {clickedLink === "projects" && <ProjectsSlider />}
          </ProjectSideD>
        )}
        {openProjectDrawers && (
          <ProjectSideD
            className={`drawerRight ${openProjectDrawers && "transGrRight"}`}
          >
            {clickedLink === "about" && <h1>About</h1>}
            {clickedLink === "skills" && <h1>Skills</h1>}
            {clickedLink === "projects" && <h1>Projects</h1>}
          </ProjectSideD>
        )}
        <img
          src={lionGif}
          alt=""
          width={200}
          height={200}
          style={{
            position: "absolute",
            top: "35%",
            left: "43.5%",
            zIndex: 200,
            objectFit: "contain",

            opacity: 0,
          }}
          className={lionClass && "lionClass"}
        />
        <div
          style={{
            opacity: logoClassInitial ? 1 : 0,
            rotate: logoClassInitial ? "0deg" : "6deg",
          }}
          className="azLogo"
        >
          <div className="azLogoHover">
            <ul
              style={{
                fontSize: "14px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
              className="navList"
            >
              <li onClick={() => openDrawersHandler("about")}>
                <a href="#">About</a>
              </li>
              <li onClick={() => openDrawersHandler("skills")}>
                <a href="#">Skills</a>
              </li>

              <li onClick={() => openDrawersHandler("projects")}>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
          <h2>A</h2>
          <h1>Z</h1>
        </div>
        <div className="logoContainer logoContainer3"></div>
        <div className="logoContainer logoContainer2"></div>
        <div
          className="logoContainer logoContainer0"
          style={{
            padding: "20px",
            borderRadius: "50%",
          }}
        >
          <div style={{ overflow: "hidden" }} className="firstContainer">
            <div className="mobileLogo">
              <h2
                style={{
                  fontSize: "20px",
                  backgroundColor: "wheat",
                  color: "brown",
                  marginTop: "30px",
                  boxShadow: "10px 20px 40px 30px wheat",
                }}
              >
                A
              </h2>
              <h1
                style={{
                  backgroundColor: "black",
                  height: "300px",
                }}
              >
                Z
              </h1>
            </div>
          </div>
        </div>
      </div>
      <SVGWave />
    </React.Fragment>
  );
}

export default App;

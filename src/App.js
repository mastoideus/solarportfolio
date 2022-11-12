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

  const [clickedLink, setClickedLink] = useState("");

  const openDrawersHandler = (link) => {
    setClickedLink(link);
    setOpenProjectDrawers(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLogoClassInitial(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

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
              <p className="aboutText">
                Hi, I am Anel Zubcevic and I'm a Frontend developer. Currently,
                I'm working in React and Next.js using all the advantages of the
                Library in building responsive, scalable, performance efficient
                and user friendly Web apps.
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
                  <li className="skill" key={index}>
                    {skill}
                  </li>
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
              <li onClick={() => openDrawersHandler("about")}>About</li>
              <li onClick={() => openDrawersHandler("skills")}>Skills</li>

              <li onClick={() => openDrawersHandler("projects")}>Projects</li>
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

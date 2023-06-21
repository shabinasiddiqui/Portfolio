import React from "react";
import "./Skills.css";
import htmlLogo from "../../assets/img/html.png";
import cssLogo from "../../assets/img/css.png";
import jsLogo from "../../assets/img/js.png";
import reactjsLogo from "../../assets/img/reactjs.png";
import bootstrapLogo from "../../assets/img/bootstrap.png";
import pythonLogo from "../../assets/img/python.png";

function Skills() {
  return (
    <>
      <section className="skills" id="skills">
        <h1 className="skills-header heading">
          My <span>Skills</span>
        </h1>
        <div className="skills-container">
          <div className="skills-item">
            <a href="https://react.dev/learn" target="_blank" rel="noreferrer">
              <img src={reactjsLogo} alt="react logo" />

              <h2>ReactJS</h2>
            </a>
          </div>
          <div className="skills-item">
            <a
              href="https://devdocs.io/javascript/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={jsLogo} alt="js logo" />
              <h2>JavaScript</h2>
            </a>
          </div>
          <div className="skills-item">
            <a
              href="https://www.python.org/doc/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pythonLogo} alt="Python logo" />
              <h2>Python</h2>
            </a>
          </div>
          <div className="skills-item">
            <a href="https://html.com/" target="_blank" rel="noreferrer">
              <img src={htmlLogo} alt="html logo" />
              <h2>HTML</h2>
            </a>
          </div>
          <div className="skills-item">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
            >
              <img src={cssLogo} alt="css logo" />
              <h2>CSS</h2>
            </a>
          </div>
          <div className="skills-item">
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={bootstrapLogo} alt="bootstrap logo" />
              <h2>Bootstrap</h2>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

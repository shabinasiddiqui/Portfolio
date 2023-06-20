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
            <a href="https://react.dev/learn" target="_blank">
              <img src={reactjsLogo} alt="" />

              <h2>ReactJS</h2>
            </a>
          </div>
          <div className="skills-item">
            <a href="https://devdocs.io/javascript/" target="_blank">
              <img src={jsLogo} alt="" />
              <h2>JavaScript</h2>
            </a>
          </div>
          <div className="skills-item">
            <a href="https://www.python.org/doc/" target="_blank">
              <img src={pythonLogo} alt="" />
              <h2>Python</h2>
            </a>
          </div>
          <div className="skills-item">
            <a href="https://html.com/" target="_blank">
              <img src={htmlLogo} alt="" />
              <h2>HTML</h2>
            </a>
          </div>
          <div className="skills-item">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
            >
              <img src={cssLogo} alt="" />
              <h2>CSS</h2>
            </a>
          </div>
          <div className="skills-item">
            <a href="https://getbootstrap.com/" target="_blank">
              <img src={bootstrapLogo} alt="" />
              <h2>Bootstrap</h2>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faSquareJs } from "@fortawesome/free-brands-svg-icons";
function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <h2 className="heading">
          <span>Projects</span>
        </h2>
        <div className="projects-container">
          <div className="projects-box">
            <FontAwesomeIcon icon={faSquareJs} className="projects-icon" />
            <h3>Cybereason SecOps</h3>
            <p>
              I have developed a ServiceNow Application for Cybereason, which
              primarily focuses on the SecOps module of ServiceNow. The
              Application was created using JavaScript, ServiceNow Business
              Rules, and other relevant technologies.This Application mainly
              focuses on Security Incident Response feature of ServiceNow
              Incidents.
            </p>
          </div>

          <div className="projects-box">
            {/* <FontAwesomeIcon icon={faBracketsCurly} className="projects-icon" /> */}
            <FontAwesomeIcon icon={faPython} className="projects-icon" />

            <h3>Tines Templates</h3>
            <p>
              I have created a range of Tines Templates for various platform
              APIs, incorporating features such as Event Scheduling and
              Grouping. These Templates serve as a foundation for automating
              tasks and processes. By leveraging these Templates, I have
              developed meaningful Workflows and Stories that enhance efficiency
              and productivity.
            </p>
          </div>

          <div className="projects-box">
            <FontAwesomeIcon icon={faPython} className="projects-icon" />
            <h3>Clinic Management</h3>
            <p>
              I collaborated with a team of two to conceptualize and develop a
              Real-time Patient record Monitoring website. We utilized a variety
              of technologies including HTML, CSS, JavaScript, Bootstrap, Flask,
              Python, and SqlAlchemy. The website provides a seamless User
              Interface for Monitoring and managing Patient records, ensuring
              efficient and accurate healthcare services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;

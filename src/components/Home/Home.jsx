import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import image from "../../assets/img/profile.png";

function Home() {
  const handleDownload = function () {
    fetch("Shabina-Siddiqui-Resume-7977629219.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Shabina-Siddiqui-Resume-7977629219.pdf";
        alink.click();
      });
    });
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Shabina Siddiqui</h1>
        <h3>
          And I'm a <span>Full Stack Developer</span>
        </h3>
        <p>
          I hail from the vibrant city of Mumbai, India. I graduated with an
          Computer Engineering degree in 2022 and gained valuable experience in
          cybersecurity during my one-year stint at a renowned company. Besides
          my expertise in cybersecurity, I have a keen interest in web
          development. In my spare time, I enjoy diving into the captivating
          world of books.
        </p>
        <div className="social-media">
          <a href="https://twitter.com/shabina2503" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/shabina-siddiqui/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/shabinasiddiqui" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/shabina___siddiqui/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <a href="#" className="btn" onClick={handleDownload}>
          Download Resume
        </a>
      </div>
      <div className="home-img">
        <img src={image} alt="" />
      </div>
    </section>
  );
}

export default Home;

import React from "react";
import "./Navbar.css";
import Signature from "../../assets/img/signature.png";

function Navbar() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Signature} alt="" className="signature-img" />
        </a>
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

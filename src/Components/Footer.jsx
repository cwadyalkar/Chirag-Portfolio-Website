import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Chirag Wadyalkar</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/_itzchirag_?igsh=M3I1N29kNGhyY3I2"
            className="footer__social-link"
            target="_blank" rel="noreferrer noopener"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/chirag-wadyalkar-b723b9220/"
            className="footer__social-link"
            target="_blank" rel="noreferrer noopener"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/cwadyalkar"
            className="footer__social-link"
            target="_blank" rel="noreferrer noopener"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://twitter.com/ChiragWadyalkar"
            className="footer__social-link"
            target="_blank" rel="noreferrer noopener"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        
        <span className="footer__copy">2024 Chirag Wadyalkar. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

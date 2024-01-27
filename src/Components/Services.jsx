import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Can Do</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Multi Page <br /> Website
            </h3>
          </div>  
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More <i className="uil uil-arrow-right si"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Multi Page Website Designer</h3>
              <p className="services__modal-description">
              As a passionate and detail-oriented Web Developer, I offer the following services:
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Bring your vision to life with fully functional multi-page websites
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  From concept to deployment, I handle the entire development process
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  ensuring a smooth and responsive website that aligns with your goals.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">
                  I create seamless navigation and visually appealing page structures that keep your audience engaged.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Web <br /> Design
            </h3>
          </div>
          <span className="services__button"  onClick={() => toggleTab(2)}>
            View More <i className="uil uil-arrow-right si"></i>
          </span>
          <div className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Website Designer</h3>
              <p className="services__modal-description">
              As a passionate and detail-oriented Website Designer, I offer the following services:
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Crafting visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript,Bootstrap, Tailwind CSS.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Ensuring websites look great and function seamlessly across various devices and screen sizes.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Familiarity with server-side technologies and the ability to integrate front-end components.
                  </p>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Freelance
            </h3>
          </div>
          <span className="services__button"  onClick={() => toggleTab(3)}>
            View More <i className="uil uil-arrow-right si"></i>
          </span>
          <div className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Freelancer</h3>
              <p className="services__modal-description">
              As a Freelancer, I offer the following services:
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  I specialize in creating responsive and user-friendly websites tailored to meet your business needs. I can bring your vision to life using the latest web development technologies.
                  </p>
                </li>
              
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  I offer robust back-end solutions to ensure the functionality and security of your website. From database management to server-side scripting, I use my technical skills to build the backbone of your digital presence.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

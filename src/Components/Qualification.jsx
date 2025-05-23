import React, { useState } from "react";
import "./Qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">
        My Qualification has been a journey of self-discovery and growth. My
        Education And Experience details are as follows.
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button-flex"
                : "qualification__button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button-flex"
                : "qualification__button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor of Technology - IT
                </h3>
                <span className="qualification__subtitle">
                  Priyadarshini Bhagwati College Of Engineering - Nagpur
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Higher Secondary Certificate
                </h3>
                <span className="qualification__subtitle">
                  I completed my class 12 high school education from Adarsh
                  Sankskar Vidyalaya & Jr College, Nagpur, where I studied
                  Science with Computer Science.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Seconday School Certificate
                </h3>
                <span className="qualification__subtitle">
                  I completed my class 10 education at Adarsh Sankskar
                  Vidyalaya, Nagpur
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Full Stack Developer 
                </h3>
                <span className="qualification__subtitle">
                  Bootcoding, Pvt Ltd. - Full Time
                </span>
                <span className="qualification__subtitle">
                  Engineered scalable and high-performance web applications,
                  enhancing user experience. Designed RESTful APIs and
                  Collaborated with cross-functional teams in an Agile
                  environment and conducted code reviews, reducing production
                  bugs by 25% and improving team productivity.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> </i>
                  May 2024 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Full Stack Developer Intern
                </h3>
                <span className="qualification__subtitle">
                  Bootcoding, Pvt Ltd. - Full Time{" "}
                </span>
                <span className="qualification__subtitle">
                  As a Full Stack Developer Intern at Bootcoding Pvt Ltd, I have
                  been fortunate to work on a diverse range of projects,
                  leveraging both front-end and back-end technologies to create
                  seamless and robust applications.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> </i>
                  Jan 2024 - May 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

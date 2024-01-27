import React from "react";
import "./Skills.css";
import Frontend from "./skills/Frontend";
import Backend from "./skills/Backend";
import Others from "./skills/Others";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Here are some of my skills on which I have been working on for the past 2 years.</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Others/>
      </div>
    </section>
  );
};


export default Skills;

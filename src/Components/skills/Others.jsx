import React from "react";

const otherSkills = [
  { name: "OOPS", level: "Intermediate" },
  { name: "Linux", level: "Intermediate" },
  { name: "DSA", level: "Intermediate" },
  { name: "Postman", level: "Intermediate" },
  { name: "Git", level: "Intermediate" },
  { name: "Github", level: "Intermediate" },
  { name: "Vs Code", level: "Intermediate" },
  { name: "DBMS", level: "Intermediate" },
];

const Others = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Others</h3>

      <div className="skills__box">
        {[0, 1].map((groupIndex) => (
          <div className="skills__group" key={groupIndex}>
            {otherSkills
              .slice(groupIndex * 4, groupIndex * 4 + 4)
              .map((skill) => (
                <div className="skills__data" key={skill.name}>
                  <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">{skill.name}</h3>
                    <span className="skills__level">{skill.level}</span>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;

import React from "react";

const backendSkills = [
  { name: "Node JS", level: "Intermediate" },
  { name: "Express JS", level: "Intermediate" },
  { name: "NestJS", level: "Basic" },
  { name: "Redis", level: "Basic" },
  { name: "REST API", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
];

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>

      <div className="skills__box">
        {[0, 1].map((groupIndex) => (
          <div className="skills__group" key={groupIndex}>
            {backendSkills
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

export default Backend;

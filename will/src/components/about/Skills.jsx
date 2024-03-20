import React from "react";
import "./About.css";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const Skills = () => {
  const skillsData = [
    { name: "Python", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "Django", value: 95 },
    { name: "Express", value: 90 },
    { name: "Databases", value: 88 },
    { name: "Networking", value: 85 },
    { name: "Data Analysis", value: 89 },
    { name: "Machine Learning", value: 90 },
  ];

  const COLOR = "#646cff";

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skill-graphs">
        <div className="graphs">
          {skillsData.map((skill, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
                <PieChart width={180} height={180}>
              <Pie
                data={[
                  { name: skill.name, value: skill.value },
                  { name: "", value: 100 - skill.value, fill: '#grey' },
                ]}
                cx={90}
                cy={90}
                innerRadius={70}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                startAngle={90}
                endAngle={450}
              >
                <Cell key={`cell-${index}`} fill={COLOR} />
              </Pie>
            </PieChart>
            <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

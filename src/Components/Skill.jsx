import React from "react";
import "./Skill.css";

const Skill = () => {
  const lang = [ "HTML" ,"CSS" ,"JavaScript" ,"PHP" ,"C" ,"C#" ,"Python" ,"Tailwind CSS" ,"Java" ,"MySQL" ,"React"]; 
  const design = ["Adobe Illustrator" ,"Adobe Photoshop" ,"Adobe XD" ,"Figma"];

  

  return (
    <div className="allskills">
        {/* <div className="maintagline">Toolbox</div> */}
    <div className="skill-container con1">
      <div className="skill-header">
        <h1 className="skill-title">Dev Tools</h1>
        <div className="skill-list">
          {lang.map((lang, index) => (
            <span className="skill-item" key={index}>
              {lang}
            </span>
          ))}
        </div>
      </div>
      <div className="skill-line">
       <hr></hr>
      </div>
    </div>

    <div className="skill-container con2">
      <div className="skill-header">
        <h1 className="skill-title">Design Tools</h1>
        <div className="skill-list">
          {design.map((design, index) => (
            <span className="skill-item" key={index}>
              {design}
            </span>
          ))}
        </div>
      </div>
      <div className="skill-line">
       <hr></hr>
      </div>
    </div>

  
    </div>
  );
};

export default Skill;

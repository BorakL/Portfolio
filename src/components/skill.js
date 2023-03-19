import React from "react";

const Skill = ({skillLevel, skillName})=>{ 

    return(
          <div className="skill">
            <div className="skillName">{skillName}</div>
            <div className="skillBar"> 
                {new Array(Math.round(skillLevel*16/100)).fill(null).map(e => <span className="skillLevel"> </span> )}
            </div> 
          </div> 
    )
}

export default Skill;
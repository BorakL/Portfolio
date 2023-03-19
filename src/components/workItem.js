import React from "react";

const WorkItem = ({link,image,title,description,technologies})=>{ 
    return(
    <div className='workItem'>
        <div className='workImg'>
            <a href={link}>
                <img src={image}/>
            </a>
        </div>
        <div className='workDescription'>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='technologies'>
                {technologies.map(t=><span>{t}</span>)}
            </div>
        </div>
    </div> 
)
}

export default WorkItem;
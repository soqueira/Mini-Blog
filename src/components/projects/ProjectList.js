import React from "react";
import Summary from "./ProjectSummary";

export default ({projects}) => {
  return (
    <div className="project-list section">
     {projects && projects.map(project => {
       return (
         <Summary project={project} key={project.id} />
       )
     })}
    </div>
  );
};

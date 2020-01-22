import React from "react";
import { Link } from "react-router-dom";
import Summary from "./ProjectSummary";

export default ({projects}) => {
  return (
    <div className="project-list section">
     {projects && projects.map(project => {
       return (
         <Link to={`/project/${project.id}`}>
         <Summary project={project} key={project.id} />
         </Link>
       )
     })}
    </div>
  );
};

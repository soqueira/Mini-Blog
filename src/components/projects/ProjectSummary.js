import React from "react";

export default ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by {project.authorName}</p>
        <p className="grey-text">data</p>
      </div>
    </div>
  );
};

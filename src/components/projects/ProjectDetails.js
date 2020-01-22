import React from "react";

export default props => {
  const { id } = props.match.params;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            alias eaque non vero atque reprehenderit quo beatae fugiat deleniti
            nihil quis, earum, magni iure temporibus quidem explicabo voluptatem
            error accusantium?
          </p>
        </div>
        <div className="card-action lighten-4 grey-text">
          <div>Posted by Vitor</div>
          <div>date</div>
        </div>
      </div>
    </div>
  );
};

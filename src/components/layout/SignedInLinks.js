import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/createproject">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn waves-effect waves-light btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

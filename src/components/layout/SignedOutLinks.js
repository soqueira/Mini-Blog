import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="/">Log n</NavLink>
      </li>
    </ul>
  );
};

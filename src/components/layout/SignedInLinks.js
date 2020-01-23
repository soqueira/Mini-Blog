import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/createproject">New Project</NavLink>
      </li>
      <li onClick={() => props.signOut()}>
        <NavLink to="/">LogOut</NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="btn waves-effect waves-light btn-floating pink lighten-1"
        >
          NN
        </NavLink>
      </li>
    </ul>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);

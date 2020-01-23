import React from "react";

import Notifications from "./Notification";
import ProjectList from "../projects/ProjectList";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class DashBoard extends React.Component {
  render() {
    const { projects, auth } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            {auth.uid ? <Notifications /> : null}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};
export default compose(
  firestoreConnect(["projects"]),
  connect(mapStateToProps)
)(DashBoard);

import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

class SignUp extends React.Component {
  state = {};
  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h3 className="grey-text text-darken-3 center">Sign Up</h3>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" onChange={this.handleChange} />
            </div>
            <div className="row">
              <div className="input-field col s6">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="input-field col s6">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div className="inputField buttonFieldCenter">
            <button className="btn waves-effect waves-light lighten-1 z-depth-0">
              Sign Up
            </button>
          </div>
          <div className="center red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

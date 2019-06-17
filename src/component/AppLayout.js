import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Login from "../containers/auth/Login";
import Register from "../containers/auth/Register";
import Home from "../containers/Home";
import NavBar from "./NavBar";
import { authUser } from "../store/actions/AuthActions";

import PrivateRoute from "../component/PrivateRoute";
// import SinglePageMovie from "../component/movie-components/SinglePageMovie";
import SinglePageMovie from "../component/movie-components/SinglePageMovie";
class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <PrivateRoute
          exact
          path="/home/"
          user={this.props.user}
          component={Home}
        />
        <Route exact path="/" component={NavBar} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute
          exact
          path="/movie/:id"
          user={this.props.user}
          component={SinglePageMovie}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authUser
  };
};

const mapDispatchToProps = () => {
  return {
    authUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppLayout)
);

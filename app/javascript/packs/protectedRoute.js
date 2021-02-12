import React from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = this.props.currentUser;
    return isAuthenticated ? (
      <Component store={this.props.store} />
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );
  }
}

export default ProtectedRoute;
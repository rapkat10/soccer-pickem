import React from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const store = this.props.store;
    const currentUser = store.getState().entities.user[Object.keys(store.getState().entities.user)[0]];
    const isAuthenticated = currentUser;
    return isAuthenticated ? (
      <Component store={this.props.store} />
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );
  }
}

export default ProtectedRoute;
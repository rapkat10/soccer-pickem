import React from "react";
import ReactDOM from "react-dom";
import configureStore from "../store/store";
import ProtectedRoute from "./protectedRoute";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import DashboardContainer from "../component/dashboard/dashboard_container";
import Homepage from "../component/home/homepage";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        user: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const currentUserObject = store.getState().entities.user;
  const currentUser = currentUserObject[Object.keys(currentUserObject)[0]];
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Homepage} store={store} />
        <ProtectedRoute
          exact={true}
          path="/dashboard"
          component={DashboardContainer}
          currentUser={currentUser}
          store={store}
        />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );
});
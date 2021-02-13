import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import ProtectedRoute from "../util/protectedRoute";
import DashboardContainer from "./dashboard/dashboard_container";
import Homepage from "./home/homepage";
import MatchesContainer from "./matches/matches_container";
import PlayedMatchesContainer from "./matches/played_matches_container";

const App = ({ store }) => (
  <div className="app-div">
    <Switch>
      <ProtectedRoute
        exact={true}
        path="/dashboard"
        component={DashboardContainer}
        store={store}
      />
      <ProtectedRoute
        exact={true}
        path="/clubworldcup"
        component={MatchesContainer}
        store={store}
      />
      <ProtectedRoute
        exact={true}
        path="/playedmatches"
        component={PlayedMatchesContainer}
        store={store}
      />
      <Route path="/" component={Homepage} />
    </Switch>
  </div>
);

export default App;
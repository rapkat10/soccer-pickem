import React from "react";
import { Link } from "react-router-dom";
import TeamsContainer from "../teams/teams_container";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="dashboard-div">
          <div className="d-flex justify-content-center">
            <Link to="/" className='btn btn-sm btn-primary m-1'>Homepage</Link>
            <Link to="/clubworldcup" className='btn btn-sm btn-primary m-1'>Club World Cup</Link>
          </div>
          <TeamsContainer />
        </div>
      </>
    );
  }
}

export default Dashboard;
import React from "react";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("calling get teams")
    this.props.getTeams();
  }

  render() {
    const { currentUser, teams } = this.props;
    const firstName = currentUser.first_name;
    if (teams.length === 0) return null; 
    return (
      <>
        <Link to="/">Homepage</Link>
        <div className="dashboard-div clearfix">
          <h5>Hello From Dashboard</h5>
          <h5>{firstName}</h5>
          <h5>{teams[0].name}</h5>
        </div>
      </>
    );
  }
}

export default Dashboard;
import React from "react";
import { Link } from "react-router-dom";

class Teams extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.teams.length === 0) this.props.getTeams();
  }

  render() {
    const { teams } = this.props;
    if (teams.length === 0) return null; 
    const teamsList = teams.map((tm, index) => {
      return <tr key={tm.id} >
        <td>{index + 1}</td><td>{tm.name}</td><td>{tm.city}</td><td>{tm.country}</td><td>{tm.games_played}</td>
        <td>{tm.wins_count}</td><td>{tm.losses_count}</td><td>{tm.draws_count}</td><td>{tm.points}</td>
      </tr>
    });
    return (
      <>
        <div className="d-flex flex-column justify-content-center">
          <h4>Teams Standings</h4>
          <table className="table table-bordered table-striped mt-1">
            <thead><tr><th>P</th><th>Team</th><th>City</th><th>Country</th><th>GP</th><th>W</th><th>L</th><th>D</th><th>Pts</th></tr></thead>
            <tbody>{teamsList}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Teams;
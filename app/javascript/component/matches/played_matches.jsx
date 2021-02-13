import React from "react";
import { Link } from "react-router-dom";

class PlayedMatches extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPlayedMatches('played_matches', this.props.currentUser.id);
  }

  render() {
    const { matches } = this.props;
    if (matches.length === 0) {
      return (
        <>
          <div className="matches-div">
            <div className="d-flex justify-content-center">
              <Link to="/" className="btn btn-sm btn-primary m-1">Homepage</Link>
              <Link to="/dashboard" className="btn btn-sm btn-primary m-1">Dashboard</Link>
              <Link to="/clubworldcup" className='btn btn-sm btn-primary m-1'>Club World Cup</Link>
            </div>
            <div className="d-flex flex-column border border-info rounded">
              <div className="d-flex justify-content-center">
                <h5>You don't have any played matches yet!</h5>
              </div>
              {matchesList}
            </div>
          </div>
        </>
      );
    }
    if (!matches[0].played) return null;
    
    let correctPicks = 0;
    let drawPicks = 0;
    let wrongPicks = 0;
    const matchesList = matches.map((match) => {
      let homeBackground = 'secondary'
      let awayBackground = 'secondary'
      if (match.previous_picks.length > 0) {
        if (match.previous_picks[0].updated_by_user) {
          const score = match.score.split('-')
          if (match.previous_picks[0].team_id === match.home_team.id) {
            homeBackground = 'info';
            if (score[0] > score[1]) {
              correctPicks += 1
            } else if (score[0] < score[1]) {
              wrongPicks += 1
            } else {
              drawPicks += 1
            }
          } else {
            awayBackground = 'info';
            if (score[0] < score[1]) {
              correctPicks += 1
            } else if (score[0] > score[1]) {
              wrongPicks += 1
            } else {
              drawPicks += 1
            }
          }
        }
      } else { 
        if (match.picks[0].updated_by_user) {
          const score = match.score.split('-')
          if (match.picks[0].team_id === match.home_team.id) {
            homeBackground = 'info';
            if (score[0] > score[1]) {
              correctPicks += 1
            } else if (score[0] < score[1]) {
              wrongPicks += 1
            } else {
              drawPicks += 1
            }
          } else {
            awayBackground = 'info';
            if (score[0] < score[1]) {
              correctPicks += 1
            } else if (score[0] > score[1]) {
              wrongPicks += 1
            } else {
              drawPicks += 1
            }
          }
        }
      }
      return (
        <div key={match.id}className="d-flex justify-content-between p-2 m-2">
          <div className="" style={{ width: "40%" }}>
            <button className={`btn btn-sm btn-${homeBackground}`}>
              {match.home_team.name}
            </button>
          </div>
          <div>{match.score}</div>
          <div className="text-right" style={{ width: "40%" }}>
            <button className={`btn btn-sm btn-${awayBackground}`}>
              {match.away_team.name}
            </button>
          </div>
        </div>
      );
    });
    return (
      <>
        <div className="matches-div">
          <div className="d-flex justify-content-center">
            <Link to="/" className="btn btn-sm btn-primary m-1">Homepage</Link>
            <Link to="/dashboard" className="btn btn-sm btn-primary m-1">Dashboard</Link>
            <Link to="/clubworldcup" className='btn btn-sm btn-primary m-1'>Club World Cup</Link>
          </div>
          <div className="d-flex justify-content-center">
            <div className="m-1">Total Picks: {matches.length}</div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="m-1">Correct Picks: {correctPicks}</div>
            <div className="m-1">Draw Picks: {drawPicks}</div>
            <div className="m-1">Wrong Picks: {wrongPicks}</div>
          </div>
          <div className="d-flex flex-column border border-info rounded">
            <div className="d-flex justify-content-center">
              <h5>These are the previous match results.</h5>
            </div>
            {matchesList}
          </div>
        </div>
      </>
    );
  }
}

export default PlayedMatches;
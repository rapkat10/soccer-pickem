import React from "react";
import { Link } from "react-router-dom";

class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.playMatcheses = this.playMatches.bind(this);
    this.reset = this.reset.bind(this);
    this.updatePick = this.updatePick.bind(this);
    this.state = { reset: false }
  }

  updatePick(pickId, teamId, matchId) {
    this.props.updatePick(pickId, teamId, matchId)
      .then(this.props.getMatches());
  }

  playMatches() {
    this.props.playMatches();
    this.setState({ reset: true });
  }

  reset() {
    this.props.createNewTournament(this.props.currentUser.id);
    this.setState({reset: false})
  }

  componentDidMount() {
    if (this.props.matches.length === 0) {
      this.props.createNewTournament(this.props.currentUser.id);
    } else {
      if (this.props.matches[0].played) {
        this.props.createNewTournament(this.props.currentUser.id);
      }
    }
  }

  render() {
    const { matches, currentUser } = this.props;
    if (matches.length === 0) {
      return null;
    } else {
      if (matches[0].played && !matches[0].picks.length > 0) return null;
    }
    
    let correctPicks = 0;
    let drawPicks = 0;
    let wrongPicks = 0;
    const matchesList = matches.map((match) => {
      const homeTeamArgs = [match.picks[0].id, match.home_team.id, match.id];
      const awayTeamArgs = [match.picks[0].id, match.away_team.id, match.id];
      let homeBackground = 'secondary'
      let awayBackground = 'secondary'
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
      return (
        <div key={match.id}className="d-flex justify-content-between p-2 m-2">
          <div className="" style={{ width: "40%" }}>
            <button className={`btn btn-sm btn-${homeBackground}`} onClick={() => this.updatePick(...homeTeamArgs)}>
              {match.home_team.name}
            </button>
          </div>
          <div>{match.score}</div>
          <div className="text-right" style={{ width: "40%" }}>
            <button className={`btn btn-sm btn-${awayBackground}`} onClick={() => this.updatePick(...awayTeamArgs)}>
              {match.away_team.name}
            </button>
          </div>
        </div>
      );
    });

    let resetBtn;
    let submitPicksBtn;
    let pickResults;
    let message;
    if (this.state.reset) {
      resetBtn = <button className="btn btn-sm btn-danger m-1" onClick={() => this.reset()}>Reset</button>
      pickResults = <>
        <div className="d-flex justify-content-center">
          <div className="m-1">Total Picks: {matches.length}</div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="m-1">Percentage of Correct Picks: {(100 * correctPicks) / matches.length}%</div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="m-1">Correct Picks: {correctPicks}</div>
          <div className="m-1">Draw Picks: {drawPicks}</div>
          <div className="m-1">Wrong Picks: {wrongPicks}</div>
        </div>
      </>
    } else {
      submitPicksBtn = <button className="btn btn-sm btn-success m-1" onClick={() => this.playMatches()}>Submit Picks</button>
      message =  <>
        <div className="d-flex justify-content-center">
          <h5>
            Please pick your teams for each match and Submit your picks on
            the bottom of the page to start the matches.
          </h5>
        </div>
      </>
    }

    return (
      <>
        <div className="matches-div">
          <div className="d-flex justify-content-center">
            <Link to="/" className="btn btn-sm btn-primary m-1">Homepage</Link>
            <Link to="/dashboard" className="btn btn-sm btn-primary m-1">Dashboard</Link>
            <Link to="/playedmatches" className="btn btn-sm btn-primary m-1">Previous Match results</Link>
          </div>
          {pickResults}
          <div className="d-flex flex-column border border-info rounded">
            {message}
            {matchesList}
          </div>
          <div className="d-flex justify-content-center">
            {submitPicksBtn}
            {resetBtn}
          </div>
        </div>
      </>
    );
  }
}

export default Matches;
import { connect } from "react-redux";
import Matches from "./matches";
import { getMatches, getMatch, createNewTournament, playMatches } from "../../actions/match_actions";
import { createPick, updatePick } from "../../actions/pick_actions";
import { getUser } from "../../actions/user_actions";
import { getTeams } from "../../actions/team_actions";

const mapStateToProps = (state) => {
  const matches = Object.values(state.entities.matches);
  const currentUser = Object.values(state.entities.user)[0];
  const teams = Object.values(state.entities.teams);
  return { matches, currentUser, teams };
};

const mapDispatchToProps = (dispatch) => ({
  getMatches: () => dispatch(getMatches()),
  getMatch: (matchId) => dispatch(getMatch(matchId)),
  createNewTournament: (userId) => dispatch(createNewTournament(userId)),
  playMatches: () => dispatch(playMatches()),
  createPick: (teamId, matchId, userId) => dispatch(createPick(teamId, matchId, userId)),
  updatePick: (pickId, teamId, matchId) => dispatch(updatePick(pickId, teamId, matchId)),
  getUser: (userId) => dispatch(getUser(userId)),
  getTeams: () => dispatch(getTeams())
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
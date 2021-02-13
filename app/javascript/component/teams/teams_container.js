import { connect } from "react-redux";
import Teams from "./teams";
import { getTeams, getTeam } from "../../actions/team_actions";

const mapStateToProps = (state) => {
  const teams = Object.values(state.entities.teams);
  teams.sort((a, b) => (a.points < b.points) ? 1 : (a.points === b.points) ? ((a.wins_count < b.wins_count) ? 1 : -1) : -1 )
  return { teams };
};

const mapDispatchToProps = (dispatch) => ({
  getTeams: () => dispatch(getTeams()),
  getTeam: (teamId) => dispatch(getTeam(teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { getTeams, getTeam } from "../../actions/team_actions";

const mapStateToProps = (state) => {
  const currentUserObject = state.entities.user;
  const currentUser = currentUserObject[Object.keys(currentUserObject)[0]];
  const teams = Object.values(state.entities.teams);
  return { currentUser, teams };
};

const mapDispatchToProps = (dispatch) => ({
  getTeams: () => dispatch(getTeams())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
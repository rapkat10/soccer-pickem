import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { getTeams } from "../../actions/team_actions";

const mapStateToProps = (state) => {
  return { state }
};

const mapDispatchToProps = (dispatch) => ({
  getTeams: () => dispatch(getTeams())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
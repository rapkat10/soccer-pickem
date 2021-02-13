import { connect } from "react-redux";
import PlayedMatches from "./played_matches";
import { getPlayedMatches } from "../../actions/match_actions";

const mapStateToProps = (state) => {
  const matches = Object.values(state.entities.matches);
  const currentUser = Object.values(state.entities.user)[0];
  return { matches, currentUser };
};

const mapDispatchToProps = (dispatch) => ({
  getPlayedMatches: (played_matches, userId) => dispatch(getPlayedMatches(played_matches, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayedMatches);
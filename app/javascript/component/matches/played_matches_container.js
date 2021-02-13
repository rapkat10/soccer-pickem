import { connect } from "react-redux";
import PlayedMatches from "./played_matches";
import { getPlayedMatches } from "../../actions/match_actions";

const mapStateToProps = (state) => {
  const matches = Object.values(state.entities.matches);
  return { matches };
};

const mapDispatchToProps = (dispatch) => ({
  getPlayedMatches: (played_matches) => dispatch(getPlayedMatches(played_matches))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayedMatches);
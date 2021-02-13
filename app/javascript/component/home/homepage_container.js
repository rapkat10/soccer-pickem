import { connect } from "react-redux";
import Homepage from "./homepage";

const mapStateToProps = (state) => {
  const currentUser = Object.values(state.entities.user)[0];
  return { currentUser };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
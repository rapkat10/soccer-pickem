import { RECEIVE_MATCHES, RECEIVE_MATCH } from "../actions/match_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MATCHES:
      return action.matches;
    case RECEIVE_MATCH:
      return Object.assign({}, state, {
        [action.match.id]: action.match,
      });
    default:
      return state;
  }
};
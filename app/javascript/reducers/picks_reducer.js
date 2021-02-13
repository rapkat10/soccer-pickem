import { RECEIVE_PICKS, RECEIVE_PICK } from "../actions/pick_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PICKS:
      return action.picks;
    case RECEIVE_PICK:
      return Object.assign({}, state, {
        [action.pick.id]: action.pick,
      });
    default:
      return state;
  }
};
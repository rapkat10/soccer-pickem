import { RECEIVE_TEAMS, RECEIVE_TEAM } from "../actions/team_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAMS:
      return Object.assign({}, state, action.teams);
    case RECEIVE_TEAM:
      return Object.assign({}, state, {
        [action.team.id]: action.team,
      });
    default:
      return state;
  }
};
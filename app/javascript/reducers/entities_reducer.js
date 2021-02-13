import { combineReducers } from "redux";
import teamsReducer from "./teams_reducer";
import matchesReducer from "./matches_reducer";
import userReducer from "./user_reducer";
import usersReducer from "./users_reducer";

export default combineReducers({
    teams: teamsReducer,
    matches: matchesReducer,
    user: userReducer,
    users: usersReducer
});
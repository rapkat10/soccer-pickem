import { combineReducers } from "redux";
import teamsReducer from "./teams_reducer";
import userReducer from "./user_reducer"

export default combineReducers({
    teams: teamsReducer,
    user: userReducer
});
import * as TeamApiUtil from "../util/teams_api_util";
export const RECEIVE_TEAMS = "RECEIVE_TEAMS";
export const RECEIVE_TEAM = "RECEIVE_TEAM";

const receiveTeams = (teams) => {
  return {
    type: RECEIVE_TEAMS,
    teams,
  };
};

const receiveTeam = (team) => {
  return {
    type: RECEIVE_TEAM,
    team,
  };
};

export const getTeams = () => {
  return (dispatch) => {
    return TeamApiUtil.getTeams().then((teams) =>
      dispatch(receiveTeams(teams))
    );
  };
};

export const getTeam = (teamId) => {
  return (dispatch) => {
    return TeamApiUtil.getTeam(teamId).then((team) =>
      dispatch(receiveTeam(team))
    );
  };
};

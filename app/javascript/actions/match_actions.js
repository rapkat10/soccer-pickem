import * as MatchApiUtil from "../util/matches_api_util";
export const RECEIVE_MATCHES = "RECEIVE_MATCHES";
export const RECEIVE_MATCH = "RECEIVE_MATCH";

const receiveMatches = (matches) => {
  return {
    type: RECEIVE_MATCHES,
    matches,
  };
};

const receiveMatch = (match) => {
  return {
    type: RECEIVE_MATCH,
    match,
  };
};

export const getMatches = () => {
  return (dispatch) => {
    return MatchApiUtil.getMatches().then((matches) =>
      dispatch(receiveMatches(matches))
    );
  };
};

export const getPlayedMatches = (played_matches) => {
  return (dispatch) => {
    return MatchApiUtil.getPlayedMatches(played_matches).then((matches) =>
      dispatch(receiveMatches(matches))
    );
  };
};

export const getMatch = (matchId) => {
  return (dispatch) => {
    return MatchApiUtil.getMatch(matchId).then((match) =>
      dispatch(receiveMatch(match))
    );
  };
};

export const createNewTournament = (userId) => {
  return (dispatch) => {
    return MatchApiUtil.createNewTournament(userId).then((matches) =>
      dispatch(receiveMatches(matches))
    );
  };
};

export const playMatches = () => {
  return (dispatch) => {
    return MatchApiUtil.playMatches().then((matches) =>
      dispatch(receiveMatches(matches))
    );
  };
};
import * as PickApiUtil from "../util/picks_api_util";
export const RECEIVE_PICKS = "RECEIVE_PICKS";
export const RECEIVE_PICK = "RECEIVE_PICK";

const receivePicks = (picks) => {
  return {
    type: RECEIVE_PICKS,
    picks,
  };
};

const receivePick = (pick) => {
  return {
    type: RECEIVE_PICK,
    pick,
  };
};

export const getPicks = () => {
  return (dispatch) => {
    return PickApiUtil.getPicks().then((picks) =>
      dispatch(receivePicks(picks))
    );
  };
};

export const getPick = (pickId) => {
  return (dispatch) => {
    return PickApiUtil.getPick(pickId).then((pick) =>
      dispatch(receivePick(pick))
    );
  };
};

export const createPick = (teamId, matchId, userId) => {
  return (dispatch) => {
    return PickApiUtil.createPick(teamId, matchId, userId).then((picks) =>
      dispatch(receivePicks(picks))
    );
  };
};

export const updatePick = (pickId, teamId, matchId) => {
  return (dispatch) => {
    return PickApiUtil.updatePick(pickId, teamId, matchId).then((picks) =>
      dispatch(receivePicks(picks))
    );
  };
};
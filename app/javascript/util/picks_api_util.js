import $ from "jquery";

export const getPicks = () => {
  return $.ajax({
    url: "api/picks",
    method: "GET",
  });
};

export const getPick = (pickId) => {
  return $.ajax({
    url: `api/picks/${pickId}`,
    method: "GET",
  });
};

export const createPick = (teamId, matchId, userId) => {
  return $.ajax({
    url: `api/picks`,
    method: "POST",
    data: {
      teamId,
      matchId,
      userId
    }
  });
};

export const updatePick = (pickId, teamId, matchId) => {
  return $.ajax({
    url: `api/picks/${pickId}`,
    method: "PATCH",
    data: {
      pickId,
      teamId,
      matchId
    }
  });
};
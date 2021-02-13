import $ from "jquery";

export const getMatches = () => {
  return $.ajax({
    url: "api/matches",
    method: "GET",
  });
};

export const getPlayedMatches = (played_matches) => {
  return $.ajax({
    url: "api/matches",
    method: "GET",
    data: {played_matches}
  });
};

export const getMatch = (matchId) => {
  return $.ajax({
    url: `api/matches/${matchId}`,
    method: "GET",
  });
};

export const createNewTournament = (userId) => {
  return $.ajax({
    url: `api/matches/create_new_tournament`,
    method: "GET",
    data: {
      userId
    }
  });
};

export const playMatches = () => {
  return $.ajax({
    url: `/api/matches/play_matches`,
    method: "GET",
  });
};
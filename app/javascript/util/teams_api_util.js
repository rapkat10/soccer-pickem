import $ from 'jquery'; 

export const getTeams = () => {
    return $.ajax({
        url: 'api/teams',
        method: 'GET'
    });
};

export const getTeam = (teamId) => {
    return $.ajax({
        url: `api/teams/${teamId}`,
        method: 'GET'
    });
};
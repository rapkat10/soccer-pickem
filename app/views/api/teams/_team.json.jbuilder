json.extract! team, :id, :name, :city, :country, :games_played, :points, :losses_count, :wins_count, :draws_count
json.home_games team.home_games
json.away_games team.away_games
json.picks team.picks.where(active: true)
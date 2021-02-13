json.extract! match, :id, :home_team_id, :away_team_id, :score, :played
json.home_team match.home_team
json.away_team match.away_team
json.picks match.picks.where(active: true)
json.previous_picks match.picks.where(active: false)
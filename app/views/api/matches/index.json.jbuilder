@matches.each do |match|
  json.set! match.id do
    json.partial! 'api/matches/match', match: match
  end
end
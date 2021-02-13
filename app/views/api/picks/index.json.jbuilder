@picks.each do |pick|
  json.set! pick.id do
    json.partial! 'api/picks/pick', pick: @pick
  end
end
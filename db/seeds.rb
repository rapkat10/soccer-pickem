# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Match.all.destroy_all
Team.all.delete_all
[
  ["Real Madrid C.F.", "Madrid", "Spain"], 
  ["Chelsea F.C.", "Chelsea", "England"], 
  ["Liverpool F.C.", "Liverpool", "England"], 
  ["Juventus F.C.", "Turin", "Italy"], 
  ["Seattle Sounders FC", "Seattle", "USA"],
  ["FC Bayern Munich", "Munich", "Germany"], 
  ["Manchester United F.C.", "Manchester", "England"], 
  ["Atletico Madrid", "Madrid", "Spain"], 
  ["LA Galaxy", "Los Angelas", "USA"],
  ["Paris Saint-Germain", "Paris", "France"],
  ["Besiktas J.K.", "Istanbul", "Turkey"],
  ["Arsenal F.C.", "London", "England"],
  ["FC Barcelona", "Barcelona", "Spain"],
  ["Real Salt Lake", "Salt Lake City", "USA"],
  ["Los Angelas FC", "Los Angelas", "USA"],
  ["Fenerbahce S.K.", "Istanbul", "Turkey"],
].each do |team_arr|
  name = team_arr[0]
  city = team_arr[1]
  country = team_arr[2]
  Team.create(
    name: name,
    city: city,
    country: country
  )
end
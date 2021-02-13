class Team < ApplicationRecord

  has_many :home_games,
    foreign_key: :home_team_id,
    class_name: :Match

  has_many :away_games,
    foreign_key: :away_team_id,
    class_name: :Match

  has_many :picks

end
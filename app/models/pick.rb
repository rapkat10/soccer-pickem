class Pick < ApplicationRecord

  belongs_to :user
  belongs_to :team
  belongs_to :match

end

json.extract! user, :id, :email, :first_name, :last_name, :points
json.picks user.picks.where(active: true)
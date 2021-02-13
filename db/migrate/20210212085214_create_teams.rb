class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.string :city
      t.string :country
      t.integer :games_played, default: 0
      t.integer :points, default: 0
      t.integer :losses_count, default: 0
      t.integer :wins_count, default: 0
      t.integer :draws_count, default: 0

      t.timestamps
    end
  end
end

class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer :home_team_id, null: false
      t.integer :away_team_id, null: false
      t.string :score
      t.boolean :played, default: false

      t.timestamps
    end
    add_index :matches, [:home_team_id, :away_team_id]
  end
end

class CreatePicks < ActiveRecord::Migration[5.2]
  def change
    create_table :picks do |t|
      t.references :user, foreign_key: true, index: true, null: false
      t.references :team, foreign_key: true, index: true, null: false
      t.references :match, foreign_key: true, index: true, null: false
      t.boolean :active, default: true
      t.boolean :updated_by_user, default: false

      t.timestamps
    end
  end
end

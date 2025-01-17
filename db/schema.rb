# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_13_021227) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "matches", force: :cascade do |t|
    t.integer "home_team_id", null: false
    t.integer "away_team_id", null: false
    t.string "score"
    t.boolean "played", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["home_team_id", "away_team_id"], name: "index_matches_on_home_team_id_and_away_team_id"
  end

  create_table "picks", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "team_id", null: false
    t.bigint "match_id", null: false
    t.boolean "active", default: true
    t.boolean "updated_by_user", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["match_id"], name: "index_picks_on_match_id"
    t.index ["team_id"], name: "index_picks_on_team_id"
    t.index ["user_id"], name: "index_picks_on_user_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name", null: false
    t.string "city"
    t.string "country"
    t.integer "games_played", default: 0
    t.integer "points", default: 0
    t.integer "losses_count", default: 0
    t.integer "wins_count", default: 0
    t.integer "draws_count", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.integer "points", default: 0
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "picks", "matches"
  add_foreign_key "picks", "teams"
  add_foreign_key "picks", "users"
end

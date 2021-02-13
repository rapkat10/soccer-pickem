class Api::MatchesController < ApplicationController

  def index
    Match.last(Team.all.size / 2).each do |match|
      if match.played
        match.picks.where(active: true).each do |pick|
          pick.update(active: false)
        end
      end
    end
    if params[:played_matches]
      user = User.find(params[:userId])
      pick_ids = user.picks.where(active: false).pluck(:id)
      match_ids = []
      Match.where(played: true).each do |match|
        if match.picks.pluck(:id).any? { |pick_id| pick_ids.include?(pick_id) }
          match_ids.push(match.id)
        end
      end
      @matches = Match.where(id: match_ids)
    else
      @matches = Match.last(Team.all.size / 2)
    end
    render 'api/matches/index'
  end

  def show
    @match = Match.find(params[:id])
    render 'api/matches/show'
  end

  def create_new_tournament
    teams = Team.all.shuffle.pluck(:id)
    if Match.all.present? && Match.last.played == false && Match.last.picks.last.user_id == params[:userId].to_i
      @matches = Match.last(teams.size / 2)
      render 'api/matches/index'
    else
      Match.last(teams.size / 2).each do |match|
        match.destroy if !match.played
      end
      home_team, away_team = teams.each_slice( (teams.size/2.0).round ).to_a
      home_team.each_with_index do |home_team_id, idx|
        match = Match.create(
          home_team_id: home_team_id,
          away_team_id: away_team[idx],
          score: "0-0"
        )
        Pick.create(match_id: match.id, user_id: params[:userId], team_id: home_team_id)
      end
      @matches = Match.last(teams.size / 2)
      render 'api/matches/index'
    end
  end

  def play_matches
    Match.last(Team.all.size / 2).each do |match|
      home_team_score, away_team_score = [0, 1, 2, 3].sample, [0, 1, 2, 3].sample
      @home_team, @away_team = match.home_team, match.away_team
      if home_team_score == away_team_score
        teams_draw
      else
        home_team_score > away_team_score ? home_team_won : away_team_won        
      end
      match.update(score: "#{home_team_score}-#{away_team_score}", played: true)
    end
    @matches = Match.all.reload.where(played: true).last(Team.all.size / 2)
    render 'api/matches/index'
  end

  private

  def home_team_won
    @home_team.update(
      points: @home_team.points + 3, 
      games_played: @home_team.games_played + 1,
      wins_count: @home_team.wins_count + 1,
    )
    @away_team.update(
      games_played: @away_team.games_played + 1,
      losses_count: @away_team.losses_count + 1
    )
  end

  def away_team_won
    @away_team.update(
      points: @away_team.points + 3, 
      games_played: @away_team.games_played + 1,
      wins_count: @away_team.wins_count + 1,
    )
    @home_team.update(
      games_played: @home_team.games_played + 1,
      losses_count: @home_team.losses_count + 1
    )
  end

  def teams_draw
    @away_team.update( 
      points: @away_team.points + 1,
      games_played: @away_team.games_played + 1,
      draws_count: @away_team.draws_count + 1,
    )
    @home_team.update(
      points: @home_team.points + 1,
      games_played: @home_team.games_played + 1,
      draws_count: @home_team.draws_count + 1
    )
  end

end
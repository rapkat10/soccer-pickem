class Api::PicksController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @picks = current_user.picks.where(active: true)
    render 'api/picks/index'
  end

  def show
    @pick = current_user.picks.find(params[:id])
    render 'api/picks/show'
  end

  def create
    @pick = Pick.new(team_id: params[:teamId], match_id: params[:matchId], user_id: params[:userId])
    if @pick.save
      render 'api/picks/show'
    else 
      render json: @pick.errors.full_messages, status: 422
    end
  end

  def update
    @pick = Pick.find(params[:pickId])
    if @pick.update(team_id: params[:teamId], match_id: params[:matchId], updated_by_user: true)
      render 'api/picks/show'
    else 
      render json: @pick.errors.full_messages, status: 422
    end
  end
end
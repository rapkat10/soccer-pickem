class Api::TeamsController < ApplicationController

  def index
    @teams = Team.all
    render 'api/teams/index'
  end

  def show
    @team = Team.find(params[:id])
    render 'api/teams/show'
  end

end
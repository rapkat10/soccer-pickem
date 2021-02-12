class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render 'api/users/index'
    end

    def show
        @user = User.find(params[:id])
        render 'api/users/show'
    end

end
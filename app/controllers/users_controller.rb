class UsersController < ApplicationController

    #reminder refactor this later

    def index 
        users = User.all.with_attached_avatar
        render json: users
    end

    def show
        user = @current_user
        if user
            render json: user
        else
            render json: {error: "Please sign in"}, status: unauthorized
        end
    end

    

end

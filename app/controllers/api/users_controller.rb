class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    if logged_in?
      render :show
    else
      render json: ["You can't view another user's page"], status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end

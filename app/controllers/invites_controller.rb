class InvitesController < ApplicationController
  before_filter :load_user

  def edit
  end

  def update
    if @user.update_attributes(invite_params)
      flash.now.notice = "You have successfully joined the admin team!"
      redirect_to admin_projects_path
    else
      flash.now.alert = "Please check your entries and try again."
      render :edit
    end
  end

  private

  # @private
  def load_user
    @user = User.where(password_reset_token: params[:token]).first
    raise ActiveRecord::RecordNotFound if @user.nil?
  end

  # @private
  def invite_params
    params.require(:invite_form).permit(:first_name, :last_name, :username, :password, :password_confirmation)
  end
end

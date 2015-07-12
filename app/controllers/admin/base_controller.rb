class Admin::BaseController < ApplicationController
  before_filter :authenticate!

  helper_method :current_user

  layout 'admin'

  private

  # @private
  def current_user
    @current_user ||= User.find_by_id(session[:user_id]) if session[:user_id]
  end

  # @private
  def authenticate!
    redirect_to admin_login_url, alert: "Not authorized" if current_user.nil?
  end
end

class Admin::SessionsController < Admin::BaseController
  skip_before_filter :authenticate!, only: [:new, :create]

  def new
  end

  def create
    session.clear
    @user = User.authenticate(params[:email], params[:password])

    if @user
      session[:user_id] = @user.id
      redirect_to dashboard_url, notice: 'Logged in!'
    else
      flash.now.alert = 'Invalid email or password'
      render 'new'
    end
  end

  def destroy
    session[:user_id] = nil
    session.clear
    redirect_to admin_dashboard_url, notice: 'Logged out!'
  end
end

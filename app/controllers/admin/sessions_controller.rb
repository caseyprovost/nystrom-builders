class Admin::SessionsController < Admin::BaseController
  skip_before_filter :authenticate!, only: [:new, :create]

  def new
    @form = LoginForm.new
  end

  def create
    @form = LoginForm.new(login_params)

    if @form.save
      session[:user_id] = @form.user.id
      redirect_to admin_projects_url, notice: 'Logged in!'
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

  private

  # @private
  def login_params
    params.require(:login_form).permit(:login, :password)
  end
end

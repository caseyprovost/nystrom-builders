class Admin::UsersController < Admin::BaseController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      UserMailer.invite(@user.id).deliver_now
      flash.now.notice = 'Your user was successfully added'
      redirect_to admin_users_path
    else
      flash.now.alert = "Please check your entries and try again"
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      flash.now.notice = 'Your user was successfully updated.'
      redirect_to admin_users_path
    else
      flash.now.alert = "Please check your entries and try again"
      render :edit
    end
  end

  def destroy
    @user = User.find(params[:id])

    if @user.destroy
      flash.now.notice = "#{@user.email} was removed."
      redirect_to admin_users_path
    else
      flash.now.alert = "This user could not be deleted."
      redirect_to admin_user_path(@user)
    end
  end

  private

  # @private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email)
  end
end

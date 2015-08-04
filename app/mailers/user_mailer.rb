class UserMailer < ActionMailer::Base
  default to: Efrom: ENV['DEFAULT_FROM_EMAIL']

  def invite(user_id)
    @user = User.find(user_id)
    mail(to: @user.email, subject: "You have been granted admin access to NystromBuilder's website!")
  end
end

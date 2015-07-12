class LoginForm
  include ActiveModel::Model

  attr_accessor :login
  attr_accessor :password
  attr_reader :user

  def initialize(attrs = {})
    attrs.each_pair do |key, value|
      self.send("#{key}=", value)
    end
  end

  def persisted?
    false
  end

  def save
    @user = User.authenticate(login, password)

    if @user
      true
    else
      errors.add(:base, "The credentials you provided were incorrect")
      false
    end
  end
end

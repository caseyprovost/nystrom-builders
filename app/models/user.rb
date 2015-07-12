class User < ActiveRecord::Base
  attr_accessor :password

  validates :first_name, :last_name, :username, presence: true
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  validates_uniqueness_of :email, :username

  before_save :encrypt_password

  def self.authenticate(login, password)
    user = where('email = :login OR username = :login', { login: login }).first
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end

  def name
    "#{first_name} #{last_name}"
  end

  private

  # @private
  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end
end

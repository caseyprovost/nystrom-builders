class ContactRequest
  include MongoMapper::Document

  key :first_name, String
  key :last_name, String
  key :company_name, String
  key :email, String
  key :message, String

  validates :first_name, :last_name, presence: true
  validates :email, with: { format: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  validates :message, length: { minimum: 10, maximum: 500 }
end

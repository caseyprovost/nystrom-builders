class ContactRequest
  include MongoMapper::Document

  key :first_name, String
  key :last_name, String
  key :company_name, String
  key :email, String
  key :message, Text

  validates :first_name, :last_name, presence: true
  validates :email, email: true
  validates :message, length: { minimum: 10, maximum: 500 }
end

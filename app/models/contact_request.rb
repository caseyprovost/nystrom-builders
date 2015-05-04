class ContactRequest
  include MongoMapper::Document

  key :first_name, String
  key :last_name, String
  key :company_name, String
  key :email, String
  key :message, String
  key :job_type, String

  validates_presence_of :first_name, :last_name
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create
  validates_length_of :message, minimum: 20

  def name
    "#{first_name} #{last_name}"
  end
end

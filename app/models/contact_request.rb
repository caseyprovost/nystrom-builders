class ContactRequest < ActiveRecord::Base
  validates_presence_of :first_name, :last_name, :job_type
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create
  validates_length_of :message, minimum: 20

  JOB_TYPES = ['Commercial', 'Residential']

  def name
    "#{first_name} #{last_name}"
  end
end

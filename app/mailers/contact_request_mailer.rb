class ContactRequestMailer < ActionMailer::Base
  default to: ENV['DEFAULT_TO_EMAIL'], from: ENV['DEFAULT_FROM_EMAIL']

  def send_to_admin(contact_request_id)
    contact_request = ContactRequest.find(contact_request_id)

    mail(subject: "[NystromBuildersGr] Contact Request from #{contact_request.name}")
  end
end

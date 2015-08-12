Rails.application.config.action_mailer.smtp_settings = {
  address: ENV['SMTP_DOMAIN'],
  port: 587,
  authentication: ENV['SMTP_AUTH'],
  enable_starttls_auto: true,
  user_name: ENV['EMAIL_USERNAME'],
  password: ENV['EMAIL_PASSWORD']
}

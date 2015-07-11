require 'yaml'

CarrierWave.configure do |config|
  if Rails.env.development? || Rails.env.test?
    # This enables local storage for development and test environments so we don't need to hit S3.
    config.storage = :file
  else
    config.storage = :fog
    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: ENV['AWS_ACCESS_KEY'],
      aws_secret_access_key: ENV['AWS_SECREY_ACCESS_KEY']
    }
    config.fog_directory = ENV['AWS_BUCKET']
  end
end

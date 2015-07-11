class ProjectPhoto < ActiveRecord::Base
  mount_uploader :photo, PhotoUploader

  belongs_to :project
end

class Project < ActiveRecord::Base
  has_many :photos, class_name: 'ProjectPhoto'

  validates :name, presence: true

   acts_as_paranoid
end

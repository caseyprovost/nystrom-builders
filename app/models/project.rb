class Project < ActiveRecord::Base
  #attr_accessible :name, :summary, :display_on_projects_page, :photos_attributes
  has_many :photos, class_name: 'ProjectPhoto'

  validates :name, presence: true

   acts_as_paranoid

   accepts_nested_attributes_for :photos, allow_destroy: true
end

class CreateProjectPhotos < ActiveRecord::Migration
  def change
    create_table :project_photos do |t|
      t.integer :project_id, null: false, index: true
      t.string :photo, null: false

      t.timestamps null: false
    end
  end
end

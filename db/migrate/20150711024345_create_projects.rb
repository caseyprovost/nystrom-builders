class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.boolean :display_on_projects_page, null: false, default: false
      t.text :summary

      t.timestamps null: false
    end
  end
end

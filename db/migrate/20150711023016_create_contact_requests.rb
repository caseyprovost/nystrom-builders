class CreateContactRequests < ActiveRecord::Migration
  def change
    create_table :contact_requests do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.text :message, null: false
      t.integer :job_type, null: false
      t.string :company_name

      t.timestamps null: false
    end
  end
end

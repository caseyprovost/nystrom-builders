class DeviseCreateUsers < ActiveRecord::Migration
  def change
    create_table(:users) do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email,              null: false, default: ""
      t.string :username,           null: false, default: ""
      t.string :password_salt,      null: false, default: ""
      t.string :password_hash,      null: false, default: ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
  end
end

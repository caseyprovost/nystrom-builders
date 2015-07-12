FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "devnull+foo#{n}@nystrombuilders-gr.com" }
    password { generate(:secure_password) }
    sequence(:first_name) { |n| "foo#{n}" }
    sequence(:last_name) { |n| "bar#{n}" }
  end
end

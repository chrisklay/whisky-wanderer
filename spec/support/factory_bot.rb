require 'factory_bot'

FactoryBot.define do
  factory :user do
    first_name {'Example'}
    last_name {'Man'}
    sequence(:username) {|n| "ExampleMan#{n}" }
    sequence(:email) {|n| "ExampleMan#{n}@example.com" }
    password { 'qwerty' }
    password_confirmation { 'qwerty' }
  end

end

require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) {User.new(first_name: 'Jim', last_name: 'Murray', username: 'WhiskyBoss', email:'WhiskyBoss@example.com', password: 'Whisky'  )}

  describe "first_name" do
    it "should return the user's first name" do
      expect(user.first_name).to eq("Jim")
    end
  end

  describe "last_name" do
    it "should return the user's last name" do
      expect(user.last_name).to eq("Murray")
    end
  end

  describe "username" do
    it "should return the user's username" do
      expect(user.username).to eq("WhiskyBoss")
    end
  end

  describe "email" do
    it "should return the user's email" do
      expect(user.email).to eq("WhiskyBoss@example.com")
    end
  end

  describe "password" do
    it "should return the user's password" do
      expect(user.password).to eq("Whisky")
    end
  end
end

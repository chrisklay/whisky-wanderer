class Review < ApplicationRecord
  validates :name, presence: true
  validates :rating, presence: true, inclusion: { in: 0..100 }
  validates :description, presence: true
  validates :user_id, presence: true
  validates :category_id, presence: true
  validates :region_id, presence: true
  belongs_to :user
  belongs_to :category
  belongs_to :region
end

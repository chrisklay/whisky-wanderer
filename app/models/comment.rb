class Comment < ApplicationRecord
  validates :rating, presence: true, inclusion: { in: 0..5 }
  validates :description, presence: true
  validates :user_id, presence: true
  validates :review_id, presence: true
  belongs_to :user
  belongs_to :review
end

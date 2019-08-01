class Region < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
  validates :svg, presence: true

end

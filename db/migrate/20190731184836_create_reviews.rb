class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :name, null: false
      t.integer :rating, null: false
      t.text :description, null: false
      t.belongs_to :user, null: false
      t.belongs_to :category, null: false
      t.belongs_to :region, null: false
      t.timestamps null: false
    end
  end
end

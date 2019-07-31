class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :rating, null: false
      t.text :description, null: false
      t.belongs_to :user, null: false
      t.belongs_to :review, null: false
      t.timestamps null: false
    end
  end
end

class AddDescriptionAndSvgColumnsForRegions < ActiveRecord::Migration[5.2]
  def change
    add_column :regions, :description, :string, null: false
    add_column :regions, :svg, :text, null: false
  end
end

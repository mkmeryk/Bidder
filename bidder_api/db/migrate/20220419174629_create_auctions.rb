class CreateAuctions < ActiveRecord::Migration[7.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.date :closing_date
      t.float :reserve_price

      t.timestamps
    end
  end
end

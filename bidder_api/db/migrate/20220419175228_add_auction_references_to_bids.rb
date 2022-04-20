class AddAuctionReferencesToBids < ActiveRecord::Migration[7.0]
  def change
    add_reference :bids, :auction, null: false, foreign_key: true
  end
end

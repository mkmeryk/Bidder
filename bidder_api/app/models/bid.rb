class Bid < ApplicationRecord

    validates :bid_price, presence: true
    belongs_to :auction
    belongs_to :user

end

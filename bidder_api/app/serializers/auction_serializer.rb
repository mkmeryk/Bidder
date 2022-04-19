class AuctionSerializer < ActiveModel::Serializer
  attributes :id
  has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :bid_price
  end

  belongs_to :user, key: :author

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :name
  end

end

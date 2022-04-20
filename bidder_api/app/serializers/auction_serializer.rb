class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :closing_date, :reserve_price
  has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :bid_price, :created_at
  end

  belongs_to :user, key: :author

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :name
  end

end

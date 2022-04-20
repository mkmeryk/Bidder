class Api::V1::AuctionsController < Api::ApplicationController
    
    def create
        auction = Auction.new(auction_params)
        auction.user = User.first
        auction.save!
        render json: { id: auction.id }
    end

    def index
        auctions = Auction.order(created_at: :desc)
        render(json: auctions, each_serializer: AcutionCollectionSerializer)
    end

    def show
        auction = Auction.find(params[:id])
        bids = auction.bids.order(bid_price: :desc)
        render(json: auction)
    end

    private

    def auction_params
        params.require(:auction).permit(:title,:description,:closing_date,:reserve_price)
    end
end

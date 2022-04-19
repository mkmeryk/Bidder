class Api::V1::AuctionsController < Api::ApplicationController

    def index
        auctions = Auction.order(created_at: :desc)
        render(json: auctions, each_serializer: AcutionCollectionSerializer)
    end

    def show
        auction = Auction.find(params[:id])
        render(json: auction)
    end

    def create
        auction = Auction.new(auction_params)
        auction.user = User.first
        if auction.save
            render json:{id: auction.id}
        else
            render(
                json:{errors: auctions.errors.messages},
                status: 422
            )
        end
    end

    def auction_params
        params.require(:auction).permit(:title,:description,:closing_date,:reserve_price)
    end
end

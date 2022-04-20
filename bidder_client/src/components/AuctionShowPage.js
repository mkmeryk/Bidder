
// import BidDetails from './BidDetails';
import { useState, useEffect } from 'react'
import AuctionDetails from './AuctionDetails';
import BidList from './BidList'
import '../App.css';
import { Auction } from '../requests';
import NewBidPage from './NewBidPage';

export default function AuctionsShowPage(props){
    const [auction, setAuctions] = useState({});

    useEffect(() => {
        Auction.show(props.match.params.id)
        .then((fetchedAPIAuctions) => {
            setAuctions(fetchedAPIAuctions)
        })
    }, [])

    
    console.log(auction)

    const {id, title, description, author, reserve_price, closing_date } = auction;

    return (
        <div className="content-page">
            <AuctionDetails 
            title={title}
            description={description}
            author={author}
            closing_date={closing_date}
            reserve_price={reserve_price}
            />
            <NewBidPage auction_id={id}/>
            <h2>Previous Bids</h2>
            <BidList list={auction.bids}  />
        </div>
    )
}
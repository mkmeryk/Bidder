// import AuctionDetails from './AuctionDetails';
import { useState, useEffect } from 'react';
// import AuctionIndexData from '../AuctionIndexData';
import { Auction } from '../requests';
import { Link } from 'react-router-dom';

export default function AuctionIndexPage() {
    const [auctions, setAuctions] = useState([])

    useEffect(() => {
        Auction.index()
        .then((auctionsData) => {
            setAuctions(auctionsData)
        })
    }, [])



    return(
        <div>
            <h1 className="index-page-heading">Auction</h1>
            { auctions.map((e, i) => {
                return (
                    <div>
                        <h3 className="links" key={i} > <Link to={`/auctions/${e.id}`} className="links">{e.title}</Link>  </h3>
                        <p className="auctions" >{e.description}</p>
                    </div>
                    
                )
            })}
        </div>
    )
}


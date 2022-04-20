const AuctionDetails = (props) =>{
    return(
        <div >
            <div>
                 <h2 className="links">
                    {props.title}
                </h2> 
            </div>
            <div className="auction-show-page">
                <div >
                    <h5>
                        {props.description}
                    </h5>
                </div>
                <div>
                    <p>
                    By {props.author ? props.author.name : null} | closing on: {props.closing_date}
                    <br/>
                    <small>
                        Reserve Price{props.reserve_price}
                    </small>
                    </p>                
                </div>
            </div>
            
        </div>
    )
}
export default AuctionDetails;



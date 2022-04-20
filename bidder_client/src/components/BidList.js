import BidDetails from './BidDetails'

const BidList = (props) => {
    return (
        props.list?.length?
            props.list.map((e, i) => {
                return <BidDetails 
                key={i} 
                bid_price={e.bid_price} 
                author_name={e.author_name} 
                created_at={e.created_at} />
            })
        :
        <></>
        
    )
}

export default BidList; 


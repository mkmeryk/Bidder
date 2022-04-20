import FormErrors from './FormErrors'
const NewBidForm = props => {

    const getDataAndSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        props.submitForm(
            {
                bid_price: fd.get("bid_price"),
                auction_id: props.auction_id
                
            }
        )
    }

    return (
        <form onSubmit={getDataAndSubmit}>
            <div>
                <label htmlFor="bid_price"></label>
                <br />
                <input type="float" name="bid_price" id="" /> <input type="submit" value="Bid" />
                <FormErrors errors={props.errors} forField="bid_price" />
            </div>

        </form>
    )
}
export default NewBidForm
import FormErrors from './FormErrors'
const NewAuctionForm = props => {

    const getDataAndSubmit = (event) => {
        // get the form data
        // pass it into the function from the props
        // props.submitForm
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        // console.log(fd.get("title"), fd.get("description"));
        props.submitForm(
            {
                title: fd.get("title"),
                description: fd.get("description"),
                closing_date: fd.get("closing_date"),
                reserve_price: fd.get("reserve_price"),
                
            }
        )
        // event.currentTarget.reset();
    }

    return (
        <form onSubmit={getDataAndSubmit} className="content-page-form">
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" id="" />
                <FormErrors errors={props.errors} forField="title" />
            </div>
            <div>
                <label htmlFor="description">description</label>
                <br />
                <input type="text" name="description" id="" />
                <FormErrors errors={props.errors} forField="description" />
            </div>
            <div>
                <label htmlFor="closing_date">Closing Date</label>
                <br />
                <input type="date" name="closing_date" id="" />
                <FormErrors errors={props.errors} forField="closing_date" />
            </div>
            <div>
                <label htmlFor="reserve_price">Reserve Price</label>
                <br />
                <input type="float" name="reserve_price" id="" />
                <FormErrors errors={props.errors} forField="reserve_price" />
            </div>
            <div>
                <input type="submit" value="Create Auction" />
            </div>
        </form>
    )
}
export default NewAuctionForm
const FormErrors = props => {
    const { errors, forField } = props;

    let filteredErrors = [];
    if (forField) {
        filteredErrors = errors.filter(
            err => err.field === forField
        )
    }

    return (
        <ul>
            {
                filteredErrors.map((error, i) => {
                    return <li key={i}>{error.field} - {error.message}</li>
                })
            }
        </ul>
    )
}

export default FormErrors;
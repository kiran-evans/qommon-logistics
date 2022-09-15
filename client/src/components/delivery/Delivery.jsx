const Delivery = (props) => {

    const { id, location, weight } = props;

    return (
        <div className="delivery">
            <h4>{id}</h4>
            <h4>{location}</h4>
            <h4>{weight}kg</h4>
        </div>
    )
}

export default Delivery;
const Delivery = (props) => {

    const { id, name, maxCarryWeight, assignedDeliveries } = props;

    return (
        <div className="driver">
            <h4>ID: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>MCW: {maxCarryWeight}kg</h4>
            {assignedDeliveries.length === 0 ? <h4>No assigned deliveries</h4> : <h4>Already assigned deliveries</h4>}
        </div>
    )
}

export default Delivery;
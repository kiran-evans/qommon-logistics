const DriverCard = (props) => {

    const { id, name, maxCarryWeight, assignedDeliveries } = props;

    return (
        <div className="driverCard">
            <h1>Driver {id}</h1>
            <h2>Name: {name}</h2>
            <h3>MCW: {maxCarryWeight}kg</h3>
            {assignedDeliveries.length === 0 ? <h3>No assigned deliveries</h3> : <h3>Already assigned deliveries</h3>}
        </div>
    )
}

export default DriverCard;
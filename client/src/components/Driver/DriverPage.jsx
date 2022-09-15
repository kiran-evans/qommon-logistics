import DeliveryCard from "../Delivery/DeliveryCard";

const DriverPage = (props) => {

    const driver = props.currentUser;

    // console.log(driver);

    return (
        <div className="driverPage">
            <h2>{driver.name}</h2>
            <h2>{driver._id}</h2>

            {driver.assignedDeliveries > 0 ? driver.assignedDeliveries.map(delivery => (
                <DeliveryCard key={delivery._id} id={delivery._id} location={delivery.location} weight={delivery.weight} assignedDriverId={delivery.assignedDriverId} isDelivered={delivery.isDelivered} />
            )) : <p>No assigned deliveries</p>}
        </div>
    )
}

export default DriverPage;
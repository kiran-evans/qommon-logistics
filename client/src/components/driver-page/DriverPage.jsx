import Delivery from "../delivery/Delivery";

const DriverPage = (props) => {

    const driver = props.currentUser;

    // console.log(driver);

    return (
        <div className="driverPage">
            <h2>{driver.name}</h2>
            <h2>{driver._id}</h2>

            {driver.assignedDeliveries > 0 ? driver.assignedDeliveries.map(delivery => (
                <Delivery id={delivery._id} location={delivery.location} weight={delivery.weight} />
            )) : <p>No assigned deliveries</p>}
        </div>
    )
}

export default DriverPage;
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import DeliveryCard from "../Delivery/DeliveryCard";

const DriverPage = (props) => {
    
    const driver = props.currentUser;
    
    const [deliveryArray, setDeliveryArray] = useState([]);

    useEffect(() => {
        const getDeliveries = async () => {
            if (!driver.assignedDeliveries) return;
            try {
                let fetchedDeliveries = []; // Blank array
                for (let i = 0; i < driver.assignedDeliveries.length; i++) {
                    // console.log(driver.assignedDeliveries.at(i));
                    const res = await axios.get(`http://localhost:5000/api/delivery/${driver.assignedDeliveries.at(i)}`);
                    fetchedDeliveries.push(res.data);
                }
                setDeliveryArray(fetchedDeliveries);
            } catch (err) {
                console.log(err);
            }
        }
        getDeliveries();
    }, []);

    // console.log(deliveryArray);
    
    // console.log(driver);

    return (
        <div className="driverPage">
        <h1>Driver Dashboard</h1>
        <h2>{driver.name}'s Dashboard | Driver {parseInt(driver._id.slice(-3), 16)}</h2>
            
            <div className="driverMainContainer">

                <div className="dashboardComponent">
                    <h3>Your details</h3>
                    <h4>Username: {driver.username}</h4>
                    <h4>Max. carry weight: {driver.maxCarryWeight}</h4>
                </div>
        
                <div className="dashboardComponent">
                    <h3>Deliveries</h3>

                    {deliveryArray ? deliveryArray.map((delivery, i) => (
                        <DeliveryCard key={i} id={delivery._id} location={delivery.location} weight={delivery.weight} assignedDriverId={delivery.assignedDriverId} isDelivered={delivery.isDelivered} dateAdded={delivery.dateAdded} />
                    )) : <p>No assigned deliveries</p>}

                </div>

            </div>
        </div>
    )
}

export default DriverPage;
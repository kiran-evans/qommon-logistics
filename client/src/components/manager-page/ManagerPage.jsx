import axios from "axios";
import { useState, useEffect } from "react";
import Driver from "../driver/Driver";

const ManagerPage = (props) => {

    const manager = props.currentUser;

    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        const getDrivers = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/driver");
                return setDrivers(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getDrivers();
    }, [drivers]);

    // console.log(manager);

    return (
        <div className="managerPage">
            <h2>{manager.name}</h2>
            <h2>{manager._id}</h2>

            <h3>Drivers:</h3>
            {drivers.map(driver => (
                <Driver id={driver._id} name={driver.name} maxCarryWeight={driver.maxCarryWeight} assignedDeliveries={driver.assignedDeliveries} />
            ))}

        </div>
    )
}

export default ManagerPage;
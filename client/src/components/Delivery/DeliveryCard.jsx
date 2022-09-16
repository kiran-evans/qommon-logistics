import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useEffect } from "react";

const DeliveryCard = (props) => {
    const { id, location, assignedDriverId, isDelivered, weight, dateAdded } = props;

    const navigator = useNavigate();
    const [deliveryStatus, setDeliveryStatus] = useState(isDelivered);
    const [isAssigning, setIsAssigning] = useState(false);
    const [allDrivers, setAllDrivers] = useState([]);
    const [newAssignedDriverId, setNewAssignedDriverId] = useState('');
    const [assignedDriver, setAssignedDriver] = useState('');
  
    // const goToDelivery = () => {
    //   props.setDelivery(props.delivery);
    //   navigator('/delivery');
    // }

    useEffect(() => {
        if (assignedDriverId) {
            const getCurrentDriver = async () => {
                try {
                    const res = await axios.get(`http://localhost:5000/api/driver/${assignedDriverId}`);
                    setAssignedDriver(res.data);
                } catch (err) {
                    console.log(err);
                }
            }
            getCurrentDriver();
        }
    }, []);

    useEffect(() => {
        const getAllDrivers = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/driver");
                setAllDrivers(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getAllDrivers();
    }, [isAssigning]);

    const confirmAssignClick = async () => {
        try {
            setIsAssigning(false); // Close assigning UI so it cannot be assigned twice accidentally
            await axios.put(`http://localhost:5000/api/delivery/${id}`, {
                assignedDriverId: newAssignedDriverId
            })

            let deliveriesArray = [];
            if (assignedDriver) deliveriesArray = assignedDriver.assignedDeliveries;
            deliveriesArray.push(id); // Add this delivery to the assigned driver's deliveries
            // console.log(deliveriesArray);

            await axios.put(`http://localhost:5000/api/driver/${newAssignedDriverId}`, {
                assignedDeliveries: deliveriesArray
            })

            const res = await axios.get(`http://localhost:5000/api/driver/${newAssignedDriverId}`);
            setAssignedDriver(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const deleteButtonClick = async () => {
        try {
            if (assignedDriver) {
                const newDeliveriesArray = assignedDriver.assignedDeliveries.splice(assignedDriver.assignedDeliveries.indexOf(id), 1);
                props.setDeliveryChange(await axios.put(`http://localhost:5000/api/driver/${assignedDriverId}`, {
                    assignedDeliveries: newDeliveriesArray
                }));
            }
            props.setDeliveryChange(await axios.delete(`http://localhost:5000/api/delivery/${id}`));
        } catch (err) {
            console.log(err);
        }
    }

    const deliveredButtonClick = async () => {
        try {
            await axios.put(`http://localhost:5000/api/delivery/${id}`, { isDelivered: true });
            setDeliveryStatus(true);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="deliveryCard">
            {props.isManager &&
                <div className="managerButtons">
                    <button className="assignButton" title="Assign driver to this delivery" onClick={() => setIsAssigning(true)}><PersonAddIcon /></button>
                    <button className="editButton" title="Edit this delivery"><EditIcon /></button>
                    <button className="deleteButton" title="Delete this delivery" onClick={() => deleteButtonClick()}><DeleteIcon /></button>
                </div>
            }

            {isAssigning &&
                <div className="assignDriverDropdown">
                    <select onClick={e => setNewAssignedDriverId(e.target.value)}>
                        {allDrivers.map(driver => (
                            <option key={driver._id} value={driver._id}>{driver.name} ({driver.username})</option>
                        ))}
                    </select>
                    <button className="confirmAssignButton" onClick={() => confirmAssignClick()}>Assign</button>
                </div>
            }

            <h1>Delivery {parseInt(id.slice(-3), 16)}</h1>
            <h2>Added: {new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'short', year: 'numeric' }).format(Date.parse(dateAdded))}</h2>
            <h2>Location: {location}</h2>
            <h3>Weight: {weight}kg</h3>
            {props.isManager && <h3>Assigned Driver: {assignedDriver ? `${assignedDriver.name} (${assignedDriver.username})` : 'No assigned driver'}</h3>}
            <h3>Delivery status: {deliveryStatus ? 'Delivered' : 'Not delivered'}</h3>
            {!deliveryStatus && <button onClick={() => deliveredButtonClick()} >Mark as Delivered</button>}
        </div>
    )
}

export default DeliveryCard;
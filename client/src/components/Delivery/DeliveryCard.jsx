import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const DeliveryCard = (props) => {
    const { id, location, assignedDriverId, isDelivered, weight } = props;

    const navigator = useNavigate();
    const [deliveryStatus, setDeliveryStatus] = useState(isDelivered);
  
    const goToDelivery = () => {
      props.setDelivery(props.delivery);
      navigator('/delivery');
    }

    const handleClick = async () => {
        try {
            await axios.put(`http://localhost:5000/api/delivery${id}`, {isDelivered:true});
            setDeliveryStatus(true);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="deliveryCard" onClick={() => goToDelivery()} >
            <h1>Delivery {id}</h1>
            <h2>Location: {location}</h2>
            <h3>Weight: {weight}kg</h3>
            <h3>Assigned Driver: {assignedDriverId}</h3>
            <h3>{deliveryStatus ? 'Delivered' : 'Not delivered'}</h3>
            <button onClick={() => handleClick()} >Delivered</button>
        </div>
    )
}

DeliveryCard.propTypes = {
    location: PropTypes.string.isRequired,
    assignedDriverId: PropTypes.string.isRequired,
    isDelivered: PropTypes.bool.isRequired,
    weight: PropTypes.number.isRequired,
}

export default DeliveryCard;
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
            const res = await axios.put(`http://localhost:5000/api/delivery${id}`,
                {isDelivered:true});
            setDeliveryStatus(true);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="deliveryCard" onClick={() => goToDelivery()} >
            <h1>Delivery {delivery._id}</h1>
            <p>Location: {location}</p>
            <p>Assigned Driver: {assignedDriverId}</p>
            <p>Delivered: {deliveryStatus}</p>
            <h3>Weight: {weight}kg</h3>
            <button onClick={() => handleClick()}>Delivered</button>
        </div>
    )
}

DeliveryCard.propTypes = {
    location: PropTypes.string.isRequired,
    assignedDriverId: PropTypes.strng.isRequired,
    isDelivered: PropTypes.boolean.isRequired,
    weight: PropTypes.number.isRequired,
}

export default DeliveryCard;
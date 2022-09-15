import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const DeliveryCard = (props) => {
    const { location, assignedDriverId, isDelivered, weight } = props;

    const navigator = useNavigate();
  
    const goToDelivery = () => {
      props.setDelivery(props.delivery);  
      navigator('/delivery');
    }

    return (
        <div className="deliveryCard" onClick={() => goToDelivery()} >
            <h1>Delivery {delivery._id}</h1>
            <p>Location: {location}</p>
            <p>Assigned Driver: {assignedDriverId}</p>
            <p>Delivered: {isDelivered}</p>
            <h3>Weight: {weight}kg</h3>
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
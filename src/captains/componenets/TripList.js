import "./css/TripList.css";

import Card from "../../shared/components/UIElements/Card/Card";
import TripItem from "./TripItem";

const TripList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No trips found.</h2>
          <button>Add new trip</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((trip) => (
        <TripItem 
        key={trip.id} 
        id={trip.id} 
        image={trip.imageUrl} 
        title={trip.title}
        description={trip.description}
        address={trip.address}
        creator={trip.userName}
        coordinates={trip.location}
        />
      ))}
    </ul>
  );
};

export default TripList;

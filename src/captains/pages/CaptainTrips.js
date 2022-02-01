import { useParams } from "react-router-dom";

import TripList from "../componenets/TripList";

const DUMMY_TRIPS = [

    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      userName: 'u1'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://media.timeout.com/images/101705309/750/422/image.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      userName: 'u2'
    }
  ];

const CaptainTrips = () => {
  const userName = useParams().userName;
  const loadedTrips = DUMMY_TRIPS.filter(trip => trip.userName === userName);
    return <TripList items={loadedTrips} />
}

export default CaptainTrips;
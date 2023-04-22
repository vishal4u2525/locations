import '../LocationList/LocationList.css';
import LocationImage from '../LocationList/LocationImage';
import LocatioDetails from '../LocationList/LocationDetails';
import LocationPrice from '../LocationList/LocationPrice';

const LocationList = (props) => {
  return (
    <div className="resort-list-property">
      <LocationImage image={props.image} name={props.name} />
      <LocatioDetails
        logo={props.logo}
        name={props.name}
        address={props.address}
        phone={props.phone}
        star={props.star}
        reviewscount={props.reviewscount}
        age={props.age}
        season={props.season}
        url={props.url}
      />
      <LocationPrice price={props.price} bookinglink={props.campspoturl} />
    </div>
  );
};

export default LocationList;

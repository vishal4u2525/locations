import '../LocationList/LocationList.css';
import LocationImage from '../LocationList/LocationImage';
import LocatioDetails from '../LocationList/LocationDetails';
import LocationPrice from '../LocationList/LocationPrice';

const LocationList = (props) => {
  return (
    <div className="resort-list-property">
      <LocationImage image={props.lists.image} />
      <LocatioDetails
        key={props.lists.name}
        logo={props.lists.logo}
        name={props.lists.name}
        fulladdress={[props.lists.address]}
        phonenumber={[props.lists.contactPoint]}
        star={props.lists.star}
        reviewscount={props.lists.reviewscount}
        age={props.lists.age}
        season={props.lists.season}
        url={props.lists.url}
      />
      <LocationPrice
        price={props.lists.price}
        bookinglink={props.lists.campspoturl}
      />
    </div>
  );
};

export default LocationList;

import '../LocationList/LocationImage.css';

const LocationAddress = (props) => {
  return (
    <div className="address">
      {props.data.streetAddress}, {props.data.addressLocality},
      {props.data.addressRegion}, {props.data.postalCode}
    </div>
  );
};

export default LocationAddress;

import '../LocationList/LocationImage.css';

const LocationPhone = (props) => {
  return (
    <a className="phone" href={'tel:' + props.data.telephone}>
      {props.data.telephone}
    </a>
  );
};

export default LocationPhone;

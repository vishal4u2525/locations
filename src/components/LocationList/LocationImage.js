import '../LocationList/LocationImage.css';

const LocationImage = (props) => {
  return (
    <div className="resort-state-img">
      <img width="300" height="225" src={props.image} alt={props.name} />
    </div>
  );
};

export default LocationImage;

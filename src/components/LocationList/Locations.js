import '../LocationList/Locations.css';
import LocationList from '../LocationList/LocationList';

const Locations = (props) => {
  const { data } = props;
  return (
    <div className="locations">
      {data &&
        data.map((items) => <LocationList lists={items} key={items.id} />)}
    </div>
  );
};

export default Locations;

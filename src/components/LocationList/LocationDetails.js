import '../LocationList/LocationDetails.css';

const LocatioDetails = (props) => {
  return (
    <div className="resort-state-content">
      <div className=" resort-state-mobile">
        <div className="resort-state-logo">
          <img src={props.logo} alt={props.name} />
        </div>
      </div>
      <h3>{props.name}</h3>
      <div className="address">{props.address}</div>
      <a className="phone" href={'tel:' + props.phone}>
        {props.phone}
      </a>
      <div className="rating-divider rating-placement">
        <div className="submiited-rating">
          <div className="review-rating-block" style={{ width: '80%' }}></div>
        </div>
        <div className="place-rating">
          Rated {props.star} <span>based on {props.reviewscount} reviews</span>
        </div>
        <div className="resort-list-mb-link">
          <div className="all-ages">
            {props.age} – {props.season}
          </div>
        </div>
      </div>
      <div className="state-pp-link">
        <a href={props.url} className="black-link">
          <span>View Details</span>
        </a>
      </div>
    </div>
  );
};

export default LocatioDetails;

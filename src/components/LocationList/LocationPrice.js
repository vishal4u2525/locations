import '../LocationList/LocationPrice.css';

const LocationPrice = (props) => {
  return (
    <div className="resort-property-price">
      {props.price === 'Not Available' || props.price === '' ? (
        <div className="st-btn">
          <a href={props.bookinglink} className="button">
            Rates &amp; availability
          </a>
        </div>
      ) : (
        <div>
          <div className="st-price">
            <span className="st-price-tag">Starting at</span>
            <div className="st-price-number">
              ${props.price} <span>USD*</span>
            </div>
            <div className="price-unit">RV site/night</div>
          </div>
          <div className="st-btn">
            <a href={props.bookinglink} className="button">
              Rates &amp; availability
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationPrice;

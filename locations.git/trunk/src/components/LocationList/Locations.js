import '../LocationList/Locations.css';
import LocationList from '../LocationList/LocationList';

const Locations = (props) => {
  return (
    <div className="locations">
      {props.items.map((item) => (
        <LocationList
          key={item.id}
          image={item.image}
          name={item.name}
          logo={item.logo}
          address={[
            item.address.streetAddress + ', ',
            item.address.addressLocality + ', ',
            item.address.addressRegion + ', ',
            item.address.postalCode,
          ]}
          phone={item.contactPoint.telephone}
          star={item.star}
          reviewscount={item.reviewscount}
          age={item.age}
          season={item.season}
          price={item.price}
          url={item.url}
          campspoturl={item.campspoturl}
        />
      ))}
      {/* <LocationList
        image={props.items[0].image}
        name={props.items[0].name}
        logo={props.items[0].logo}
        address={[
          props.items[0].address.streetAddress + ', ',
          props.items[0].address.addressLocality + ', ',
          props.items[0].address.addressRegion + ', ',
          props.items[0].address.postalCode,
        ]}
        phone={props.items[0].contactPoint.telephone}
        star={props.items[0].star}
        reviewscount={props.items[0].reviewscount}
        age={props.items[0].age}
        season={props.items[0].season}
        price={props.items[0].price}
        url={props.items[0].url}
        campspoturl={props.items[0].campspoturl}
      />
      <LocationList
        image={props.items[1].image}
        name={props.items[1].name}
        logo={props.items[1].logo}
        address={[
          props.items[1].address.streetAddress + ', ',
          props.items[1].address.addressLocality + ', ',
          props.items[1].address.addressRegion + ', ',
          props.items[1].address.postalCode,
        ]}
        phone={props.items[1].contactPoint.telephone}
        star={props.items[1].star}
        reviewscount={props.items[1].reviewscount}
        age={props.items[1].age}
        season={props.items[1].season}
        price={props.items[1].price}
        url={props.items[1].url}
        campspoturl={props.items[1].campspoturl}
      />
      <LocationList
        image={props.items[2].image}
        name={props.items[2].name}
        logo={props.items[2].logo}
        address={[
          props.items[2].address.streetAddress + ', ',
          props.items[2].address.addressLocality + ', ',
          props.items[2].address.addressRegion + ', ',
          props.items[2].address.postalCode,
        ]}
        phone={props.items[2].contactPoint.telephone}
        star={props.items[2].star}
        reviewscount={props.items[2].reviewscount}
        age={props.items[2].age}
        season={props.items[2].season}
        price={props.items[2].price}
        url={props.items[2].url}
        campspoturl={props.items[2].campspoturl}
      /> */}
    </div>
  );
};

export default Locations;

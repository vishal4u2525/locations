import './App.css';
import Locations from './components/LocationList/Locations';
const App = () => {
  const locations = [
    {
      id: '30329',
      name: '49er Village',
      url: 'https://www.sunoutdoors.com/california/49er-village',
      regionName: 'California',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'United States',
        addressLocality: 'Plymouth',
        addressRegion: 'California',
        postalCode: '95669',
        streetAddress: '18265 Highway 49',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '38.47521',
        longitude: '-120.85137',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '844-726-5472',
        contactType: 'Reservations and Booking',
      },
      logo: 'https://res.cloudinary.com/milestonesuite/image/upload/v1670501176/Sun%20RV%20-%20Sun%20Outdoors/Styleguide/sun-rv-communities.svg',
      image:
        'https://res.cloudinary.com/milestonesuite/image/upload/v1627496984/Sun%20RV%20-%20Sun%20Outdoors/Property%20Profiles/49er-village.jpg',
      price: '58',
      resorttype: '',
      propertycode: 'FAR',
      age: 'All Ages',
      season: 'Year Round',
      star: '4.3',
      parkid: '381',
      custombookinglink: '',
      campspoturl:
        'https://www.sunoutdoors.com/book/checkavailability/381/ca/49er-village',
      reviewscount: '705',
    },
    {
      id: '30387',
      name: 'Arbor Terrace',
      url: 'https://www.sunoutdoors.com/florida/arbor-terrace',
      regionName: 'Florida',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'United States',
        addressLocality: 'Bradenton',
        addressRegion: 'Florida',
        postalCode: '34207',
        streetAddress: '405-57th Avenue, West',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '27.43976',
        longitude: '-82.5599',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '800-205-9908',
        contactType: 'Reservations and Booking',
      },
      logo: 'https://res.cloudinary.com/milestonesuite/image/upload/v1670501176/Sun%20RV%20-%20Sun%20Outdoors/Styleguide/sun-rv-communities.svg',
      image:
        'https://res.cloudinary.com/milestonesuite/image/upload/v1627496997/Sun%20RV%20-%20Sun%20Outdoors/Property%20Profiles/arbor-terrace.jpg',
      price: '46',
      resorttype: '',
      propertycode: 'ARB',
      age: 'All Ages',
      season: 'Year Round',
      star: '4.0',
      parkid: '382',
      custombookinglink: '',
      campspoturl:
        'https://www.sunoutdoors.com/book/checkavailability/382/fl/arbor-terrace',
      reviewscount: '283',
    },
    {
      id: '30432',
      name: 'Austin Lone Star',
      url: 'https://www.sunoutdoors.com/texas/austin-lone-star',
      regionName: 'Texas',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'United States',
        addressLocality: 'Austin',
        addressRegion: 'Texas',
        postalCode: '78744',
        streetAddress:
          '7009 S IH 35 Frontage Rd, South Interstate 35 Frontage Road',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '30.185639',
        longitude: '-97.772926',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '844-725-4402',
        contactType: 'Reservations and Booking',
      },
      logo: 'https://res.cloudinary.com/milestonesuite/image/upload/v1670501176/Sun%20RV%20-%20Sun%20Outdoors/Styleguide/sun-rv-communities.svg',
      image:
        'https://res.cloudinary.com/milestonesuite/image/upload/v1627497013/Sun%20RV%20-%20Sun%20Outdoors/Property%20Profiles/austin-lone-star.jpg',
      price: '72',
      resorttype: '',
      propertycode: 'ASR',
      age: 'All Ages',
      season: 'Year Round',
      star: '4.3',
      parkid: '384',
      custombookinglink: '',
      campspoturl:
        'https://www.sunoutdoors.com/book/checkavailability/384/tx/austin-lone-star',
      reviewscount: '432',
    },
  ];
  return (
    <div className="uk-container">
      <h2 className="location-section-title">EXPLORE OUR RESORTS</h2>
      <Locations items={locations} />
    </div>
  );
};

export default App;

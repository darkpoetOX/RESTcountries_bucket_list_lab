const VisitedCountry = ({ country, countryVisited }) => {
    return (
      <li>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <p>Currency: {country.currency}</p>
        <p>Latitude: {country.latlng[0]}</p>
        <p>Longitude: {country.latlng[1]}</p>
        <button onClick={() => countryVisited(country)}>
          Mark as Visited
        </button>
      </li>
    );
};
  
export default VisitedCountry;
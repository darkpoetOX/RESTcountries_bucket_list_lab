const Country = ({ country, countryVisited}) => {
    return (

        // return each country in list format
        <li>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Currency: {country.currency}</p>
            <p>Latitude: {country.latlng[0]}</p>
            {/* above line accesses the countrie's latitude */}
            <p>Longitude: {country.latlng[1]}</p>
            {/* above line accesses the countrie's longitude */}
            <button onClick={() => countryVisited(country)}>
                Mark as Visited
            </button>
        </li>
    );
};

export default Country;
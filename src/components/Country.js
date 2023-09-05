const Country = ({ country, markCountryVisited}) => {
    return (

        // return each country in list format
        <li>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Currency: {country.currency}</p>
            <p>Latitude: {country.latlng[0]}</p>
            {/* above line accesses the country's latitude */}
            <p>Longitude: {country.latlng[1]}</p>
            {/* above line accesses the country's longitude */}
            <button onClick={() => markCountryVisited(country)}>
                Mark as Visited
            </button>
        </li>
    );
};

export default Country;
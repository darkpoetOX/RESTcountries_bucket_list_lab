import VisitedCountry from "./VisitedCountry";

const VisitedCountriesList = ({ visitedCountries, markCountryVisited }) => {
  return (
    <div>
      <h2>Visited Countries</h2>
      <ul>
        {visitedCountries.map((country) => (
          <VisitedCountry key={country.cca3} country={country} markCountryVisited={markCountryVisited} />
        ))}
      </ul>
    </div>
  );
};

export default VisitedCountriesList;
import VisitedCountry from "./VisitedCountry";

const VisitedCountriesList = ({ visitedCountries }) => {
  return (
    <div>
      <h2>Visited Countries</h2>
      <ul>
        {visitedCountries.map((country) => (
          <VisitedCountry key={country.cca3} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default VisitedCountriesList;
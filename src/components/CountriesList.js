import Country from "./Country";

const CountriesList = ({ countries, markCountryVisited }) => {
  return (
    <>
      <h2>Countries</h2>
      <ul>
        {countries.map((country) => (
          <Country key={country.cca3} country={country} markCountryVisited={markCountryVisited} />
        ))}
      </ul>
    </>
  );
};

export default CountriesList;
  
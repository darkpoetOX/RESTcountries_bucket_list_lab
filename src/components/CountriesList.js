import Country from "./Country";

const CountriesList = ({ countries }) => {
  return (
    <>
      <h2>Countries</h2>
      <ul>
        {countries.map((country) => (
          <Country key={country.cca3} country={country} />
        ))}
      </ul>
    </>
  );
};

export default CountriesList;
  
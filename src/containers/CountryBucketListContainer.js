import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";


const CountryBucketListContainer = () => {
    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState([]);


    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        // Making use of the latitude and longitude data below
        const countriesLatLng = data.map((country) => {
            // if latlng exists, the below line assigns to variable latlng, otherwise gives a default value (0,0)
            const latlng = country.latlng || [0, 0];
            return { ...country, latlng };
          });
          setCountries(countriesLatLng);
    };

    const markCountryVisited = (country) => {
        // Add the country to the visited countries list
        setVisitedCountries([...visitedCountries, country]);
    };
    
    useEffect(() => {
        console.log("Loading data...");
        loadData();
      }, []);

      return (
        <>
          {countries ? (
            <CountriesList countries={countries} markCountryVisited={markCountryVisited} />
          ) : (
            <p>Loading countries...</p>
          )}
    
          {visitedCountries ? (
            <VisitedCountriesList visitedCountries={visitedCountries} markCountryVisited={markCountryVisited} />
          ) : (
            <p>Loading visited countries...</p>
          )}
        </>
    );
};
    

export default CountryBucketListContainer;

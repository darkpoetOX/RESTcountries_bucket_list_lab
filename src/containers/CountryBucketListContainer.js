import { useState, useEffect } from "react";


const CountryBucketListContainer = () => {
    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState([]);


    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
    };
}

export default CountryBucketListContainer;

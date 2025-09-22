import React, { use, useState } from "react";
import Country from "../country/Country";

const Countries = ({ countriespromise }) => {
  const countriesdata = use(countriespromise);
  const countries = countriesdata.countries;
  const [visitedCountries, setVisitedCountries] = useState(0);
  const handleVisitedCountry = (visited) => {
      if (visited) {
        const newVisitedCountries=visitedCountries+1;
        setVisitedCountries(newVisitedCountries);
        
      }
      else{
        const newVisitedCountries=visitedCountries-1;
        setVisitedCountries(newVisitedCountries);
      }
    }
    const [visitedCountryflag,setVisitedCountryflag]=useState([]);
    const handleVisitedflag = (country) => {
            const newVisitedflag=[...visitedCountryflag,country];
            setVisitedCountryflag(newVisitedflag);
           
    }
  // console.log(countries);
  return (
    <>
      <h3 className="text-center text-3xl font-bold mt-4">
        Total visited countries: {visitedCountries}
      </h3>
    <h3 className="ml-4">Visited flags</h3>
    <div className="flex gap-2.5  p-2">{
        visitedCountryflag.map((flag,index) =>  <img key={index}
          className="w-[100px] bg-cover  "
          src={flag.flags.flags.png}
          alt=""
        />)
      }</div>
      
        
      <div className="m-5 grid grid-cols-3 gap-5">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry} handleVisitedflag={handleVisitedflag}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;

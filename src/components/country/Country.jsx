import React, { useState } from "react";

const Country = ({ country, handleVisitedCountry, handleVisitedflag }) => {
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    // if(visited){
    //     setVisited(false);
    // }
    // else{
    //     setVisited(true);

    // }
    setVisited(!visited);
    handleVisitedCountry(!visited);
  };
  return (
    <div
      className={`mt-3 border-2 border-amber-10 rounded-2xl  p-5 ${
        visited && "bg-[#00F7E9]"
      }`}
    >
      <div className="flex justify-center items-center">
        <img
          className="w-[300px] bg-cover  "
          src={country.flags.flags.png}
          alt=""
        />
      </div>

      <h3 className="text-center">Name :{country.name.common}</h3>
      <h3>Population :{country.population.population}</h3>
      <p>
        Area : {country.area.area}
        {country.area.area > 300000 ? " big country" : " small Country"}
      </p>
      <div className="flex justify-between ">
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-3 cursor-pointer"
          onClick={handleVisit}
        >
          {visited ? "Visited" : "Not Visited"}
        </button>
        <button onClick={()=>handleVisitedflag(country)} className='bg-blue-500 mr-2.5 text-white font-semibold py-2 px-4 rounded mt-3 cursor-pointer'>
          Add flag
        </button>
      </div>
    </div>
  );
};

export default Country;

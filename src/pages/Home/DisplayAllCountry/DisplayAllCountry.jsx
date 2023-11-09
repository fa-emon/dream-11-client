import { useState } from "react";
import ShowOnCard from "./ShowOnCard";

const DisplayAllCountry = () => {
    const [country, setCountry] = useState([]);

    fetch('http://localhost:5001/country')
        .then(response => response.json())
        .then(data => {
            setCountry(data)
        })

    return (
        <>
            <h2 className="text-center text-2xl heading-font my-6 text-slate-700 uppercase">Choose Country</h2>

            <div className="grid grid-cols-3 gap-4">
                {
                    country.map(allCountry => <ShowOnCard
                        key={allCountry._id}
                        allCountry={allCountry}
                    ></ShowOnCard>)
                }
            </div>
        </>
    );
};

export default DisplayAllCountry;
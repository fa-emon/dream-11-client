import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import toast from "react-hot-toast";


const DisplaySinglePlayerDetails = () => {
    const { user } = useContext(AuthContext);

    const player = useLoaderData();

    const { name, country, description, speciality, fieldingRating, rating, image } = player;

    const handleAddToMySquad = () => {
        const mySquad = {
            name,
            image,
            country,
            speciality,
            email: user?.email,
        }

        fetch(`http://localhost:5001/mySquad`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(mySquad)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if(data.insertedId){
                    toast.success('Player Added Successfully!');
                }
            });
    }

    return (
        <div className="hero min-h-screen bgImage mt-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold heading-font">{name}</h1>
                    <p className="py-2 all-font">Country: {country}</p>
                    <p className="py-1 all-font text-yellow-600 border-l-4 border-yellow-500 bg-slate-200 rounded-md w-[200px]">Speciality: {speciality}</p>
                    <p className="py-1 all-font">Description: {description}</p>
                    <div className="flex w-full justify-between all-font">
                        <p className="py-4">Feilding Ratings: {fieldingRating}</p>
                        <p className="py-4 border-b-4 border-yellow-500 rounded-b-lg">Ratings: {rating}</p>
                    </div>
                    <button onClick={handleAddToMySquad} className="btn bg-[#eedcb4] hover:bg-[#D5C39F] heading-font">Add To My Squad</button>
                </div>
            </div>
        </div>
    );
};

export default DisplaySinglePlayerDetails;
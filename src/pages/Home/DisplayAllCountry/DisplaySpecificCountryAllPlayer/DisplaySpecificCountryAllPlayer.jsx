import { useLoaderData } from "react-router-dom";
import ShowPlayerOnCard from "./ShowPlayerOnCard";


const DisplaySpecificCountryAllPlayer = () => {
    const allPlayer = useLoaderData();
    return (
        <div className="my-20">
            <div className="grid grid-cols-3 gap-4">
                {
                    allPlayer.map(player => <ShowPlayerOnCard
                        key={player._id}
                        player={player}
                    ></ShowPlayerOnCard>)
                }
            </div>
        </div>
    );
};

export default DisplaySpecificCountryAllPlayer;
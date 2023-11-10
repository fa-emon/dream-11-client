import { useLoaderData } from "react-router-dom";
import ShowPlayerOnCard from "./ShowPlayerOnCard";
import AdvertiseBanner from "../AdvertiseBanner/AdvertiseBanner";


const DisplaySpecificCountryAllPlayer = () => {
    const allPlayer = useLoaderData();
    return (
        <>
            <div>
                <AdvertiseBanner></AdvertiseBanner>
            </div>
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
        </>
    );
};

export default DisplaySpecificCountryAllPlayer;
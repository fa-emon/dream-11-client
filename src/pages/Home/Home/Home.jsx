import Banner from "../Banner/Banner";
import DisplayAllCountry from "../DisplayAllCountry/DisplayAllCountry";
import HistoryOfGentleGame from "../HistoryOfGentleGame/HistoryOfGentleGame";
import OurTeam from "../OurTeam/OurTeam";
import Testimonials from "../Testimonials/Testimonials";
import TodayMatch from "../TodayMatch/TodayMatch";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DisplayAllCountry></DisplayAllCountry>
            <OurTeam></OurTeam>
            <HistoryOfGentleGame></HistoryOfGentleGame>
            <TodayMatch></TodayMatch>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
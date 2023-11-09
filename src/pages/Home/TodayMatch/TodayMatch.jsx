import image1 from '../../../assets/TodayMatch/1.png';
import image2 from '../../../assets/TodayMatch/2.png';

const TodayMatch = () => {
    return (
        <div className="flex justify-between items-center my-16 w-full">
            <div className='w-4/12 mx-auto flex justify-center items-center h-48'>
                <img src={image1} alt="" className="object-cover w-48" />
            </div>
            <div className="heading-font w-4/12 text-center flex flex-col justify-center items-center text-3xl">
                <div>
                    <p className='heading-font text-5xl'>Today Match List</p>
                </div>
                <div className='mt-4'>
                    <h2>9.00 PM</h2>
                    <h2 className='text-5xl'>v/s</h2>
                    <h2>Premier League</h2>
                </div>
            </div>
            <div className='w-4/12 mx-auto flex justify-center items-center h-60'>
                <img src={image2} alt="" className="object-cover w-60" />
            </div>
        </div>
    );
};

export default TodayMatch;

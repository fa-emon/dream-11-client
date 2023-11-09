import image1 from '../../../assets/OurTeam/1.png'
import image2 from '../../../assets/OurTeam/2.png'
import image3 from '../../../assets/OurTeam/3.png'
import image4 from '../../../assets/OurTeam/4.png'
import image5 from '../../../assets/OurTeam/5.png'
import image6 from '../../../assets/OurTeam/6.png'
import image7 from '../../../assets/OurTeam/7.png'
import image8 from '../../../assets/OurTeam/8.png'
import image9 from '../../../assets/OurTeam/9.png'
import image10 from '../../../assets/OurTeam/10.png'
import ShowTeam from './ShowTeam'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const OurTeam = () => {
    return (
        <div className="my-16">
            <h2 className="text-center text-3xl heading-font uppercase my-10">our team</h2>
            <div className='grid grid-cols-4 gap-4'>
                {
                    images.map((image, index) => <ShowTeam
                        key={index}
                        image={image}
                    ></ShowTeam>)
                }
            </div>
        </div>
    );
};

export default OurTeam;
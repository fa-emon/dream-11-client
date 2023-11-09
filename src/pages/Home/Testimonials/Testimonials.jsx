import image from '../../../assets/Testimonials/testimonials.jpg';
import { BiMessageRoundedDots } from 'react-icons/bi';

const Testimonials = () => {
    return (
        <div className='my-14 relative'>
            <img src={image} alt="" className="w-full h-full rounded-md" />
            <div className="absolute inset-0 bg-black opacity-70 rounded-md"></div>

            <div className='flex w-full absolute top-52 px-20'>
                <div className='w-1/2 bg-white me-10'>
                    <div className='px-6'>
                        <p className='text-5xl my-6'>
                            <BiMessageRoundedDots></BiMessageRoundedDots>
                        </p>
                        <p className='all-font text-justify'>Unleashing my sports passion, Dream-11, you have created a fantasy haven! Your platform turns every match into a strategic battlefield, making my victories even sweeter. Thank you for the adrenaline-pumping moments and the thrill of crafting my own dream team. Here is to many more triumphs together – Dream-11, where every fantasy becomes a reality!</p>
                        <p className='heading-font text-center my-8'>David Miller / <span className='all-font'>player</span></p>
                    </div>
                </div>

                <div className='w-1/2 bg-white'>
                    <div className='px-6'>
                        <p className='text-5xl my-6'>
                            <BiMessageRoundedDots></BiMessageRoundedDots>
                        </p>
                        <p className='all-font text-justify'>Thank you for making my Dream-11 experience truly extraordinary! Your platform has transformed the way I enjoy sports, and I cant wait to create more winning moments with your innovative features.A heartfelt thank you to Dream-11 for crafting an unmatched fantasy sports experience! Your platform has become my go-to for thrilling matchups and strategic gameplay. Keep making dreams come true!</p>
                        <p className='heading-font text-center my-8'>Glenn Maxwell / <span className='all-font'>player</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

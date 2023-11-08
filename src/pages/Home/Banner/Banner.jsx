import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../../assets/BannerImage/1.jpg';
import image2 from '../../../assets/BannerImage/2.jpg';
import image3 from '../../../assets/BannerImage/3.jpg';
import image4 from '../../../assets/BannerImage/4.jpg';
import image5 from '../../../assets/BannerImage/5.jpg';
import image6 from '../../../assets/BannerImage/6.jpg';

const customImageStyle = {
    height: '80vh',
    width: '100%',
    objectFit: 'cover',
};

const images = [image1, image2, image3, image4, image5, image6];

const Banner = () => (
    <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper my-10"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img className='rounded-md' style={customImageStyle} src={image} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>
    </>
);

export default Banner;

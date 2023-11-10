import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from '../../../../assets/Advertisement/1.jpg';
import image2 from '../../../../assets/Advertisement/2.jpg';
import image3 from '../../../../assets/Advertisement/3.jpg';

const AdvertiseBanner = () => {
    const images = [image1, image2, image3];

    return (
        <div className='mt-6'>
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
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} style={{ height: '80vh' }}>
                        <img src={image} alt={`Ad ${index + 1}`} className="w-full h-full object-cover rounded-md brightness-75" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AdvertiseBanner;

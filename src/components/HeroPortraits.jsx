import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import Avatar1 from "../assets/img/avatar/avatar (1).png";
import Avatar2 from "../assets/img/avatar/avatar (2).png";
import Avatar3 from "../assets/img/avatar/avatar (3).png";
import Avatar4 from "../assets/img/avatar/avatar (4).png";
import Avatar5 from "../assets/img/avatar/avatar (5).png";

import 'swiper/css';
import "swiper/css/effect-fade";

const Portraits = () => {
    return (
        <Swiper
            className="w-full h-full"
            spaceBetween={10}
            slidesPerView={1}
            modules={[EffectFade, Autoplay]}
            effect={"fade"}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide className='h-full'>
                <img src={Avatar1.src} alt="Self Portrait" className="hero-portrait" />
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <img src={Avatar2.src} alt="Self Portrait" className="hero-portrait" />
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <img src={Avatar3.src} alt="Self Portrait" className="hero-portrait" />
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <img src={Avatar4.src} alt="Self Portrait" className="hero-portrait" />
            </SwiperSlide>
            <SwiperSlide className='h-full'>
                <img src={Avatar5.src} alt="Self Portrait" className="hero-portrait" />
            </SwiperSlide>
        </Swiper>
    );
}

export default Portraits;
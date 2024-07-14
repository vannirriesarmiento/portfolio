import SkyBG from "./SkyBG";
import HeroSocial from "./HeroSocial";
import Portraits from "./HeroPortraits";

import Vector1 from "../assets/img/vector/vector (1).png";
import Vector2 from "../assets/img/vector/vector (2).png";

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/effect-fade";

const Hero = (props) => {

    const [showFirstTab, setshowFirstTab] = useState(true);
    const [swiper, setswiper] = useState(null);
    const today = new Date();
    const birthDateObj = new Date("2001-05-10");
    let age = 23;

    age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
        age--;
    }

    return (
        <div
            className="hero w-full relative flex justify-center items-center overflow-hidden"
        >
            <SkyBG />
            <div className="hero-main" id="hero">
                <img src={Vector1.src} alt="Decorative" className="hero-vector flower" />
                <img src={Vector2.src} alt="Decorative" className="hero-vector sparkle" />
                <div className={`hero-tabs ${showFirstTab ? '' : 'active'}`}>
                    <div className={`hero-tab first ${showFirstTab ? 'active' : ''}`} onClick={() => { swiper.slidePrev(); setshowFirstTab(true); }}>
                        <div className="hero-tab-icons">
                            <div className="hero-tab-icon circle"></div>
                            <div className="hero-tab-icon square"></div>
                            <div className="hero-tab-icon triangle"></div>
                        </div>
                        <span className="hidden sm:inline">Get to know me!</span>
                        <span className="inline sm:hidden">About Me</span>
                    </div>
                    <div className={`hero-tab ${showFirstTab ? '' : 'bg-transparent'}`} onClick={() => { swiper.slideNext(); setshowFirstTab(false); }}>
                        <span className="hidden sm:inline">Contact & Socials</span>
                        <span className="inline sm:hidden">Contact Me</span>
                    </div>
                </div>
                <div className="hero-body">
                    <Swiper
                        className="hero-swiper"
                        spaceBetween={10}
                        slidesPerView={1}
                        modules={[EffectFade]}
                        effect={"fade"}
                        onSwiper={(s) => {
                            setswiper(s);
                        }}
                    >
                        <SwiperSlide className="hero-swiper-slide">
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <div className="hero-portraits">
                                    <Portraits />
                                </div>
                                <div className="hero-content">
                                    <div className="hero-name">{props.name}</div>
                                    <div className="hero-title">{props.title}</div>
                                    <p className="md:hidden lg:block">I like to create & code!</p>
                                    <p className="text-justify">
                                        My full name's Mae Kristine Vannirrie Sarmiento, but I'd
                                        rather you just call me Van. I'm {age} years old. A full blown
                                        Filipina.The eldest in the family. I was born on the 10th of May 2001— making me a Taurean. 
                                        My hobbies include dancing, reading, and making art!
                                    </p>
                                    <p className="font-semibold text-justify lg:text-left">
                                        1+ years of experience. 10+ successful projects. 10+ happy
                                        clients.
                                    </p>
                                    <a className="hero-link mx-auto sm:m-0" href="#portfolio" id="view-all">
                                        View All My Works <span className="font-awesome-solid"></span>
                                        <div className="hero-link-underline"></div>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="hero-swiper-slide">
                            <div className="bg-white flex flex-col gap-6 xs:gap-4 md:gap-5 w-full">
                                <div className="hero-heading">Where to reach me?</div>
                                <div className="hero-socials">
                                    <HeroSocial name="Mobile" value="+971582994734" link="tel:+971582994734" icon="" color="peach" fa="font-awesome-solid" />
                                    <HeroSocial name="Email" value="sarmiento.mkv@gmail.com" link="mailto:sarmiento.mkv@gmail.com" icon="@" color="babyblue" fa="font-awesome-solid" />
                                    <HeroSocial name="Location" value="Al Nahda 2, Dubai, UAE" icon="" color="orange" fa="font-awesome-solid" />
                                    <HeroSocial name="Linkedin" value="linkedin.com/in/mae-kristine-vannirrie-sarmiento" link="https://www.linkedin.com/in/mae-kristine-vannirrie-sarmiento" icon="" color="babyblue" fa="font-awesome-brands" />
                                    <HeroSocial name="Github" value="github.com/vannirriesarmiento" link="https://www.github.com/vannirriesarmiento" icon="" color="grey" fa="font-awesome-brands" />
                                    <HeroSocial name="Dribbble" value="dribbble.com/vsarmiento" link="https://www.dribbble.com/vsarmiento" icon="" color="pink" fa="font-awesome-brands" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Hero;
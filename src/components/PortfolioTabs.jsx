import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import PortfolioContent from './PortfolioContent';

import 'swiper/css';
import "swiper/css/effect-fade";

import repro_img from "../assets/img/projects/repro.png";
import repro_admin_img from "../assets/img/projects/repro-admin.png";
import storkbeo_img from "../assets/img/projects/storkbeo.png";
import bevast from "../assets/img/projects/bevast.png";
import heremi from "../assets/img/projects/heremi.png";

import repro_vid from "../assets/vid/repro.webm";
import repro_admin_vid from "../assets/vid/repro-admin.webm";
import storkbeo_vid from "../assets/vid/storkbeo.webm";

import heremi2 from "../assets/img/projects/heremi (2).png";
import isleep from "../assets/img/projects/isleep.png";
import ool from "../assets/img/projects/ool.png";

const PortfolioTabs = () => {
    const [swiper, setswiper] = React.useState(null);
    const [tabClicked, settabClicked] = useState("green");

    const slideChange = (s) => {
        var swiperIndex = s.activeIndex;

        if (swiperIndex == 0) {
            settabClicked("green")
        } else if (swiperIndex == 1) {
            settabClicked("blue")
        } else {
            settabClicked("yellow")
        }
    }

    return (
        <>
            <div className='portfolio-tabs' data-aos="fade-up" data-aos-delay="200">
                <div className={`portfolio-tab green ${tabClicked == "green" ? "portfolio-tab-active" : ""}`} onClick={() => { swiper.slideTo(0); settabClicked("green"); }}>Apps</div>
                <div className={`portfolio-tab blue  ${tabClicked == "blue" ? "portfolio-tab-active" : ""}`} onClick={() => { swiper.slideTo(1); settabClicked("blue"); }}>UI UX</div>
                <div className={`portfolio-tab yellow ${tabClicked == "yellow" ? "portfolio-tab-active" : ""}`} onClick={() => { swiper.slideTo(2); settabClicked("yellow"); }}>Graphics</div>
            </div>
            <div className='relative w-full h-full pb-14'
                data-aos="fade-up" data-aos-delay="400">
                <div className='portfolio-gradient left'></div>
                <div className='portfolio-gradient right'></div>
                <div className='portfolio-navigations'>
                    <div className='portfolio-navigation prev'></div>
                    <div className='portfolio-navigation next'></div>
                </div>
                <Swiper
                    className="w-full h-full"
                    spaceBetween={5}
                    slidesPerView={1}
                    noSwiping={true}
                    noSwipingClass={'swiper-no-swiping'}
                    modules={[EffectFade]}
                    effect={"fade"}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: false,
                    }}
                    onSwiper={(s) => {
                        setswiper(s);
                    }}
                    onSlideChange={(s) => {
                        slideChange(s)
                    }}
                >
                    <SwiperSlide className='portfoliotab-swiper-slide'>
                        <PortfolioContent
                            option="apps"
                            data={[
                                {
                                    name: "Repro",
                                    stack: ["Dialogflow", "NodeJS", "ReactJS", "Firebase", "Render"],
                                    description: "A chatbot for young adults’ access to reproductive and sexual health. It bridges the gap between youths and their SRH through on-line chat conversation.",
                                    figma: "",
                                    github: "https://github.com/vannirriesarmiento/repro",
                                    demo: "https://repro-capstone.onrender.com/",
                                    mainUrl: repro_img,
                                    video: repro_vid
                                },
                                {
                                    name: "Repro Admin",
                                    stack: ["ReactJS", "Firebase"],
                                    description: "A comprehensive admin system for Repro. It provides a user-friendly dashboard to track incoming records and generates PDFs for healthcare workers.",
                                    figma: "",
                                    github: "https://github.com/vannirriesarmiento/repro-admin",
                                    demo: "https://admin-repro-capstone.web.app/",
                                    mainUrl: repro_admin_img,
                                    video: repro_admin_vid
                                },
                                {
                                    name: "Storkbeo",
                                    stack: ["HTML", "CSS", "VanillaJS", "Webflow"],
                                    description: "Discover your next favorite book today! Storkbeo's real-time search and filter features ensure you find the perfect read effortlessly.",
                                    figma: "https://www.figma.com/proto/ROau2INhaj3ZkUDbj35ce8/Storkbeo-Book-Shop?node-id=417-2&t=v7LIVDCjcQKhaCnE-1&scaling=min-zoom&content-scaling=fixed&page-id=414%3A2",
                                    github: "https://preview.webflow.com/preview/storkbeo?utm_medium=preview_link&utm_source=designer&utm_content=storkbeo&preview=6a630a92f4554e45a12c655316e103f8&workflow=preview",
                                    demo: "https://storkbeo.webflow.io/v1",
                                    video: storkbeo_vid,
                                    mainUrl: storkbeo_img
                                },
                                {
                                    name: "Bevast",
                                    stack: ["Dart", "Flutter"],
                                    description: "Made using Nuxify's Flirt Template. A collaborative concept project of a cutting-edge mobile banking application. Available in dark and light modes.",
                                    figma: "https://www.figma.com/proto/XcW4kBN2efnC4j1fq0KETd/Bevast?node-id=4-11&t=wCOsQlZ0N4jhYa1K-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
                                    github: "https://github.com/garcia-christian/mobile-banking",
                                    demo: "",
                                    mainUrl: bevast
                                },
                                {
                                    name: "Heremi",
                                    stack: ["Android-Native", "Postgresql"],
                                    description: "The ultimate health companion! Another collaboration project that's a solution for medicine adherence— a reminder app for your healthcare needs.",
                                    figma: "",
                                    github: "https://github.com/garcia-christian/heremiStartup",
                                    demo: "https://www.youtube.com/watch?v=0xwTPKQp9m0&feature=youtu.be&themeRefresh=1",
                                    mainUrl: heremi
                                }
                            ]} />
                    </SwiperSlide>
                    <SwiperSlide className='portfoliotab-swiper-slide'>
                        <PortfolioContent
                            option="uiux"
                            data={[
                                {
                                    name: "OOL: Educational Livestreaming Platform",
                                    description: "Experience a empowering educational journey with our concept UI design for an interactive livestreaming platform. An enhanced and streamlined learning solution that revolutionizes the way students engage with educational content.",
                                    dribble: "https://dribbble.com/shots/21686972-OOL-Educational-Livestreaming-Platform",
                                    mainUrl: ool
                                },
                                {
                                    name: "Heremi: All in One Solution",
                                    description: "Meet your ultimate health companion!\nThis innovative project brings you different features at once— a reminder, shopping, and consultation app tailored to meet your healthcare needs.",
                                    dribble: "https://dribbble.com/shots/21665552-Heremi-All-in-One-Solution",
                                    mainUrl: heremi2
                                },
                                {
                                    name: "iSleep: Expert Care for Peaceful Sleep",
                                    description: "An mhealth application in which the purpose of the application is to accommodate people who have been suffering with insomnia and other sleep-related problems. iSleep seeks to help and assist other people who have been experiencing sleep-related problem.",
                                    dribble: "https://dribbble.com/shots/24438857-iSleep-Expert-Care-for-Peaceful-Sleep",
                                    mainUrl: isleep
                                }
                            ]} />
                    </SwiperSlide>
                    <SwiperSlide className='portfoliotab-swiper-slide'>
                        <PortfolioContent
                            option="graphic" data={[
                                { mainUrl: "./graphics/graphic (1).jpg" },
                                { mainUrl: "./graphics/graphic (2).png" },
                                { mainUrl: "./graphics/graphic (3).png" },
                                { mainUrl: "./graphics/graphic (4).png" },
                                { mainUrl: "./graphics/graphic (5).png" },
                                { mainUrl: "./graphics/graphic (6).png" },
                                { mainUrl: "./graphics/graphic (7).png" },
                                { mainUrl: "./graphics/graphic (8).png" },
                                { mainUrl: "./graphics/graphic (9).png" },
                                { mainUrl: "./graphics/graphic (10).png" },
                                { mainUrl: "./graphics/graphic (11).png" },
                                { mainUrl: "./graphics/graphic (12).png" },
                                { mainUrl: "./graphics/graphic (13).png" },
                                { mainUrl: "./graphics/graphic (14).png" },
                                { mainUrl: "./graphics/graphic (15).png" },
                                { mainUrl: "./graphics/graphic (16).png" },
                                { mainUrl: "./graphics/graphic (17).png" },
                                { mainUrl: "./graphics/graphic (18).png" }
                            ]} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default PortfolioTabs;
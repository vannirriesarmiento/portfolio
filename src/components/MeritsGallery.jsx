import { useRef } from 'react';
import MeritsCard from "./MeritsCard";
import ImageViewer from 'awesome-image-viewer';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/effect-fade";

const Merits = () => {
    const viewerRef = useRef(null);
    const isMobile = window.innerWidth <= 1279;

    const certificates = [
        { mainUrl: "./certs/webflow101.png" },
        { mainUrl: "./certs/layouts1.png" },
        { mainUrl: "./certs/layouts2.png" },
        { mainUrl: "./certs/cmslvl1.png" },
        { mainUrl: "./certs/topcit.png" }
    ];

    const openImageViewer = (index) => {
        if (viewerRef.current) {
            new ImageViewer({
                images: certificates,
                currentSelected: index
            });
        }
    };

    if (isMobile) {
        return (
            <>
                <Swiper
                    className="w-full h-full"
                    data-aos="fade-up"
                    spaceBetween={10}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 10
                        },
                        481: {
                            slidesPerView: 1.2,
                            spaceBetween: 16
                        },
                        768: {
                            slidesPerView: 1.6,
                            spaceBetween: 30
                        },
                        992: {
                            slidesPerView: 1.8,
                            spaceBetween: 30
                        },
                        1170: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            centeredSlides: false
                        }
                    }}
                >
                    <SwiperSlide className='merit-swiper-slide'>
                        <MeritsCard onClick={() => { openImageViewer(0) }} title="Webflow 101" image="./certs/webflow101.png" />
                    </SwiperSlide>
                    <SwiperSlide className='merit-swiper-slide'>
                        <MeritsCard onClick={() => { openImageViewer(1) }}
                            title="Webflow Layouts at Level 1 "
                            image="./certs/layouts1.png"
                        />
                    </SwiperSlide>
                    <SwiperSlide className='merit-swiper-slide'>
                        <MeritsCard onClick={() => { openImageViewer(2) }}
                            title="Webflow Layouts at Level 2"
                            image="./certs/layouts2.png"
                        />
                    </SwiperSlide>
                    <SwiperSlide className='merit-swiper-slide'>
                        <MeritsCard onClick={() => { openImageViewer(3) }} title="Webflow CMS at Level 1" image="./certs/cmslvl1.png" />
                    </SwiperSlide>
                    <SwiperSlide className='merit-swiper-slide'>
                        <MeritsCard onClick={() => { openImageViewer(4) }} title="TOPCIT Level 2" image="./certs/topcit.png" />
                    </SwiperSlide>
                </Swiper>
                <div ref={viewerRef}></div>
            </>
        )
    } else {
        return (
            <>
                <MeritsCard onClick={() => { openImageViewer(0) }} delay="200" title="Webflow 101" image="./certs/webflow101.png" />
                <MeritsCard onClick={() => { openImageViewer(1) }} delay="400"
                    title="Webflow Layouts at Level 1 "
                    image="./certs/layouts1.png"
                />
                <MeritsCard onClick={() => { openImageViewer(2) }} delay="600"
                    title="Webflow Layouts at Level 2"
                    image="./certs/layouts2.png"
                />
                <MeritsCard onClick={() => { openImageViewer(3) }} delay="800" title="Webflow CMS at Level 1" image="./certs/cmslvl1.png" />
                <MeritsCard onClick={() => { openImageViewer(4) }} delay="1000" title="TOPCIT Level 2" image="./certs/topcit.png" />
                <div ref={viewerRef}></div>
            </>
        );
    }
}

export default Merits;
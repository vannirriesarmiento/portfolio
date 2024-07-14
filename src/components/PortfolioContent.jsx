import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import ImageViewer from 'awesome-image-viewer';
import Swal from 'sweetalert2';

import 'swiper/css';
import "swiper/css/effect-fade";

const PortfolioContent = (props) => {

    const uiux = [1, 2];
    const viewerRef = useRef(null);
    const isMobile = window.innerWidth <= 481;

    const openImageViewer = (index) => {
        if (viewerRef.current && props.option == "graphic") {
            new ImageViewer({
                images: props.data,
                currentSelected: index
            });
        }
    };

    const openPopUp = () => {
        Swal.fire({
            color: "#000000",
            title: "Whoops, sorry!",
            text: "The page you're looking for doesn't exist.",
            showCloseButton: true,
            showConfirmButton: false,
            customClass: {
                container: 'overflow-hidden',
                popup: 'swal-popup'
            },
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
    }

    if (props.option == "apps") {
        return (
            <Swiper
                className='h-full'
                slidesPerView={2.5}
                spaceBetween={30}
                initialSlide={2}
                centeredSlides={true}
                loop={true}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.portfolio-navigation.next',
                    prevEl: '.portfolio-navigation.prev'
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                        initialSlide: 0,
                        loop: false
                    },
                    481: {
                        slidesPerView: 1.2,
                        spaceBetween: 16,
                        initialSlide: 0,
                        loop: false
                    },
                    768: {
                        slidesPerView: 1.6,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 1.8,
                        spaceBetween: 30
                    },
                    1280: {
                        slidesPerView: 2.3,
                        spaceBetween: 30
                    },
                    1440: {
                        slidesPerView: 2.5,
                        spaceBetween: 30
                    }
                }}
            >
                <>
                    {props.data.map((item, index) => {
                        const videoRef = useRef(null);

                        const handleVideoMouseEnter = () => {
                            videoRef.current.play();
                        };

                        const handleVideoMouseLeave = () => {
                            videoRef.current.pause();
                        };

                        return (
                            <SwiperSlide key={index} className="portfolio-swiper-slide">
                                <div
                                    className='portfolio-card'
                                    onMouseEnter={handleVideoMouseEnter}
                                    onMouseLeave={handleVideoMouseLeave}
                                >
                                    {item.video ? (
                                        <div className='relative w-full h-full'>
                                            <img src={item.mainUrl.src} className='portfolio-app-image' alt={item.name} />
                                            {!isMobile &&
                                                <video
                                                    id={item.name}
                                                    ref={videoRef}
                                                    muted
                                                    loop
                                                    className='portfolio-app-vid'
                                                    playsInline=""
                                                >
                                                    <source src={item.video} type="video/webm" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            }
                                        </div>
                                    ) : (
                                        <img src={item.mainUrl.src} className='portfolio-card-image' alt={item.name} />
                                    )}

                                    <div className='portfolio-card-body'>
                                        <div className='portfolio-card-title'>{item.name}</div>
                                        <div className='flex flex-row flex-wrap gap-x-2 gap-y-0'>
                                            {item.stack && item.stack.map((techstack, index) => (
                                                <div key={index} className='portfolio-card-stack'>#{techstack}</div>
                                            ))}
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className='portfolio-card-links'>
                                        {item.figma ? (
                                            <a target="_blank" rel="noopener noreferrer" href={item.figma} className='portfolio-card-link'>Figma</a>
                                        ) : (
                                            <div className='portfolio-card-link' onClick={openPopUp}>Figma</div>
                                        )}
                                        {item.github ? (
                                            <a target="_blank" rel="noopener noreferrer" href={item.github} className='portfolio-card-link center'>Github</a>
                                        ) : (
                                            <div className='portfolio-card-link center' onClick={openPopUp}>Github</div>
                                        )}
                                        
                                        {item.demo ? (
                                            <a target="_blank" rel="noopener noreferrer" href={item.demo} className='portfolio-card-link'>demo</a>
                                        ) : (
                                            <div className='portfolio-card-link' onClick={openPopUp}>demo</div>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </>
            </Swiper>
        );
    } else if (props.option == "uiux") {
        return (
            <Swiper
                className='h-full'
                slidesPerView={2.5}
                spaceBetween={30}
                initialSlide={2}
                centeredSlides={true}
                loop={true}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.portfolio-navigation.next',
                    prevEl: '.portfolio-navigation.prev'
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                        initialSlide: 0,
                        loop: false
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
                    1280: {
                        slidesPerView: 2.3,
                        spaceBetween: 30
                    },
                    1440: {
                        slidesPerView: 2.5,
                        spaceBetween: 30
                    }
                }}
            >
                {isMobile ? (
                    <>
                        {props.data.map((item, index) => (
                            <SwiperSlide key={index}
                                className="portfolio-swiper-slide">
                                <div className='portfolio-card'>
                                    <img src={item.mainUrl.src} className='portfolio-card-image' alt={item.name} />
                                    <div className='portfolio-card-body'>
                                        <div className='portfolio-card-title'>{item.name}</div>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className='portfolio-card-links'>
                                        <a target="_blank" href={item.dribble} className='portfolio-card-link'>More on Dribbble</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </>
                ) : (
                    <>
                        {uiux.map((item, index) => props.data.map((item, index) => (
                            <SwiperSlide key={index}
                                className="portfolio-swiper-slide">
                                <div className='portfolio-card'>
                                    <img src={item.mainUrl.src} className='portfolio-card-image' alt={item.name} />
                                    <div className='portfolio-card-body'>
                                        <div className='portfolio-card-title'>{item.name}</div>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className='portfolio-card-links'>
                                        <a target="_blank" href={item.dribble} className='portfolio-card-link'>More on Dribbble</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )))}
                    </>
                )}
            </Swiper>
        );
    } else {
        return (
            <>
                <Swiper
                    className='portfolio-swiper'
                    slidesPerView={2.5}
                    spaceBetween={30}
                    initialSlide={2}
                    centeredSlides={true}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.portfolio-navigation.next',
                        prevEl: '.portfolio-navigation.prev'
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 10,
                            initialSlide: 0,
                            loop: false
                        },
                        480: {
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
                        1280: {
                            slidesPerView: 2.3,
                            spaceBetween: 30
                        },
                        1440: {
                            slidesPerView: 2.5,
                            spaceBetween: 30
                        }
                    }}
                >
                    {props.data.map((item, index) => (
                        <SwiperSlide key={index}
                            className="portfolio-swiper-slide">
                            <div className='portfolio-card' onClick={() => openImageViewer(index)}>
                                <div className='zoom-overlay'></div>
                                <img src={item.mainUrl} className='portfolio-graphics' alt={item.name} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div ref={viewerRef}></div>
            </>
        )
    }
}

export default PortfolioContent;
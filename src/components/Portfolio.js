import '../App.css';
import 'animate.css';
import 'aos/dist/aos.css';

import 'viewerjs/dist/viewer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useState, useRef, useEffect } from 'react';
import { isMobile, useMobileOrientation } from 'react-device-detect';
import { JustifiedGrid } from '@egjs/react-grid';

import Swal from 'sweetalert2';
import Viewer from 'viewerjs';
import AOS from 'aos';

import model from '../utils/model.js';

import Preloader from './Preloader';
import Divider from './Divider';
import Footer from './Footer';
import Header from './Header';
import MobileLandscape from './MobileLandscape';

const Portfolio = () => {

    const [showAll, setshowAll] = useState(true);
    const [showGraphicDesign, setshowGraphicDesign] = useState(false);
    const [showUIXUXDesign, setshowUIXUXDesign] = useState(false);
    const [showLoading, setshowLoading] = useState(true);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const sectionRef = useRef(null);

    const { isLandscape } = useMobileOrientation();

    const uiux = model.designs.slice(0, 2);
    const graphics = model.designs.slice(2);

    useEffect(() => {
        AOS.init();
    });

    useEffect(() => {
        setTimeout(() => {
            setshowLoading(false);
        }, 3000);
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrolltoBody = (e) => {
        e.preventDefault();

        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const returnGallery = (identifier, model, range) => {
        return (
            <JustifiedGrid className="imghover mb-4"
                gap={20} id="images"
                data-aos="fade" data-aos-duration="2000"
                defaultDirection={"end"}
                columnRange={range}
                rowRange={0}
                sizeRange={[200, 1000]}
                isCroppedSize={false}
                displayedRow={-1}
            >
                {model.map((design, index) => (
                    <figure className="section" key={index}>
                        <img src={design} className="sectionimage" alt="Graphic Design" onClick={() => openImageModal(identifier, index)} />
                    </figure>
                ))}
            </JustifiedGrid>
        );
    }

    const openImageModal = (identifier, index) => {
        const imglist = document.getElementById('images');
        const clone = imglist.cloneNode(true);

        if (identifier === 1 && index < 2) {
            var url = '';
            if (index === 0) {
                url = `https://dribbble.com/shots/21686972-OOL-Educational-Livestreaming-Platform`;
            } else if (index === 1) {
                url = `https://dribbble.com/shots/21665552-Heremi-All-in-One-Solution`;
            }
            window.open(url, '_blank');
        } else {
            if (identifier === 1 && index > 1) {
                clone.removeChild(clone.firstElementChild);
                clone.removeChild(clone.firstElementChild);
                index = index - 2;
            }
            const gallery = new Viewer(clone, {
                toolbar: false,
                movable: false,
                rotatable: false,
                title: 0,
                focus: false,
            });
            gallery.view(index);
        }
    }

    const openTextModal = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Whoops!',
            text: 'Demo isn\'t available for now, but will be soon.',
            icon: 'error',
            showCloseButton: true,
            showConfirmButton: false
        });
    }

    const isSmallSize = () => {
        if (isMobile) {
            return true;
        } else if (windowSize.width < 700) {
            return true;
        }
        return false;
    }

    const updateGallery = (text) => {
        if (text === 'all') {
            setshowAll(true);
            setshowUIXUXDesign(false);
            setshowGraphicDesign(false);
        } else if (text === 'uiux') {
            setshowAll(false);
            setshowUIXUXDesign(true);
            setshowGraphicDesign(false);
        } else if (text === 'graphic') {
            setshowAll(false);
            setshowUIXUXDesign(false);
            setshowGraphicDesign(true);
        }
    }

    if (showLoading) {
        return <Preloader />
    } else {
        if (isMobile && isLandscape) {
            return <MobileLandscape />
        } else {
            return (
                <>
                    <div className='background'>
                        <Header scrollToBody={e => scrolltoBody(e)} isSmallSize={isSmallSize} />

                        <div className='body-background'>
                            <div ref={sectionRef} className='body-container text-center pt3' data-aos="fade-up">

                                <br /><br />
                                <div className='my-5 py-4 mx-3'>
                                    <h1 className='bodytitle text-break' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                        My&nbsp;
                                        <span className='outlined'>
                                            Applications
                                        </span>
                                        &nbsp; Pool
                                    </h1>
                                    <p className='subtitle' data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000">
                                        Here are a few past development projects I've worked on.
                                    </p>
                                </div>

                                <div className="container w-75">
                                    {model.apps.map((app, index) => (
                                        <div className="row align-items-center" key={index}>
                                            <div className={`col-12 col-md-6 mb-5 ${(index % 2 !== 0 && !isSmallSize()) ? 'order-1' : 'order-0'}`} data-aos={`${isSmallSize() ? 'zoom-in' : 'fade-right'}`}>
                                                <img src={app.image} alt={app.name} className='w-75' />
                                            </div>
                                            <div className="col-12 col-md-6 mb-5" data-aos={`${isSmallSize() ? 'zoom-in' : 'fade-left'}`}>
                                                <h2 className='title mt-4'>{app.name}</h2>
                                                <ul className="nav justify-content-center">
                                                    {app.techstack.map((tech, techIndex) => (
                                                        <li className="chip nav-item m-1" key={techIndex}>{tech}</li>
                                                    ))}
                                                </ul>
                                                <p className='my-3'>{app.description}</p>
                                                {app.name !== 'Bevast' ? (
                                                    <a href={app.link} target='_blank' rel="noreferrer" className='button body-button'>View App</a>
                                                ) : (
                                                    <a href="/" onClick={e => openTextModal(e)} rel="noreferrer" className='button body-button'>View App</a>
                                                )}
                                                <a className='button body-button' href={app.github} target='_blank' rel="noreferrer">Github</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <br /><br />
                                <Divider />

                                <div className='container mt-5 pt-5 w-75'>
                                    <div className='my-5 py-4 mx-3'>
                                        <h1 className='bodytitle text-break' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                            Gallery of&nbsp;
                                            <span className='outlined'>
                                                Designs
                                            </span>
                                            &nbsp;I Did
                                        </h1>
                                        <p className='subtitle' data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000">Some of the works from my archives that I'm proud of.</p>

                                        <br /><br />

                                        <div className="toggle-button toggle-button--valo" data-aos="fade-up">
                                            <input id="toggleButton1" name="radio1" type="radio" defaultChecked="true" onChange={() => updateGallery('all')}></input>
                                            <label htmlFor="toggleButton1" data-text="All"></label>
                                            <div className="toggle-button__icon"></div>
                                        </div>
                                        <div className="toggle-button toggle-button--valo" data-aos="fade-up" data-aos-delay="300">
                                            <input id="toggleButton2" name="radio1" type="radio" onChange={() => updateGallery('uiux')}></input>
                                            <label htmlFor="toggleButton2" data-text="UI UX"></label>
                                            <div className="toggle-button__icon"></div>
                                        </div>
                                        <div className="toggle-button toggle-button--valo" data-aos="fade-up" data-aos-delay="500">
                                            <input id="toggleButton3" name="radio1" type="radio" onChange={() => updateGallery('graphic')}></input>
                                            <label htmlFor="toggleButton3" data-text="Visual"></label>
                                            <div className="toggle-button__icon"></div>
                                        </div>
                                    </div>

                                    {showAll &&
                                        returnGallery(1, model.designs, [1, 4])
                                    }
                                    {showUIXUXDesign &&
                                        returnGallery(1, uiux, [1, 3])
                                    }
                                    {showGraphicDesign &&
                                        returnGallery(0, graphics, [1, 3])
                                    }
                                </div>

                                <br /><br /><br />
                                <Footer />
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default Portfolio;

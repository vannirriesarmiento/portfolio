import '../App.css';
import 'animate.css';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useState, useRef, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { Carousel } from 'react-responsive-carousel';

import Swal from 'sweetalert2';
import AOS from 'aos';

import theme from '../config/theme.js';

const Portfolio = () => {

    const [showWebApp, setshowWebApp] = useState(true);
    const [showMobileApp, setshowMobileApp] = useState(false);
    const [showGraphicDesign, setshowGraphicDesign] = useState(false);
    const [showUIXUXDesign, setshowUIXUXDesign] = useState(false);
    const [showProfile, setshowProfile] = useState(true);
    const [showEducation, setshowEducation] = useState(false);

    const sectionRef = useRef(null);

    var apps = {
        'webApps': [
            { 'name': 'Repro', 'image': theme.reproChatbot, 'description': 'A chatbot for young adults’ access to reproductive and sexual health. It bridges the gap between youths and their SRH through on-line chat conversation.', 'link': 'https://repro-capstone.onrender.com/', 'github': 'https://github.com/vannirriesarmiento/repro', 'techstack': ['Dialogflow', 'Node JS', 'React JS', 'Firebase', 'Render'], },
            { 'name': 'Repro Admin', 'image': theme.reproAdmin, 'description': 'A comprehensive admin system for Repro. It provides a user-friendly dashboard to track incoming records and generates PDFs for healthcare workers.', 'link': 'https://admin-repro-capstone.web.app/', 'github': 'https://github.com/vannirriesarmiento/repro-admin', 'techstack': ['React JS', 'Firebase'], }
        ],
        'mobileApps': [
            { 'name': 'Bevast', 'image': theme.bevast, 'description': 'Made using Nuxify\'s Flirt Template. A collaborative concept project of a cutting-edge mobile banking application. Available in dark and light modes.', 'link': '', 'techstack': ['Dart', 'Flutter'], },
            { 'name': 'Heremi', 'image': theme.heremi, 'description': 'The ultimate health companion! Another collaboration project that\'s a solution for medicine adherence— a reminder app for your healthcare needs.', 'link': 'https://youtu.be/0xwTPKQp9m0', 'techstack': ['Android Native', 'PostgreSQL'] },
        ],
    };

    var designs = {
        'graphic': [theme.frame1, theme.frame2, theme.frame3, theme.frame4, theme.frame5],
        'uiux': [theme.heremi1, theme.heremi2, theme.heremi3, theme.heremi4, theme.heremi5, theme.heremi6, theme.heremi7, theme.ool1, theme.ool2, theme.ool3]
    };

    useEffect(() => {
        AOS.init();
    });

    const computeAge = () => {
        const today = new Date();
        const birthDate = new Date('2001-05-10');

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    const changeBody = (identifier) => {
        setshowWebApp(identifier === 'web' ? true : false);
        setshowMobileApp(identifier === 'mobile' ? true : false);
        setshowGraphicDesign(identifier === 'graphic' ? true : false);
        setshowUIXUXDesign(identifier === 'uiux' ? true : false);
    }

    const changeIntro = (e) => {
        e.preventDefault();

        setshowProfile(!showProfile);
        setshowEducation(!showEducation);
    }

    const scrolltoBody = (e) => {
        e.preventDefault();

        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const returnCategory = () => {
        if (showWebApp) {
            return 'webApps';
        } else if (showMobileApp) {
            return 'mobileApps';
        } else if (showGraphicDesign) {
            return 'graphic';
        } else {
            return 'uiux';
        }
    }

    const openModal = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Whoops!',
            text: 'Demo isn\'t available for now, but will be soon.',
            icon: 'error',
            confirmButtonText: 'Okay'
        });
    }

    return (
        <>
            <div className='intro-container flex mx-auto'>
                {showProfile &&
                    <div className='text-center'>
                        <img src={theme.avatar} alt="Self Portrait" className="avatar animate__animated animate__pulse" />
                        <h1 className='title' data-aos="fade-up" data-aos-duration="1000">My name's Vann!</h1>
                        <div className='intro mx-auto' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div>
                                My full name's Mae Kristine Vannirrie Sarmiento, but I'd rather you just call me using shorthands.
                                I'm {computeAge()} years old. The eldest in the family. I was born on the 10th of May 2001-- making me a Taurean.
                                My hobbies include dancing, reading, and making art!
                            </div>
                        </div>
                        <div className="justify-content-center mt-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            {!isMobile &&
                                <>
                                    <button className='button intro-nav' onClick={(e) => scrolltoBody(e)}>Projects&nbsp;<i className="bi bi-caret-down-fill"></i></button>
                                    <button className='button intro-nav' onClick={(e) => changeIntro(e)}>Education&nbsp;<i className="bi bi-mortarboard-fill"></i></button>
                                </>}
                            <span className='intro-icons align-middle'>
                                {isMobile &&
                                    <>
                                        <a href='/' onClick={(e) => scrolltoBody(e)}>
                                            <i className="greenbg bi bi-caret-down-fill"></i>
                                        </a>
                                        <a href='/' onClick={(e) => changeIntro(e)}>
                                            <i className="greenbg bi bi-mortarboard-fill"></i>
                                        </a>
                                    </>
                                }
                                <a href='https://www.linkedin.com/in/mae-kristine-vannirrie-sarmiento/' target='_blank' rel="noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a href="https://github.com/vannirriesarmiento" target='_blank' rel="noreferrer">
                                    <i className="bi bi-github"></i>
                                </a>
                                <a href="https://youtube.com/@vsarmiento" target='_blank' rel="noreferrer">
                                    <i className="bi bi-youtube"></i>
                                </a>
                                <a href="https://dribbble.com/vsarmiento" target='_blank' rel="noreferrer">
                                    <i className="bi bi-dribbble"></i>
                                </a>
                                <a href="mailto:sarmiento.mkv@gmail.com">
                                    <i className="bi bi-envelope-fill"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                }
                {showEducation &&
                    <div className='d-flex flex-column mb-3' data-aos="flip-left">
                        <div className='d-flex justify-content-between'>
                            <button className='m-2 button intro-nav' onClick={changeIntro}>
                                <i className="bi bi-caret-left-fill"></i>{!isMobile && <>&nbsp;Back</>}
                            </button>
                        </div>
                        <div className='intro intro-box p-0'>
                            {!isMobile && <img src={theme.gradpic} class="avatar w-50 float-end" alt="Graduation Portrait" />}
                            <div className='pt-2 px-3'>
                                {!isMobile && <>
                                    <h5 className='title subtitle my-1'>Higher Secondary</h5>
                                    <p><b>Davao Doctors College Inc.</b>
                                        <br />(2017-2019)
                                        <br />General Academic Strand
                                    </p>
                                </>}
                                <h5 className='title subtitle my-1'>Tertiary</h5>
                                <p><b>University of the Immaculate Conception</b>
                                    <br />(2019-2023)
                                    <br />BS in Information Technology
                                    <br />Specialized in Healthcare Technologies
                                </p>
                                <b>AWARDS</b>
                                <p><i>Cum Laude</i>, <i>Special Talent</i>, <i>Philippine Startup Challenge Nationals</i>, and <i>Philippine Startup Challenge Regionals</i> (Student Category)</p>
                                <b>CERTIFICATION</b><br />
                                TOPCIT Level II (Practical Competency Test)
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div ref={sectionRef} className='body-container' data-aos="fade-up">
                <div className='body-container-padding container-fluid'>
                    {isMobile ? (
                        <>
                            <div className="d-flex align-content-between flex-wrap justify-content-center">
                                <h1 className='title mt-5' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">My Projects</h1>
                                <div className="d-flex justify-content-between" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                    <div className='body-nav body-nav-mobile' onClick={() => changeBody('web')}>Web App</div>
                                    <div className='body-nav body-nav-mobile' onClick={() => changeBody('mobile')}>Mobile App</div>
                                    <div className='body-nav body-nav-mobile' onClick={() => changeBody('graphic')}>Graphic Design</div>
                                    <div className='body-nav body-nav-mobile' onClick={() => changeBody('uiux')}>UI UX Design</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="d-flex justify-content-between align-items-center mx-5">
                            <h1 className='title' data-aos="fade-right" data-aos-delay="300">My Projects</h1>
                            <div className='d-flex justify-content-end' data-aos="fade-left" data-aos-delay="300">
                                <div className='body-nav body-nav-web' onClick={() => changeBody('web')}>Web App</div>
                                <div className='body-nav body-nav-web' onClick={() => changeBody('mobile')}>Mobile App</div>
                                <div className='body-nav body-nav-web' onClick={() => changeBody('graphic')}>Graphic Design</div>
                                <div className='body-nav body-nav-web' onClick={() => changeBody('uiux')}>UI UX Design</div>
                            </div>
                        </div>
                    )}

                    <div className='px-5 pt-2 mx-4'>
                        <div className='row animate__animated animate__fadeIn '>
                            {(showWebApp || showMobileApp) &&
                                <>
                                    {apps[returnCategory()].map((app, index) => (
                                        <div className="col text-center py-4 my-3" key={index} data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                                            {isMobile ?
                                                (
                                                    <img src={app.image} alt={app.name} className='img-fluid' />
                                                ) : (
                                                    <img src={app.image} alt={app.name} className='img-fluid w-50' />
                                                )}
                                            <h2 className='title mt-4'>{app.name}</h2>
                                            {app.techstack.map((tech, techIndex) => (
                                                <span className="badge text-bg-warning mx-1" key={techIndex}>{tech}</span>
                                            ))}
                                            {isMobile ? <p className='my-3'>{app.description}</p> : <p className='mx-5 my-3'>{app.description}</p>}
                                            {showWebApp ?
                                                <>
                                                    <a className='button body-button' href={app.link} target='_blank' rel="noreferrer">View App</a>
                                                    <a className='button body-button' href={app.github} target='_blank' rel="noreferrer">Github</a>
                                                </> :
                                                <a className='button body-button' href='/' onClick={(e) => openModal(e)}>View App</a>}
                                        </div>
                                    ))}
                                </>}
                        </div>
                    </div>
                </div>
                {(showGraphicDesign || showUIXUXDesign) &&
                    <Carousel className='animate__animated animate__fadeIn text-center mx-auto p-0' autoPlay={true} infiniteLoop={true}>
                        {designs[returnCategory()].map((design, index) => (
                            <div key={index}>
                                <img src={design} alt="Design" />
                            </div>
                        ))}
                    </Carousel>
                }
            </div>
            <footer>
                <div className="scroll-top">
                    <b onClick={scrollToTop}><i class="bi bi-caret-up-fill"></i></b>
                </div>
            </footer>

        </>
    );
}

export default Portfolio;

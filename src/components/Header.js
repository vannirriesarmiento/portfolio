
import { useState, useEffect } from 'react';
import { isSafari } from 'react-device-detect';

import '../App.css';

import theme from '../utils/theme.js';
import model from '../utils/model';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = ({ scrollToBody, isSmallSize }) => {

    const [currentImage, setCurrentImage] = useState(0);
    const [showEducation, setshowEducation] = useState(false);
    const [showProfile, setshowProfile] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % model.images.length);
            }, 500);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const changeIntro = (e) => {
        e.preventDefault();

        setshowProfile(!showProfile);
        setshowEducation(!showEducation);
    }

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
    

    return (
        <>
            <div className='intro-container flex mx-auto'>
                {showProfile &&
                    <div className='text-center'>
                        <div className="image-stack animate__animated animate__pulse">
                            <img src={theme.float1} alt="Border" className={`avatar image-ontop ${isSafari ? 'pulse-animate':'animate__animated animate__pulse animate__slow animate__infinite infinite'}`} />
                            <img src={theme.float2} alt="Border" className={`avatar image-ontop ${isSafari ? 'pulse-animate':'animate__animated animate__pulse animate__slow animate__infinite infinite'}`} />
                            <img src={model.images[currentImage]} alt="Avatar" className="avatar round" />
                        </div>
                        <h1 className='title' data-aos="fade-up" data-aos-duration="1000">I like to Create & Code!</h1>
                        <div className='intro mx-auto' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div>
                                My full name's Mae Kristine Vannirrie Sarmiento, but I'd rather you just call me Vann.
                                I'm {computeAge()} years old. The eldest in the family. I was born on the 10th of May 2001-- making me a Taurean.
                                My hobbies include dancing, reading, and making art!
                            </div>
                        </div>
                        <div className="justify-content-center mt-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            {!isSmallSize() &&
                                <>
                                    <button type="button" className='button intro-nav' onClick={scrollToBody}>Projects&nbsp;<i className="bi bi-caret-down-fill"></i></button>
                                    <button type="button" className='button intro-nav' onClick={(e) => changeIntro(e)}>Education&nbsp;<i className="bi bi-mortarboard-fill"></i></button>
                                </>
                            }
                            <span className='intro-icons align-middle'>
                                {isSmallSize() &&
                                    <>
                                        <a href='/' onClick={scrollToBody}>
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
                                <i className="bi bi-caret-left-fill"></i>{!isSmallSize() && <>&nbsp;Back</>}
                            </button>
                        </div>
                        <div className='intro intro-box p-0'>
                            {!isSmallSize() && <img src={theme.gradpic} className="img-fluid w-50 float-end" alt="Graduation Portrait" />}
                            <div className='pt-2 px-3'>
                                {!isSmallSize() && <>
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
        </>
    );

}

export default Header;
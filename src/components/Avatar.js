
import { useState, useEffect } from 'react';

import '../App.css';

import theme from '../utils/theme.js';
import model from '../utils/model';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Avatar = () => {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % model.images.length);
            }, 500);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="image-stack animate__animated animate__pulse">
            <img src={theme.float1} alt="Border" className="avatar image-ontop animate__animated animate__pulse animate__slow animate__infinite infinite" />
            <img src={theme.float2} alt="Border" className="avatar image-ontop animate__animated animate__pulse animate__slower animate__infinite infinite" />
            <img src={model.images[currentImage]} alt="Avatar" className="avatar round" />
        </div>
    );

}

export default Avatar;
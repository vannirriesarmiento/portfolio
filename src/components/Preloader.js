
import '../App.css';

import theme from '../utils/theme.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Preloader = () => {

    return (
        <>
            <div className='preloader-bg flex'>
                <img src={theme.logo} className='logo animate__animated animate__pulse animate__infinite infinite' alt='Logo' />
            </div>
        </>
    );

}

export default Preloader;
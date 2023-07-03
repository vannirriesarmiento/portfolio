
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { isMobile, useMobileOrientation } from 'react-device-detect';

const MobileLandscape = () => {

    const { isLandscape } = useMobileOrientation();

    if (isMobile && isLandscape) {
        return (
            <div className='background'>
                <div className='intro-container flex mx-auto p-5'>
                    <div className='intro'>
                        <p className='title'>Whoops!</p>
                        Sorry about that. Website isn't available in this view as of the moment. Stay tuned for improvements soon!
                    </div>
                </div>
            </div>
        );
    }

}

export default MobileLandscape;
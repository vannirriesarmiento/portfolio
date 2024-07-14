import heroBGvideo from "../assets/vid/hero-bg.webm";

const SkyBG = () => {
    let heroBGphoto = "/hero-bg.png";

    return (
        <div
            data-poster-url={heroBGphoto}
            data-video-urls={heroBGvideo}
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            className="hero-bg"
        >
            <video autoPlay muted loop playsInline="" id="hero-bg" style={{ backgroundImage: `url(${heroBGphoto})` }}
                data-wf-ignore="true"
                data-object-fit="cover">
                <source src={heroBGvideo} type="video/webm" />
            </video>
        </div >
    );
}

export default SkyBG;
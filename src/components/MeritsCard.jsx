const MeritsCard = (props) => {
    if (props.delay) {
        return (
            <div className="merit-card" onClick={props.onClick} data-aos="fade-zoom-in" data-aos-delay={props.delay}>
                <div className='zoom-overlay'></div>
                <div className="merit-card-title">{props.title}</div>
                <img src={props.image} alt={props.title} className="merit-card-body" />
            </div>
        );
    } else {
        return (
            <div className="merit-card" onClick={props.onClick}>
                <div className='zoom-overlay'></div>
                <div className="merit-card-title">{props.title}</div>
                <img src={props.image} alt={props.title} className="merit-card-body" />
            </div>
        );
    }
}

export default MeritsCard;
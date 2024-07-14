const HeroSocial = (props) => {
    let heroBGphoto = "/hero-bg.png";

    if(props.link) {
        return (
            <a className="hero-social" href={props.link} target="_blank">
                <div className={`hero-social-icon ${props.color} ${props.fa}`}>{props.icon}</div>
                <div className="flex flex-col">
                    <p className="font-semibold uppercase">{props.name}</p>
                    <p>{props.value}</p>
                </div>
            </a>
        );
    } else {
        return (
            <div className="hero-social">
                <div className={`hero-social-icon ${props.color} ${props.fa}`}>{props.icon}</div>
                <div className="flex flex-col">
                    <p className="font-semibold uppercase">{props.name}</p>
                    <p>{props.value}</p>
                </div>
            </div>
        );
    }
}

export default HeroSocial;
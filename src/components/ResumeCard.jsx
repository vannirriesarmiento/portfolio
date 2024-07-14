const ResumeCard = (props) => {
    return (
        <div className="work-experience" data-aos="fade-zoom-in">
            <div className="flex flex-row gap-4 place-content-between">
                <h4>{props.company}</h4>
                <h4 className="text-right">{props.year}</h4>
            </div>
            <ul className="text-justify">
                {props.list.map((item, index) => (
                    <li key={index}  dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>
        </div>
    );
}

export default ResumeCard;
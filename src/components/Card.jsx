
function Card(props) {
    const { title, author, year, language, country, imageLink } = props.data;
    const { click, exist } = props;
    return (
        <div className="card" onClick={handleRedirect}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">[title]</h5>
                    <i onClick={() => { click(props.data, exist) }} className={`${exist ? 'fa-solid' : 'fa-regular'} fa-star`} style={{ color: 'orange', cursor: 'pointer', fontSize: '20px' }}></i>
                </div>
                <h6 className="card-subtitle mb-2 text-body-secondary">{author}</h6>
                <p className="card-text">[language]</p>
                <p className="card-text">[country]</p>
                <p className="card-text">[year]</p>
            </div>
        </div>
    )
}

export default Card
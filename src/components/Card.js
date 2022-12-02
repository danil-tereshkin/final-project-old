function Card(props) {
    return (
        <div className="card">
            <img className="cardImage" src={props.image} alt="" />
            <h2>{props.title}</h2>
            <div className="cardDescription">{props.description}</div>
            <div className="cardBottom">
                <div>
                    <span>Цена: </span>
                    <b>{props.price}</b>
                </div>
                <button className="cardAddToCart">
                    Купить
                </button>
            </div>
        </div>
    );
}

export default Card;
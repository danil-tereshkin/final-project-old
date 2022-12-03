import styles from './Card.module.scss';

function Card(props) {

    const onClickAddToCartButton = () => {
        alert(props.title);
    }

    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={props.image} alt="" />
            <h2>{props.title}</h2>
            <div className={styles.cardDescription}>{props.description}</div>
            <div className={styles.cardBottom}>
                <div>
                    <span>Цена: </span>
                    <b>{props.price}</b>
                </div>
                <button className={styles.cardAddToCart} onClick={onClickAddToCartButton}>
                    Купить
                </button>
            </div>
        </div>
    );
}

export default Card;
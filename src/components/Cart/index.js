import styles from './Cart.module.scss';

function Cart() {
    return (
        <div style={{ display: "none" }} className={styles.overlay}>
            <div className={styles.cart}>
                <h2>Корзина</h2>
                <div className={styles.cartItems}>
                    <div className={styles.cartItem}>
                        <img className={styles.cartItemImage} width={75} src="img/foto1.jpg" />
                        <div>
                            <p>Футболка USA</p>
                            <b>1190</b>
                        </div>
                        <img className={styles.cartItemRemove} width={27} height={27} src="img/remove.svg" alt="Remove" />
                    </div>
                    <div className={styles.cartItem}>
                        <img className={styles.cartItemImage} width={75} src="img/foto1.jpg" />
                        <div>
                            <p>Футболка USA</p>
                            <b>1190</b>
                        </div>
                        <img className={styles.cartItemRemove} width={27} height={27} src="img/remove.svg" alt="Remove" />
                    </div>
                    <div className={styles.cartItem}>
                        <img className={styles.cartItemImage} width={75} src="img/foto1.jpg" />
                        <div>
                            <p>Футболка USA</p>
                            <b>1190</b>
                        </div>
                        <img className={styles.cartItemRemove} width={27} height={27} src="img/remove.svg" alt="Remove" />
                    </div>
                </div>
                <div className={styles.cartOverall}>
                    <div className={styles.cartOverallPrice}>
                        <span>Итого</span>
                        <b>2380</b>
                    </div>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>

    );
}

export default Cart;
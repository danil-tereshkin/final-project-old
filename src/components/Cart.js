function Cart() {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="cart">
                <h2>Корзина</h2>
                <div className="cartItems">
                    <div className="cartItem">
                        <img className="cartItemImage" width={75} src="img/foto1.jpg" />
                        <div>
                            <p>Футболка USA</p>
                            <b>1190</b>
                        </div>
                        <img className="cartItemRemove" width={27} height={27} src="img/remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem">
                        <img className="cartItemImage" width={75} src="img/foto1.jpg" />
                        <div>
                            <p>Футболка USA</p>
                            <b>1190</b>
                        </div>
                        <img className="cartItemRemove" width={27} height={27} src="img/remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem">
                        <img className="cartItemImage" width={75} src="img/foto1.jpg" />
                        <div>
                            <p>Футболка USA</p>
                            <b>1190</b>
                        </div>
                        <img className="cartItemRemove" width={27} height={27} src="img/remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem">
                        <img className="cartItemImage" width={75} src="img/foto1.jpg" />
                        <div>
                            <p>Футболка USA</p>
                            <b>1190</b>
                        </div>
                        <img className="cartItemRemove" width={27} height={27} src="img/remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem">
                        <img className="cartItemImage" width={75} src="img/foto1.jpg" />
                        <div>
                            <p>Футболка USA</p>
                            <b>1190</b>
                        </div>
                        <img className="cartItemRemove" width={27} height={27} src="img/remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem">
                        <img className="cartItemImage" width={75} src="img/foto1.jpg" />
                        <div>
                            <p>Футболка USA</p>
                            <b>1190</b>
                        </div>
                        <img className="cartItemRemove" width={27} height={27} src="img/remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem">
                        <img className="cartItemImage" width={75} src="img/foto1.jpg" />
                        <div>
                            <p>Футболка USA</p>
                            <b>1190</b>
                        </div>
                        <img className="cartItemRemove" width={27} height={27} src="img/remove.svg" alt="Remove" />
                    </div>
                </div>
                <div className="cartOverall">
                    <div className="cartOverallPrice">
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
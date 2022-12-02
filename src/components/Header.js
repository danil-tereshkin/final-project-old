function Header() {
    return (
        <header className="header">
        <div className="headerLeft">
          <img width={139} height={25} src="img/logo.svg" />
        </div>
        <ul className="headerRight">
          <li>
            <img width={27} height={27} src="img/telephone1.svg" />
            <span>+7(495)111-22-33</span>
          </li>
          <li>
            <img width={24} height={24} src="img/cart1.svg" />
          </li>
        </ul>
      </header>
    );
}

export default Header;
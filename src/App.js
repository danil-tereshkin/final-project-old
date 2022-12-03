import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';

const arr = [
  {
    title: "Футболка USA",

  }
]

function App() {
  const [arr, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((object) => {
        setProducts(object);
      })
  }, []);

  return (
    <div className="App">
      <Cart />
      <Header />
      <div className="content">
        <div className="searchBlock">
          <h1>Магазин</h1>
          <div className="contentSearch">
            <img width={23} height={23} src="img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="wrapper">
          {arr.map((object) => (
          <Card
            key={object.id}
            title={object.title}
            price={object.price}
            description={object.description}
            image={object.image}
          />
          ))}
        </div>
      </div>

    </div>

  );
}

export default App;

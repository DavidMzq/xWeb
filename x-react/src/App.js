import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://alexisplantin.fr/assets/images/prometheus-grafana/prometheus-grafana.png',
  imageSize_weight: 700,
  imageSize_height: 180
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

function MyButton({ count, onClick }) {
  // const [count, setCount] = useState(0);
  return (
    <button onClick={onClick}>
      I'm a button<br></br>
      Clicked {count} times
      {/* I'm a button */}
    </button>
  );
  // function handleClick() {
  //   setCount(count + 1);
  //   alert('You clicked me!');
  // }
}

function MyButton2() {
  const [count2, setCount] = useState(0);
  return (
    <button onClick={handleClick}>
      I'm a button<br></br>
      Clicked {count2} times
      {/* I'm a button */}
    </button>
  );
  function handleClick() {
    setCount(count2 + 1);
    alert('You clicked me!');
  }
}

function App() {
  const [count, setCount] = useState(0);
  function handleClick() { 
    setCount(count + 1); 
    alert('You clicked me!');
  } 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      <div>
      <h1>{user.name}</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton2 />
      <ShoppingList />
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize_weight,
          height: user.imageSize_height 
        }}
        
      />
       </div>
    </div>
  );
}

export default App;

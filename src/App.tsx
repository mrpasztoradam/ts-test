import React from 'react';
import './App.css';
import TextImage from './components/TextImage';
import Card from './components/Card';
import { useState, useEffect } from 'react';

let TestData = [
  {
    fact: 'jkdsfélakjdklfjaklfjéalj',
    length: 30,
  },
  {
    fact: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, doloribus nisi! Fugiat corporis tempore quas vel at dicta facilis. Dignissimos fugiat possimus nisi odio iste quod nemo ipsa totam tempore eveniet ut molestiae beatae, ab veniam, repellendus ad libero dolor ipsum error numquam consequatur reprehenderit aperiam pariatur voluptates! Ea, corrupti?',
    length: 300,
  },
  {
    fact: 'Sit amet consectetur adipisicing elit. Dolorem, doloribus nisi! Fugiat corporis tempore quas vel at dicta facilis. Dignissimos fugiat possimus nisi odio iste quod nemo ipsa totam tempore eveniet ut molestiae beatae, ab veniam, repellendus ad libero dolor ipsum error numquam consequatur reprehenderit aperiam pariatur voluptates! Ea, corrupti?',
    length: 400,
  },
];

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://catfact.ninja/fact`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <nav>navbar</nav>
        <div id="sidebar">Sidebar</div>
        <div id="content1">
          <ul>
            {TestData.map((item) => (
              <li>
                <Card data={item}></Card>
              </li>
            ))}
          </ul>
        </div>
        {/* <div id="content1"></div>
        <div id="content2">
          <TextImage
            title="Hello There!"
            imgSrc="https://placehold.co/250"
          ></TextImage>
        </div>
        <div id="content3">
          <TextImage
            title="Hello There!"
            imgSrc="https://placehold.co/250"
          ></TextImage>
        </div> */}
        <div id="bigcontent">{data && <Card data={data}></Card>}</div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import TextImage from './components/TextImage';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import CardContainer from './components/CardContainer';

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
        <div id="card-container">
          <CardContainer />
        </div>
        <div id="bigcontent">{data && <Card data={data}></Card>}</div>
      </div>
    </div>
  );
}

export default App;

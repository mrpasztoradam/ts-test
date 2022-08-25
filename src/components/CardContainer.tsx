import React, { useEffect, useState } from 'react';
import Card from './Card';

type Unis = {
  domains?: string[];
  alpha_two_code?: string;
  country?: string;
  web_pages?: string[];
  name: string;
};

const CardContainer = () => {
  const [unis, setUnis] = useState([]);
  const [error, setError] = useState('');

  const fetchData = () => {
    setError('');
    fetch('http://universities.hipolabs.com/search?country=hungary')
      .then((response) => {
        // If the HTTP response is 2xx then it response.ok will have a value of true
        if (response.ok) {
          return response.json();
        } else {
          // If the API responds meaningful error message,
          // then you can get it by calling response.statusText
          throw new Error('Sorry something went wrong');
        }
      })
      .then((data) => {
        console.log(data);
        setUnis(data);
      })
      .catch((error) => {
        // It is always recommended to define the error messages
        // in the client side rather than simply relying on the server messages,
        // since server messages might not make sense to end user most of the time.
        setError(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {unis.length > 0 &&
        unis.map((university: Unis, index) => (
          <div className="card" key={index}>
            <Card name={university.name} id={index}></Card>
          </div>
        ))}
    </>
  );
};

export default CardContainer;

import React, { Suspense } from 'react';
import ProductCard from '../components/productCard';
import fetchData from '../utils/fetchData';
import '../styles/main.css';

const apiData = fetchData('http://127.0.0.1:5000/api');

const Main = () => {
  const data = apiData.read();
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div className="container">
        <h1>🌽 Node Farm 🥦</h1>
        <div className="cards-container">
          {data.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default Main;

import React, { Suspense } from "react";
import Product from "../components/Product";
import fetchData from "../utils/fetchData";
import "../styles/main.css";

const apiData = fetchData("https://react-node-farm.herokuapp.com/api");

const Products = () => {
  const data = apiData.read();
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div className="container">
        <h1>🌽 Node Farm 🥦</h1>
        <div className="cards-container">
          {data.map((item, index) => (
            <Product item={item} key={index} />
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default Products;

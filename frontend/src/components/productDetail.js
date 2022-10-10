import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  return (
    <div className="container">
      <h1>🌽 Node Farm 🥦</h1>
      <figure className="product">
        {location.state.organic && (
          <div className="product__organic {%NOT_ORGANIC%}">
            <h5>Organic</h5>
          </div>
        )}
        <a href="/" className="product__back">
          <span className="emoji-left">👈</span>Back
        </a>
        <div className="product__hero">
          <span className="product__emoji product__emoji--1">
            {location.state.image}
          </span>
          <span className="product__emoji product__emoji--2">
            {location.state.image}
          </span>
          <span className="product__emoji product__emoji--3">
            {location.state.image}
          </span>
          <span className="product__emoji product__emoji--4">
            {location.state.image}
          </span>
          <span className="product__emoji product__emoji--5">
            {location.state.image}
          </span>
          <span className="product__emoji product__emoji--6">
            {location.state.image}
          </span>
          <span className="product__emoji product__emoji--7">
            {location.state.image}
          </span>
          <span className="product__emoji product__emoji--8">
            {location.state.image}
          </span>
          <span className="product__emoji product__emoji--9">
            {location.state.image}
          </span>
        </div>
        <h2 className="product__name">{location.state.productName}</h2>
        <div className="product__details">
          <p>
            <span className="emoji-left">🌍</span>From {location.state.from}
          </p>
          <p>
            <span className="emoji-left">❤️</span>
            {location.state.nutrients}
          </p>
          <p>
            <span className="emoji-left">📦</span>
            {location.state.quantity}
          </p>
          <p>
            <span className="emoji-left">🏷️</span>
            {location.state.price} €
          </p>
        </div>
        <a className="product__link">
          <span className="emoji-left">🛒</span>
          <span>Add to shopping card {location.state.price} €</span>
        </a>
        <p className="product__description">{location.state.description}</p>
      </figure>
    </div>
  );
};

export default ProductDetail;

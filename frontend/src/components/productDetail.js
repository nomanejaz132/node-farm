import React from 'react';

const ProductDetail = () => {
  return (
    <div className="container">
      <h1>🌽 Node Farm 🥦</h1>
      <figure className="product">
        <div className="product__organic {%NOT_ORGANIC%}">
          <h5>Organic</h5>
        </div>
        <a href="/" className="product__back">
          <span className="emoji-left">👈</span>Back
        </a>
        <div className="product__hero">
          <span className="product__emoji product__emoji--1">
            Product Image
          </span>
        </div>
        <h2 className="product__name">Product Name</h2>
        <div className="product__details">
          <p>
            <span className="emoji-left">🌍</span>From Country
          </p>
          <p>
            <span className="emoji-left">❤️</span>Nutrients
          </p>
          <p>
            <span className="emoji-left">📦</span>Quantity
          </p>
          <p>
            <span className="emoji-left">🏷</span>Price in €
          </p>
        </div>
        <a href="#42322" className="product__link">
          <span className="emoji-left">🛒</span>
          <span>Add to shopping card Price in €</span>
        </a>
        <p className="product__description">Product Description</p>
      </figure>
    </div>
  );
};

export default ProductDetail;

import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  console.log(item);
  return (
    <figure className="card">
      <div className="card__emoji">{item.image}</div>
      <div className="card__title-box">
        <h2 className="card__title">{item.productName}</h2>
      </div>
      <div className="card__details">
        {item.organic && (
          <div className="card__detail-box">
            <h6 className="card__detail card__detail--organic">Organic!</h6>
          </div>
        )}

        <div className="card__detail-box">
          <h6 className="card__detail">{item.quantity} per 📦</h6>
        </div>

        <div className="card__detail-box">
          <h6 className="card__detail card__detail--price">{item.price} €</h6>
        </div>
      </div>
      <Link state={item} className="card__link" to={`product/${item.id}`}>
        <span>
          Detail <i className="emoji-right">👉</i>
        </span>
      </Link>
    </figure>
  );
};

export default Product;

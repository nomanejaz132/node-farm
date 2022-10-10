import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/productDetail';
import '../styles/detail.css';

const Detail = () => {
  const [details, setDetails] = useState([]);
  let { id } = useParams();

  return (
    <div>
      <ProductDetail />
    </div>
  );
};

export default Detail;

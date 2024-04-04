// Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from './store';
import './product.css'

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity({ productId: product.id }));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity({ productId: product.id }));
  };

  return (
    <div className="col-12 d-flex justify-content-center align-items-center ">
      <div className="card mb-3"
        style={{
          width: "80%", height: "80%", borderRadius: "20px",
          backgroundColor: '#EBEEEA', padding: '20px',  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
        }}>

        <div className="custom-card-img" style={{ minWidth: '200px' }}>
          <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
        </div>
        <div className="card-body" style={{ padding: '1rem' }}>
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>

        </div>

        <div className="custom-card-details-and-actions" style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price: ${product.price}</li>
            <li className="list-group-item">Discount: {product.discountPercentage}%</li>
            <li className="list-group-item">Rating: {product.rating}</li>
            <li className="list-group-item">Stock: {product.stock}</li>
            <li className="list-group-item">Quantity: {product.quantity}</li>
          </ul>

          <div className="card-body" style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <button onClick={handleIncrease} className="btn btn-primary">+</button>
              <button onClick={handleDecrease} className="btn btn-secondary">-</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Product;

import React, { useState } from 'react';
import Product from './products';

const ProductList = ({ data }) => {
  const [count, setCount] = useState(0);

  const updateCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="container">
      <div className="row">
        {data.map(product => (
          <Product key={product.id} product={product} updateCount={updateCount} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

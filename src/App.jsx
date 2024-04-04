// App.js
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './components/store';
import Product from './components/product';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="mt-3">Product List</h1>
        <TotalSummary />
        <ProductList />
      </div>
    </Provider>
  );
};

const ProductList = () => {
  const products = useSelector(state => state.products.products);

  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4">
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

const TotalSummary = () => {
  const totalQuantity = useSelector(state => state.products.totalQuantity);
  const totalAmount = useSelector(state => state.products.totalAmount);

  return (
    <div className="mt-3" style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ marginRight: '10px' }}>
        <p>Total Quantity: {totalQuantity}</p>
      </div>
      <div>
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
};

export default App;

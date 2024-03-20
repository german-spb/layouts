import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import products from './data/products';
const cardsLayout = {
  xs: 12,
  sm: 8,
  md: 6,
  lg: 4
};

ReactDOM.render(
  <App layout={cardsLayout} products={products} />,
  document.getElementById('root'),
);



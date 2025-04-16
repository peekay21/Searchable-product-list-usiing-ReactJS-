import React from 'react';
import ProductList from './components/ProductList'; // adjust path if needed
import Posts from './components/Posts';
export default function App() {
  return (
    <div>
      <h1>My Shop</h1>
      <Posts/>
      <ProductList />
    </div>
  );
}

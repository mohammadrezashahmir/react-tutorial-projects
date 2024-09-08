import React from 'react';
import './App.css';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Products from './components/products';
import ProductDetail from './components/productDetaill';
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import Order from './components/order';
function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route path='/products/' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/order/' element={<Order />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;

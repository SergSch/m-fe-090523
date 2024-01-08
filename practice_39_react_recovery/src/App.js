import React, {useState} from 'react';
import './App.css';
import RegisterForm from './components/registerForm/RegisterForm.jsx';
import SimpleComponent from './components/simpleComponent/SimpleComponent.jsx';

import { Routes, Route, Link } from 'react-router-dom';
import Greeting from './components/greeting/Greeting.jsx';
import ProductList from './components/productList/ProductList.jsx';
import ProductDetail from './components/productDetail/ProductDetail.jsx';
import { CartContext, CartContextProvider } from './context/CartContext.js';


function App() {

  return (
    <CartContextProvider>
      <div className="App">
        <p>Hello World from React! {new Date().toLocaleString()} </p>

          {/*
          6. Теперь создаем линки на эти маршруты. В компоненте `App`, добавить ссылки с текстами "Авторизация", "Наши товары", которые ведут на страницу авторизации и страницу со списком товаров соответственно.
          */}
          <div>
            <Link to='/login'>Login Page</Link>
            <Link to='/products'>Products Page</Link>
          </div>

          <Routes>
            <Route path='/' element={<Greeting /> }/>
            <Route path='/login' element={<RegisterForm />} />
            <Route path='/products' element={<ProductList /> } />
            <Route path='/products/:id' element={<ProductDetail /> } />
            <Route path='*' element={<h3>Sorry, invalid page name!</h3>}/>
          </Routes>

        <SimpleComponent />
      </div>
      </CartContextProvider>
  );
}

export default App;

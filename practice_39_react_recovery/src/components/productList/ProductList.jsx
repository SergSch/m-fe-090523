import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function ProductList() {

  const [products, setProducts] = useState([]);

  const cartContext = useContext(CartContext);
  console.log('cartContext', cartContext)

  useEffect( () => {
    fetch('https://dummyjson.com/products')
      .then( resp => resp.json())
      .then( data => {
        setProducts(data.products);
        cartContext.addToCart(1);
       } );
  }, []);

  return (
    <div>
      { products.map( elem => {
        return (
          <div key={elem.id}>
            <Link to={`${elem.id}`}><h4>{elem.title}</h4></Link>
            <p>{elem.description}</p>
          </div>
        );
      })}
    </div>
  );
}
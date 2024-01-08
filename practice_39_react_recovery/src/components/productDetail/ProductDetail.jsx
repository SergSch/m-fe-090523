import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {

  const [product, setProduct] = useState( {} );

  const { id } = useParams();

  useEffect( () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then( response => response.json())
      .then( productData => setProduct(productData) );
  }, []);

  return (
    <div className="productDetailInfo">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <button>Add</button>
        <button>Drop</button>
      </div>
    </div>
  );
}
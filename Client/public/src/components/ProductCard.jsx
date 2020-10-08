import React from 'react';
import './ProductCard.css';


export default function ProductCard({product}){
    return (
<div class="card" className="ProductCard-container">
    <img className="product-image" src={product.thumbnail} alt="productimagenotfound"/>
    <div class="card-body">
      <h5 class="card-title">${product.price} {product.currency_id}</h5>
      <span>Condition: {product.condition} </span>-<span> Stock: {product.available_quantity}</span>
    <p class="card-text">{product.title}</p>
      <a href={product.permalink} class="btn btn-outline-success my-2 my-sm-0">Buy it!</a>
  </div>
</div>

)
}
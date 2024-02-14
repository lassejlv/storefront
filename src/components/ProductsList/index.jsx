import React from "react";
import "./style.css";
import Button from "../Button";

export default function ProductsList({ products }) {
  return (
    <section className="products-container">
      <h1 className="products-title">
        Anbefalet til dig
      </h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <img src={product.images[0]} alt={product.title} className="product-image" />
            
            <div className="product-bar">
              <p className="product-price">{product.price} kr.</p>
              <Button color="dark" onClick={() => window.location.href = `/products/${product.id}`}>Læs mere</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

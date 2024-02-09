import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { API_URL } from "./config";
import { toast } from "sonner";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${API_URL}/products`);

      if (!response.ok) {
        toast.error("Kunne ikke hente produkter!");
        console.error("Kunne ikke hente produkter!", response);
        return;
      }

      const data = await response.json();
      setProducts(data.products);

      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    const fetchCategories = async () => {
      const response = await fetch(`${API_URL}/products/categories`);

      if (!response.ok) {
        toast.error("Kunne ikke hente kategorier!");
        console.error("Kunne ikke hente kategorier!", response);
        return;
      }

      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
    fetchProducts();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="categories-container">
            {categories
            .splice(0, 7)
            .map((category, index) => (
              <div className="category" key={index} onClick={() => window.location.href = `/categories?value=${category}`}>
                  {category}
              </div>
            ))}
          </div>

          <div className="products-container">
            <h1>
              Anbefalet til dig
            </h1>
            <div className="products">
              {products
              .splice(0, 4)
              .map((product, index) => (
                <div className="product" key={index}>
                  <img src={product.image} alt={product.name} />
                  <h2>{product.name}</h2>
                  <p>{product.price} kr.</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

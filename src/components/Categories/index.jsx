import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { API_URL } from "../../config";
import Loader from "../Loader";
import "./style.css";
import Button from "../Button";

export default function Categories() {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const value = searchParams.get("value");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hvis der ikke er en value, så skal vi ikke gøre noget
    if (!value) toast.error("Kunne ikke hente kategorier!");

    const fetchProducts = async () => {
      const response = await fetch(`${API_URL}/products/category/${value}`);
      if (!response.ok)
        return toast.error("Kunne ikke hente kategoriens produkter!");

      const data = await response.json();
      setCategoryProducts(data.products);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <Loader loading={isLoading} center={true}>
      <section className="products-container">
        <h1 className="products-title">#{value}</h1>
        <div className="products-grid">
          {categoryProducts.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.title}</h3>
              <img
                src={product.images[0]}
                alt={product.title}
                className="product-image"
              />

              <div className="product-bar">
                <p className="product-price">{product.price} kr.</p>
                <Button
                  color="dark"
                  onClick={() =>
                    (window.location.href = `/products/${product.id}`)
                  }
                >
                  Læs mere
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Loader>
  );
}

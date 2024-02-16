import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../Loader";
import { toast } from "sonner";
import { API_URL } from "../../config";
import Button from "../Button";
import "./style.css";

export default function Search() {
  const [searchValue] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const value = searchValue.get("value");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = `BaliAbba - Søgning: ${value}`;
    if (!value) return toast.error("Kunne ikke hente søgeværdi!");

    const fetchSearch = async () => {
      const response = await fetch(`${API_URL}/products/search?q=${value}`);
      if (!response.ok) return toast.error("Kunne ikke hente produkter!");

      const data = await response.json();
      setIsLoading(false);
      setProducts(data.products);
    }

    fetchSearch()


  }, []);

  return (
    <Loader loading={isLoading} center={true}>
        <section className="products-container">
        <h1 className="products-title">
          Søgning: {value}
        </h1>
        {products.length === 0 && (
          <p className="products-empty">
            Ingen produkter fundet med søgeværdi: {value}
          </p>
        )}
        <div className="products-grid">
          {products.map((product) => (
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
  )
}

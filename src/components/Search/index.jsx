import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../Loader";
import { toast } from "sonner";
import { API_URL } from "../../config";
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
      <div className="search">
        <h1>{value}</h1>

        {products.length === 0 && (
          <p>Ingen produkter fundet</p>
        )}

        <div className="products">
          {products.map((product, index) => (
            <div key={index} className="product" onClick={() => window.location.href = `/products/${product.id}`}>
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price} kr.</p>
            </div>
          ))}
          </div>
      </div>
    </Loader>
  )
}

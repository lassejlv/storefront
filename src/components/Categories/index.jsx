import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { API_URL } from "../../config";
import Loader from "../Loader";
import "./style.css";

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
      if (!response.ok) return toast.error("Kunne ikke hente kategoriens produkter!");

      const data = await response.json();
      setCategoryProducts(data.products);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <Loader loading={isLoading} center={true}>
      <div className="categories">
        <h1>{value}</h1>
        <div className="category-products">
          {categoryProducts.map((product) => (
            <div key={product.id} className="category-product" onClick={() => window.location.href = `/products/${product.id}`}>
              <img src={product.images[0]} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price} kr.</p>
            </div>
          ))}
        </div>
      </div>
    </Loader>
  )
}

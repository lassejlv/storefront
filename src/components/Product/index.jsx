import { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config";
import { toast } from "sonner";
import Loader from "../Loader";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${API_URL}/products/${id}`);
      if (!response.ok) return toast.error("Kunne ikke hente produkt!");
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    }

    fetchProduct()
  }, []);

  return (
    <Loader loading={isLoading} center={true}>
      <div className="product">
        <h1>{product.title}</h1>
        <img src={product.images && product.images[0]} alt={product.title} />
        <p>{product.price} kr.</p>
        <p>{product.description}</p>
      </div>
    </Loader>
  )
}

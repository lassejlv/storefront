import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config";
import { toast } from "sonner";
import Button from "../Button";
import Loader from "../Loader";
import "./style.css";

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
    };

    fetchProduct();
  }, []);

  return (
    <Loader loading={isLoading} center={true}>
      <div className="product-grid-overview">
        <div className="product-grid-overview-2">
          {product.images && product.images.length > 1 && (
            <>
              {product.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  className="product-overview_image-2"
                  src={image}
                  alt={product.title}
                />
              ))}
            </>
          )}
         
        </div>
        <div>
          {product.images && product.images.length > 0 && (
            <img
              className="product-overview_image"
              src={product.images[0]}
              alt={product.title}
            />
          )}
        </div>
      </div>
    </Loader>
  );
}

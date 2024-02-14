import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { API_URL } from "./config";
import { toast } from "sonner";
import Category from "./components/Category";
import "./App.css";
import ProductsList from "./components/ProductsList";
import HomeHeader from "./components/HomeHeader";
import CookieBanner from "./components/CookieBanner";

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
      }, 200);
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
      <Loader loading={isLoading} center={true}>
        <HomeHeader />

        <Category categories={categories ?? []} />
        <ProductsList products={products ?? []} />
        <CookieBanner />
      </Loader>
    </>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar/index.jsx";
import FindButik from "./components/FindButik/index.jsx";
import NotFound from "./components/NotFound/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import Categories from "./components/Categories/index.jsx";
import Search from "./components/Search/index.jsx";
import Product from "./components/Product/index.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/find-butik",
    element: <FindButik />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/products/:id",
    element: <Product />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById("web_view")).render(
  <React.StrictMode>
    <Navbar />
    <Toaster richColors visibleToasts={1} duration={2500} />
    <RouterProvider router={router} />
  </React.StrictMode>
);

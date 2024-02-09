import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar/index.jsx";
import FindButik from "./components/FindButik/index.jsx";
import NotFound from "./components/NotFound/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";


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

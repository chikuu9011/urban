import React from "react";
import Router from "./Routes";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "../src/Index.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./Pages/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <CartProvider>

        <RouterProvider router={Router} />
    </CartProvider>

);


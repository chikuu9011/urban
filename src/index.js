import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Routes";
import { RouterProvider } from "react-router-dom";
import "../src/Index.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SingleProvider } from "./context/SingleContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SingleProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </SingleProvider>
);

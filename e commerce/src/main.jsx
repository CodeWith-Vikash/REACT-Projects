import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { SingleProvider } from "./context/SingleContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SingleProvider>
    <CartProvider>
      <Auth0Provider
        domain="dev-acbst2jl2ivfdmca.us.auth0.com"
        clientId="0ie0RwCxoxNQBWh8y9B6fNsjID7PoSob"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
        cacheLocation="localstorage"
      >
        <App />
      </Auth0Provider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </CartProvider>
  </SingleProvider>
);

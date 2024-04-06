import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/Productcontext.jsx'
import { Cartprovider } from './context/Cartcontext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-acbst2jl2ivfdmca.us.auth0.com"
    clientId="j1Z9N6eJbaYSP5rA6BvXWk96coxqQvZV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Cartprovider>
    <AppProvider>
        <App />
    </AppProvider>
    </Cartprovider>
  </Auth0Provider>
)

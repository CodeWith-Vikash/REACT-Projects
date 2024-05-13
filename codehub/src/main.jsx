import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import {store} from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-acbst2jl2ivfdmca.us.auth0.com"
  clientId="yrpSwjeKhbvMCnlZ5PLyN0CGf0cVZbS6"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
    <Provider store={store}>
    <App />
  </Provider>
  </Auth0Provider>
)

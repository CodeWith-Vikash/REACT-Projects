import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/Productcontext.jsx'
import { Cartprovider } from './context/Cartcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cartprovider>
    <AppProvider>
        <App />
    </AppProvider>
    </Cartprovider>
  </React.StrictMode>,
)

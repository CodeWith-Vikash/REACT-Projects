import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/Vidcontext.jsx'
import { ChanelProvider } from './context/Chanelcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <ChanelProvider>
         <App />
      </ChanelProvider>
    </ContextProvider>
  </React.StrictMode>,
)

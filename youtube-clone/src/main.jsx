import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/Vidcontext.jsx'
import { ChanelProvider } from './context/Chanelcontext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <ChanelProvider>
        <SearchProvider>
            <App />
        </SearchProvider>
      </ChanelProvider>
    </ContextProvider>
  </React.StrictMode>,
)

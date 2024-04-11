import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Contextprovider } from './context/AuthContext.jsx'
import { ChatContextprovider } from './context/Chatcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Contextprovider>
      <ChatContextprovider>
        <App />
      </ChatContextprovider>
    </Contextprovider>
  </React.StrictMode>,
)

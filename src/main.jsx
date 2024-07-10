import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Box from './Componets/Box.jsx'
import Footer from './Componets/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Box />
    <Footer />
  </React.StrictMode>,
)

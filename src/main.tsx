import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar/Navbar'
import './global.style.scss'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>,
)

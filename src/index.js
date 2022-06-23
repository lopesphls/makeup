import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Contato from './pages/Contato';
import Details from './pages/Details';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Search from './pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
      <Routes>
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Routes>
        <Route path="/search" element={<Search />} />
      </Routes>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

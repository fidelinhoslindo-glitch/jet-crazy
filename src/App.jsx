import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Seminovos from './pages/Seminovos';
import Lojas from './pages/Lojas';
import Servicos from './pages/Servicos';
import Boutique from './pages/Boutique';
import ProductDetail from './pages/ProductDetail';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jets" element={<Category type="jets" />} />
          <Route path="/switch" element={<Category type="switch" />} />
          <Route path="/quadriciclos" element={<Category type="quadriciclos" />} />
          <Route path="/utvs" element={<Category type="utvs" />} />
          <Route path="/jets/:slug" element={<ProductDetail type="jets" />} />
          <Route path="/switch/:slug" element={<ProductDetail type="switch" />} />
          <Route path="/quadriciclos/:slug" element={<ProductDetail type="quadriciclos" />} />
          <Route path="/utvs/:slug" element={<ProductDetail type="utvs" />} />
          <Route path="/seminovos" element={<Seminovos />} />
          <Route path="/seminovos/:slug" element={<ProductDetail type="seminovos" />} />
          <Route path="/lojas" element={<Lojas />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/boutique" element={<Boutique />} />
        </Routes>
      </Layout>
      <Analytics />
    </Router>
  );
}

export default App;
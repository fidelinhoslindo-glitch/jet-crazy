import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Seminovos from './pages/Seminovos';
import Lojas from './pages/Lojas';
import Servicos from './pages/Servicos';
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
          <Route path="/seminovos" element={<Seminovos />} />
          <Route path="/lojas" element={<Lojas />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </Layout>
      <Analytics />
    </Router>
  );
}

export default App;

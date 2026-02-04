import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Success from './pages/Success';
import EntryClosed from './pages/EntryClosed';
import './styles/global.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const showFooter = location.pathname !== '/register' && location.pathname !== '/success' && location.pathname !== '/closed';
  return (
    <div className="app-container">
      <Navbar />
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/success" element={<Success />} />
          <Route path="/closed" element={<EntryClosed />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

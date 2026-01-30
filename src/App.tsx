import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';

import ScrollToTop from './components/ScrollToTop.tsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

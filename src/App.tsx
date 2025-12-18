import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import ServiceLandingPage from './pages/ServiceLandingPage.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

import About from './pages/About.tsx';
import ForContractors from './pages/ForContractors.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';
import NotFound from './pages/NotFound.tsx';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pro" element={<ForContractors />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/:serviceSlug" element={<ServiceLandingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

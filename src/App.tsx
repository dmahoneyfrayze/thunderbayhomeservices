import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceLandingPage from './pages/ServiceLandingPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:serviceSlug" element={<ServiceLandingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

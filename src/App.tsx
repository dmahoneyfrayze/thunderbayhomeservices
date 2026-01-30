import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Eager load Home for better LCP
import Home from './pages/Home';

// Lazy load other pages
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Setup = lazy(() => import('./pages/Setup'));
const Tools = lazy(() => import('./pages/Tools'));

// Simple loading fallback
const PageLoader = () => (
  <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="loader" style={{
      width: '40px',
      height: '40px',
      border: '3px solid #E2E8F0',
      borderTop: '3px solid var(--color-brand-primary)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen items-stretch">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/setup" element={<Setup />} />
                  <Route path="/tools" element={<Tools />} />
                </Routes>
              </Suspense>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

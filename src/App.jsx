import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { BookingPage } from './pages/BookingPage';
import { RouteErrorFallback } from './components/RouteErrorFallback';

import { BookingProvider } from './booking/BookingContext';
import { BookingModal } from './booking/BookingModal';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <BookingProvider>
      <Router>
        <ScrollToTop />
        <div className="app-frame">
          <Navbar />

          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} errorElement={<RouteErrorFallback />} />
              <Route path="/services" element={<ServicesPage />} errorElement={<RouteErrorFallback />} />
              <Route path="/about" element={<AboutPage />} errorElement={<RouteErrorFallback />} />
              <Route path="/gallery" element={<GalleryPage />} errorElement={<RouteErrorFallback />} />
              <Route path="/contact" element={<ContactPage />} errorElement={<RouteErrorFallback />} />
              <Route path="/booking" element={<BookingPage />} errorElement={<RouteErrorFallback />} />
              <Route path="*" element={<RouteErrorFallback />} />
            </Routes>
          </main>

          <Footer />
          <MobileStickyCTA />
          <BookingModal />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;

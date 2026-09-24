import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Midwife from './pages/Midwife.jsx';
import Facilities from './pages/Facilities.jsx';
import Reviews from './pages/Reviews.jsx';
import Reservation from './pages/Reservation.jsx';
import Contact from './pages/Contact.jsx';
import { clinicInfo } from './data/clinic.js';

export default function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
    const validPages = ['home', 'about', 'services', 'midwife', 'facilities', 'reviews', 'reservation', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedMidwifeId, setSelectedMidwifeId] = useState(null);

  // Listen to hash changes (back/forward browser buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId === 'home' ? '' : pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForBooking = (service) => {
    if (service && service.id) {
      setSelectedServiceId(service.id);
    }
    navigateTo('reservation');
  };

  const handleSelectMidwifeForBooking = (midwife) => {
    if (midwife && midwife.id) {
      setSelectedMidwifeId(midwife.id);
    }
    navigateTo('reservation');
  };

  return (
    <div className="bg-surface font-sans text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Fixed Header Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Dynamic Page Views */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <Home
            onNavigate={navigateTo}
            onSelectServiceForBooking={handleSelectServiceForBooking}
            onSelectMidwifeForBooking={handleSelectMidwifeForBooking}
          />
        )}

        {currentPage === 'about' && <About onNavigate={navigateTo} />}

        {currentPage === 'services' && (
          <Services
            onSelectService={handleSelectServiceForBooking}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'midwife' && (
          <Midwife
            onSelectMidwife={handleSelectMidwifeForBooking}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'facilities' && <Facilities onNavigate={navigateTo} />}

        {currentPage === 'reviews' && <Reviews onNavigate={navigateTo} />}

        {currentPage === 'reservation' && (
          <Reservation
            preselectedServiceId={selectedServiceId}
            preselectedMidwifeId={selectedMidwifeId}
          />
        )}

        {currentPage === 'contact' && <Contact onNavigate={navigateTo} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Global Floating WhatsApp Contact Pill */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={`https://wa.me/${clinicInfo.whatsapp}?text=Halo%20TPMB%20ANNISA%20LL,%20saya%20ingin%20konsultasi%20layanan%20kebidanan`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all text-xs font-bold border-2 border-white"
          title="Chat WhatsApp TPMB ANNISA LL"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span className="hidden sm:inline">WhatsApp Bidan</span>
        </a>
      </div>
    </div>
  );
}

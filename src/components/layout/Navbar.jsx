import React, { useState, useEffect } from 'react';
import { clinicInfo } from '../../data/clinic.js';

export default function Navbar({ currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'services', label: 'Layanan' },
    { id: 'midwife', label: 'Tim Bidan' },
    { id: 'facilities', label: 'Fasilitas' },
    { id: 'reviews', label: 'Testimoni' },
    { id: 'contact', label: 'Kontak' }
  ];

  const handleNavClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.06)]'
          : 'bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary-fixed/50 text-primary group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[24px]">favorite</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-tight font-bold group-hover:text-primary transition-colors">
              {clinicInfo.name}
            </span>
            <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
              {clinicInfo.subtitle}
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`font-label-lg text-label-lg transition-colors py-1.5 px-1 relative ${
                  isActive
                    ? 'text-primary font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons Right */}
        <div className="flex items-center gap-3">
          {/* 24h IGD badge */}
          <a
            className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md transition-all hover:scale-105 hover:bg-secondary-container/80 shadow-2xs"
            href={`tel:${clinicInfo.phone}`}
            title="Telepon IGD Bidan 24 Jam"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-semibold">IGD Bidan 24 Jam</span>
          </a>

          {/* Book Konsultasi CTA */}
          <button
            type="button"
            onClick={() => handleNavClick('reservation')}
            className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-label-lg text-label-lg shadow-[0_12px_32px_-4px_rgba(217,142,148,0.18)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${
              currentPage === 'reservation'
                ? 'bg-primary text-on-primary ring-2 ring-primary/40'
                : 'bg-tertiary text-on-tertiary hover:bg-tertiary/90'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            <span>Reservasi</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            className="xl:hidden p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka Menu Navigasi"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-outline-variant/30 bg-surface-container-lowest px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left font-label-lg text-label-lg py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-primary-fixed/40 text-primary font-bold'
                      : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="material-symbols-outlined text-[18px]">check</span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 mt-3 border-t border-surface-container flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => handleNavClick('reservation')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-tertiary text-on-tertiary font-label-md font-semibold shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Buat Janji Kunjungan</span>
            </button>
            <a
              href={`tel:${clinicInfo.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>IGD Siaga: {clinicInfo.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

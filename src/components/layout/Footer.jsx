import React from 'react';
import { clinicInfo } from '../../data/clinic.js';

export default function Footer({ onNavigate }) {
  const handleNav = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.hash = pageId;
    }
  };

  const quickLinks = [
    { label: 'Tentang Filosofi Gentle Birth', page: 'about' },
    { label: '11 Layanan Medis Ibu & Anak', page: 'services' },
    { label: 'Profil Tim Bidan SIPB IBI', page: 'midwife' },
    { label: 'Fasilitas & Kamar Bersalin', page: 'facilities' },
    { label: 'Ulasan & Testimoni Pasien', page: 'reviews' },
    { label: 'Formulir Reservasi WhatsApp', page: 'reservation' },
    { label: 'Hotline IGD & Lokasi Klinik', page: 'contact' }
  ];

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg py-12 lg:py-margin-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-gutter-lg">
          
          {/* Column 1: Brand & Accreditation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-fixed/60 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">favorite</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold">
                  {clinicInfo.name}
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                  {clinicInfo.subtitle}
                </span>
              </div>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Pusat persalinan gentle birth terpadu, pemeriksaan ANC komprehensif, asuhan bayi baru lahir, dan pendampingan laktasi profesional bersertifikasi Ikatan Bidan Indonesia (IBI) dengan kenyamanan holistik penuh kasih.
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                <span>Terakreditasi Kemenkes</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px]">badge</span>
                <span>SIPB Resmi IBI</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => handleNav(item.page)}
                    className="inline-flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left"
                  >
                    <span className="text-secondary font-bold">›</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Jam Pelayanan */}
          <div className="space-y-3">
            <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Jam Pelayanan
            </h4>
            <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex justify-between py-1 border-b border-outline-variant/30">
                <span>Poli Bidan &amp; ANC</span>
                <span className="font-semibold text-on-surface">08.00 - 20.00 WIB</span>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/30">
                <span>USG &amp; Konsultasi</span>
                <span className="font-semibold text-on-surface">Senin - Minggu</span>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/30">
                <span>Persalinan &amp; IGD Bidan</span>
                <span className="font-bold text-secondary">24 Jam Penuh</span>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/30">
                <span>Kunjungan Homecare</span>
                <span className="font-semibold text-on-surface">Sesuai Janji Temu</span>
              </div>
            </div>
          </div>

          {/* Column 4: Hotline & Location */}
          <div className="space-y-3">
            <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Kontak Darurat &amp; Alamat
            </h4>
            <div className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 space-y-1">
              <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wider block">
                Hotline Bersalin 24 Jam
              </span>
              <a
                className="font-headline-md text-headline-md text-tertiary font-bold hover:underline block leading-tight tracking-tight"
                href={`tel:${clinicInfo.phone}`}
              >
                {clinicInfo.hotline}
              </a>
              <span className="font-label-sm text-label-sm text-on-surface-variant block">
                {clinicInfo.phoneFormatted} (Siaga Bidan Jaga)
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
              <span className="material-symbols-outlined text-[16px] align-text-bottom text-primary mr-1">
                location_on
              </span>
              {clinicInfo.address}
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="mt-12 pt-6 border-t border-outline-variant/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left">
            © 2025 {clinicInfo.name} ({clinicInfo.subtitle}). Izin Operasional Klinik No: {clinicInfo.licenseNumber}. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4 font-label-md text-label-md text-on-surface-variant">
            <span className="hover:text-on-surface cursor-pointer">
              Privasi Rekam Medis
            </span>
            <span className="text-outline-variant">•</span>
            <span className="hover:text-on-surface cursor-pointer">
              Standar Mutu IBI
            </span>
            <span className="text-outline-variant">•</span>
            <span className="hover:text-on-surface cursor-pointer">
              Kebijakan Pasien
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

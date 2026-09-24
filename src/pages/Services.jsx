import React from 'react';
import SEO from '../components/common/SEO.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import ServiceGrid from '../components/services/ServiceGrid.jsx';

export default function Services({ onSelectService, onNavigate }) {
  return (
    <div className="pt-28 pb-20 bg-surface">
      <SEO
        title="Layanan Medis Kebidanan - 11 Pelayanan Terpadu TPMB ANNISA LL"
        description="Daftar 11 layanan komprehensif TPMB ANNISA LL: kehamilan, persalinan gentle birth, nifas, bayi baru lahir, imunisasi, MTBS balita, konseling laktasi, KB, reproduksi, perawatan luka, dan nebulizer."
        path="/services"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeader
            align="center"
            badge="Daftar 11 Pelayanan Medis Resmi"
            badgeIcon="medical_services"
            title="Pelayanan Kebidanan Komprehensif &amp; Berkelanjutan"
            subtitle="Kami mendampingi setiap fase kehidupan reproduksi wanita, kehamilan, persalinan aman, hingga kesehatan balita dengan standar asuhan medis kebidanan tertinggi."
          />
        </div>

        {/* 11 Services Grid with Filter & Search */}
        <ServiceGrid
          onSelectService={(service) => {
            if (onSelectService) {
              onSelectService(service);
            }
            if (onNavigate) {
              onNavigate('reservation');
            }
          }}
        />

        {/* Info Box Emergency */}
        <div className="mt-16 p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-tertiary text-on-tertiary flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[32px]">emergency</span>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-on-surface">
                Persalinan Darurat &amp; Ketuban Pecah Dini (KPD)?
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                Jangan ragu untuk langsung datang ke klinik atau hubungi hotline IGD Bidan 24 jam kami tanpa perlu janji temu.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-full bg-tertiary text-on-tertiary text-xs sm:text-sm font-bold hover:bg-tertiary/90 transition-colors flex-shrink-0"
          >
            Lihat Kontak Darurat &amp; Rute
          </button>
        </div>

      </div>
    </div>
  );
}

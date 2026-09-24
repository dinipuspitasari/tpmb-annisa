import React from 'react';
import SectionHeader from '../common/SectionHeader.jsx';
import FacilityGrid from '../facilities/FacilityGrid.jsx';

export default function FacilitiesPreview({ onBookTour, onViewAllFacilities }) {
  return (
    <section className="py-16 lg:py-24 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            badge="Fasilitas &amp; Kenyamanan Pasien"
            badgeIcon="apartment"
            title="Kenyamanan Ruang Rawat Seperti di Rumah Sendiri"
            subtitle="Kami mendesain setiap sudut klinik dengan standar higienitas medis tinggi dipadukan atmosfer yang menenangkan untuk meminimalkan kecemasan persalinan."
          />
          {onViewAllFacilities && (
            <button
              type="button"
              onClick={onViewAllFacilities}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-lowest text-secondary font-label-md font-bold border border-outline-variant/30 hover:bg-surface-container-high transition-colors shadow-2xs self-start md:self-auto"
            >
              <span>Jelajahi Semua Fasilitas</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          )}
        </div>

        {/* Facility Grid */}
        <FacilityGrid onBookTour={onBookTour} />

      </div>
    </section>
  );
}

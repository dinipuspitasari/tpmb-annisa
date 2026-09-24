import React from 'react';
import SectionHeader from '../common/SectionHeader.jsx';
import ServiceCard from '../services/ServiceCard.jsx';
import { servicesData } from '../../data/clinic.js';

export default function ServicesPreview({ onSelectService, onViewAllServices }) {
  // Show 6 featured services on home page
  const featuredServices = (servicesData || []).slice(0, 6);

  return (
    <section className="py-16 lg:py-24 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            badge="11 Layanan Kebidanan Terpadu"
            badgeIcon="vital_signs"
            title="Asuhan Medis Menyeluruh untuk Bunda &amp; Balita"
            subtitle="Mulai dari pemeriksaan antenatal berkala, persalinan gentle birth 24 jam, pemulihan nifas, imunisasi, hingga konseling reproduksi."
          />
          <button
            type="button"
            onClick={onViewAllServices}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-lowest text-primary font-label-md font-bold border border-outline-variant/30 hover:bg-surface-container-high transition-colors shadow-2xs self-start md:self-auto"
          >
            <span>Lihat Semua 11 Layanan</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        {/* 6 Featured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(featuredServices || []).map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
              onOpenDetail={(srv) => onSelectService(srv)}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-secondary-container/50 border border-secondary-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <span className="material-symbols-outlined text-[32px] text-secondary">
              help_center
            </span>
            <div>
              <p className="text-sm font-bold text-on-secondary-container">
                Butuh Layanan Khusus atau Tindakan Darurat?
              </p>
              <p className="text-xs text-secondary">
                Pelayanan gawat darurat bersalin, pecah ketuban, dan rujukan ambulance siaga 24 jam.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onViewAllServices}
            className="px-5 py-2.5 rounded-full bg-secondary text-on-secondary text-xs font-bold hover:bg-secondary/90 transition-colors flex-shrink-0"
          >
            Pelajari Semua Layanan
          </button>
        </div>

      </div>
    </section>
  );
}

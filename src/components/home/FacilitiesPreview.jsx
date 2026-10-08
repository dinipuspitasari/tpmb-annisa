import React from 'react';
import SectionHeader from '../common/SectionHeader.jsx';
import { facilitiesData } from '../../data/clinic.js';

export default function FacilitiesPreview({ onOpenFacilityDetail, onViewAllFacilities }) {
  const facilities = facilitiesData || [];

  const handleFacilityClick = (facility) => {
    if (onOpenFacilityDetail) {
      onOpenFacilityDetail(facility);
    } else if (onViewAllFacilities) {
      onViewAllFacilities();
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            badge="Fasilitas &amp; Kenyamanan Pasien"
            badgeIcon="apartment"
            title="Kenyamanan Ruang Rawat Seperti di Rumah Sendiri"
            subtitle="Pilihan ruang medis higienis dan privat berstandar tinggi. Klik fasilitas untuk melihat rincian lengkap &amp; spesifikasi di halaman Fasilitas."
          />
          {onViewAllFacilities && (
            <button
              type="button"
              onClick={onViewAllFacilities}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-lowest text-secondary font-label-md font-bold border border-outline-variant/30 hover:bg-surface-container-high transition-colors shadow-2xs self-start md:self-auto"
            >
              <span>Halaman Fasilitas Lengkap</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          )}
        </div>

        {/* Facilities Grid: Only Image & Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => handleFacilityClick(facility)}
              className="group cursor-pointer bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 hover:border-secondary shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Gambar Fasilitas */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs font-semibold flex items-center gap-1">
                    <span>Lihat Detail</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </div>
              </div>

              {/* Nama Fasilitas */}
              <div className="p-4 flex items-center justify-between gap-2 flex-1">
                <h3 className="font-semibold text-sm sm:text-base text-on-surface group-hover:text-secondary transition-colors">
                  {facility.name}
                </h3>
                <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-secondary group-hover:translate-x-1 transition-all flex-shrink-0">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-secondary-container/40 border border-secondary-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <span className="material-symbols-outlined text-[32px] text-secondary">
              chair
            </span>
            <div>
              <p className="text-sm font-bold text-on-secondary-container">
                Ingin Melihat Foto Detail &amp; Spesifikasi Ruangan?
              </p>
              <p className="text-xs text-secondary">
                Buka halaman Fasilitas untuk deskripsi lengkap kamar bersalin, perlengkapan nifas, dan jadwal visit klinik.
              </p>
            </div>
          </div>
          {onViewAllFacilities && (
            <button
              type="button"
              onClick={onViewAllFacilities}
              className="px-5 py-2.5 rounded-full bg-secondary text-on-secondary text-xs font-bold hover:bg-secondary/90 transition-colors flex-shrink-0"
            >
              Buka Halaman Fasilitas
            </button>
          )}
        </div>

      </div>
    </section>
  );
}

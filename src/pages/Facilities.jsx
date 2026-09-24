import React from 'react';
import SEO from '../components/common/SEO.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import FacilityGrid from '../components/facilities/FacilityGrid.jsx';

export default function Facilities({ onNavigate }) {
  return (
    <div className="pt-28 pb-20 bg-surface">
      <SEO
        title="Fasilitas Klinik - 4 Ruangan Medis Privat TPMB ANNISA LL"
        description="Fasilitas lengkap TPMB ANNISA LL: Ruang bersalin privat dengan birth ball, ruang perawatan nifas privat, ruang pemeriksaan USG & Doppler, serta ruang tunggu ramah keluarga."
        path="/facilities"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeader
            align="center"
            badge="Fasilitas &amp; Sarana Medis"
            badgeIcon="apartment"
            title="Kenyamanan &amp; Higienitas Terjamin untuk Proses Melahirkan yang Damai"
            subtitle="Kami memastikan lingkungan persalinan privat, tenang, bebas kebisingan, serta memenuhi standar sterilisasi dan keselamatan medis rumah sakit."
          />
        </div>

        {/* 4 Facilities Grid */}
        <FacilityGrid onBookTour={() => onNavigate('reservation')} />

        {/* Hygiene & Comfort Commitment */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-3.5">
            <span className="material-symbols-outlined text-secondary text-[28px] mt-0.5">
              clean_hands
            </span>
            <div>
              <h4 className="text-sm font-bold text-on-surface">Protokol Sterilisasi Autoclave</h4>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Seluruh instrumen partus set dan peralatan medis melalui proses dekontaminasi dan sterilisasi bertekanan tinggi secara berkala.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-3.5">
            <span className="material-symbols-outlined text-primary text-[28px] mt-0.5">
              meeting_room
            </span>
            <div>
              <h4 className="text-sm font-bold text-on-surface">100% Ruang Rawat Privat</h4>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Tidak ada ruang bersalin bercampur. Bunda dan suami memiliki kamar terpisah lengkap dengan kamar mandi dalam demi privasi penuh.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex items-start gap-3.5">
            <span className="material-symbols-outlined text-tertiary text-[28px] mt-0.5">
              bed
            </span>
            <div>
              <h4 className="text-sm font-bold text-on-surface">Bed Pendamping Suami</h4>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Kamar nifas dilengkapi sofa bed ekstra nyaman agar suami atau keluarga terdekat dapat menginap dan mendampingi pemulihan bunda 24 jam.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => onNavigate('reservation')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-on-secondary font-label-lg font-bold shadow-md hover:bg-secondary/90 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
            <span>Jadwalkan Kunjungan &amp; Reservasi Ruang</span>
          </button>
        </div>

      </div>
    </div>
  );
}

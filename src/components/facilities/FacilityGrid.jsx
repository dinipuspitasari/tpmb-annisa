import React, { useState } from 'react';
import { facilitiesData } from '../../data/clinic.js';
import FacilityCard from './FacilityCard.jsx';

export default function FacilityGrid({ onBookTour }) {
  const [activeFacility, setActiveFacility] = useState(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilitiesData.map((facility) => (
          <FacilityCard
            key={facility.id}
            facility={facility}
            onOpenDetail={(fac) => setActiveFacility(fac)}
          />
        ))}
      </div>

      {/* Facility Lightbox Modal */}
      {activeFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-surface-container-lowest max-w-xl w-full rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/40 relative max-h-[92vh] flex flex-col">
            <button
              type="button"
              onClick={() => setActiveFacility(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            >
              ✕
            </button>

            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={activeFacility.image}
                alt={activeFacility.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white mb-2 inline-block">
                    {activeFacility.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                    {activeFacility.name}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {activeFacility.fullDesc}
              </p>

              <div>
                <h4 className="text-xs uppercase font-bold text-secondary tracking-wider mb-2">
                  Fasilitas &amp; Perlengkapan Unggulan
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(activeFacility.highlights || []).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-low text-xs text-on-surface"
                    >
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setActiveFacility(null);
                    if (onBookTour) onBookTour();
                  }}
                  className="flex-1 py-3 rounded-full bg-secondary text-on-secondary font-label-md font-bold hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span>Jadwalkan Visit / Konsultasi</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFacility(null)}
                  className="py-3 px-5 rounded-full bg-surface-container-high text-on-surface font-label-md font-semibold hover:bg-surface-container-highest transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

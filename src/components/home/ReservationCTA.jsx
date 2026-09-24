import React from 'react';
import { clinicInfo } from '../../data/clinic.js';

export default function ReservationCTA({ onOpenReservation }) {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-primary-container p-8 sm:p-12 lg:p-16 text-on-primary shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10 max-w-2xl space-y-5 text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              Jadwalkan Konsultasi Mudah &amp; Cepat
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Siap Menyambut Buah Hati dengan Hati yang Tenang?
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl">
              Konsultasikan rencana kehamilan, keluhan fisik, dan preferensi persalinan gentle birth Anda bersama tim bidan TPMB ANNISA LL. Kami siap mendampingi setiap langkah Anda.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                type="button"
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-bold text-sm shadow-xl hover:bg-surface-container-low hover:scale-105 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>Buka Formulir Reservasi Online</span>
              </button>

              <a
                href={`tel:${clinicInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-black/20 text-white font-semibold text-sm hover:bg-black/30 backdrop-blur-md border border-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                <span>Hotline IGD: {clinicInfo.hotline}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

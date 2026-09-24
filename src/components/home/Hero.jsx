import React from 'react';
import { clinicInfo } from '../../data/clinic.js';

export default function Hero({ onBookConsultation, onViewServices }) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-primary-fixed/20 via-surface to-surface">
      {/* Decorative background blur shapes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-fixed-dim/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-[300px] h-[300px] bg-secondary-fixed/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-md text-label-md border border-secondary/20 shadow-2xs">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="font-semibold tracking-wide">
                Akreditasi Kemenkes RI &amp; Bidan SIPB Resmi IBI
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight font-extrabold leading-[1.15]">
              Pendampingan Lahir Penuh Cinta, Aman &amp;{' '}
              <span className="text-primary italic font-serif">Gentle Birth</span> Alami.
            </h1>

            {/* Subtitle */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Selamat datang di <strong className="text-on-surface font-semibold">{clinicInfo.name}</strong>. Tempat Praktik Mandiri Bidan dengan asuhan komprehensif mulai dari kehamilan, persalinan tenang, nifas, hingga tumbuh kembang buah hati dalam suasana hangat layaknya di rumah sendiri.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-tertiary text-on-tertiary font-label-lg text-label-lg font-bold shadow-[0_10px_25px_-5px_rgba(159,64,44,0.35)] hover:bg-tertiary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>Buat Janji Kunjungan</span>
              </button>

              <button
                type="button"
                onClick={onViewServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold hover:bg-surface-container-highest transition-all border border-outline-variant/30"
              >
                <span className="material-symbols-outlined text-[20px]">medical_services</span>
                <span>Jelajahi 11 Layanan</span>
              </button>
            </div>

            {/* Social Proof Stats */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-on-surface-variant text-xs">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[20px] filled">
                  star
                </span>
                <span className="font-bold text-on-surface text-sm">4.9 / 5.0</span>
                <span>(300+ Testimoni Bunda)</span>
              </div>
              <div className="h-4 w-px bg-outline-variant/40 hidden sm:block"></div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary text-[20px]">
                  emergency
                </span>
                <span className="font-semibold text-on-surface">Persalinan Siaga 24 Jam Penuh</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image Card (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest aspect-4/3 sm:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Pelayanan Bidan Hangat dan Lembut TPMB ANNISA LL"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating quote badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-base flex-shrink-0">
                      AL
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface leading-tight">
                        "Melahirkan dengan tenang dan minim trauma adalah hak setiap ibu."
                      </p>
                      <p className="text-[11px] text-secondary font-medium mt-0.5">
                        Filosofi Bidan TPMB ANNISA LL
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating emergency delivery badge */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-surface-container-lowest p-3.5 rounded-2xl shadow-xl border border-outline-variant/30 flex items-center gap-3 animate-bounce duration-1000">
                <div className="w-9 h-9 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">local_hospital</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-tertiary uppercase block">
                    Ruang Bersalin Privat
                  </span>
                  <span className="text-xs font-semibold text-on-surface">
                    Buka 24 Jam Nonstop
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

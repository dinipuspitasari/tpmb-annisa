import React from 'react';
import SectionHeader from '../common/SectionHeader.jsx';
import { midwivesData } from '../../data/clinic.js';

export default function MidwifeSection({ onBookWithMidwife }) {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        
        <SectionHeader
          align="center"
          badge="Tim Tenaga Medis Kebidanan"
          badgeIcon="badge"
          title="Bidan Berpengalaman, Berizin &amp; Penuh Kehangatan"
          subtitle="Setiap bidan di TPMB ANNISA LL memegang Surat Izin Praktik Bidan (SIPB) resmi dari IBI dan Kemenkes RI dengan sertifikasi pelatihan gentle birth, APN, dan laktasi berkelanjutan."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {midwivesData.map((midwife) => (
            <div
              key={midwife.id}
              className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-outline-variant/30 hover:border-secondary-container transition-all duration-300 flex flex-col group"
            >
              {/* Midwife Avatar Image */}
              <div className="relative h-64 overflow-hidden bg-primary-fixed/20">
                <img
                  src={midwife.avatar || midwife.image}
                  alt={midwife.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-secondary border border-secondary/20">
                  {midwife.experience}
                </div>
              </div>

              {/* Midwife Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                    {midwife.role || midwife.title}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    {midwife.name}
                  </h3>
                  <div className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-[11px] font-mono text-on-surface-variant">
                    SIPB: {midwife.sipb}
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    {midwife.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-surface-container-high/40 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {(midwife.specialties || []).map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onBookWithMidwife(midwife)}
                    className="w-full py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-md font-semibold hover:bg-tertiary hover:text-on-tertiary transition-all flex items-center justify-center gap-2 group-hover:bg-tertiary group-hover:text-on-tertiary shadow-2xs"
                  >
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    <span>Pilih Bidan Ini</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

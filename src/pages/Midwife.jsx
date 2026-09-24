import React from 'react';
import SEO from '../components/common/SEO.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import { midwivesData } from '../data/clinic.js';

export default function Midwife({ onSelectMidwife, onNavigate }) {
  return (
    <div className="pt-28 pb-20 bg-surface">
      <SEO
        title="Tim Bidan Profesional - TPMB ANNISA LL"
        description="Profil bidan tersertifikasi SIPB resmi IBI di TPMB ANNISA LL. Ahli gentle birth, asuhan persalinan normal (APN), konseling laktasi, dan perawatan bayi baru lahir."
        path="/midwife"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeader
            align="center"
            badge="Tenaga Kesehatan Bidan Bersertifikasi"
            badgeIcon="clinical_notes"
            title="Dukungan Sepenuh Hati dari Bidan yang Anda Percaya"
            subtitle="Kami berdedikasi menciptakan rasa aman, kenyamanan mental, dan proses melahirkan yang tenang bagi seluruh keluarga."
          />
        </div>

        {/* Detailed Midwife Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {midwivesData.map((midwife) => (
            <div
              key={midwife.id}
              className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-outline-variant/30 hover:border-secondary-container transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-72 overflow-hidden relative bg-primary-fixed/20">
                  <img
                    src={midwife.avatar || midwife.image}
                    alt={midwife.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-secondary border border-secondary/20">
                    {midwife.experience}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                    {midwife.role || midwife.title}
                  </span>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface">
                    {midwife.name}
                  </h3>
                  <div className="mt-1.5 inline-block px-3 py-0.5 rounded-full bg-surface-container-high text-xs font-mono text-on-surface-variant">
                    SIPB: {midwife.sipb}
                  </div>

                  <p className="text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                    {midwife.bio}
                  </p>

                  <div className="mt-4 pt-3 border-t border-surface-container-high">
                    <h5 className="text-[11px] uppercase font-bold text-secondary tracking-wider mb-2">
                      Keahlian &amp; Sertifikasi
                    </h5>
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
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectMidwife) onSelectMidwife(midwife);
                    if (onNavigate) onNavigate('reservation');
                  }}
                  className="w-full py-3 rounded-full bg-tertiary text-on-tertiary font-label-md font-bold hover:bg-tertiary/90 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Konsultasi dengan {midwife.name.split(',')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 text-center max-w-2xl mx-auto space-y-3">
          <span className="material-symbols-outlined text-[36px] text-primary">
            verified
          </span>
          <h4 className="text-lg font-bold text-on-surface">
            Standar Praktik Mandiri Bidan (IBI)
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Seluruh tindakan kebidanan yang dilakukan di TPMB ANNISA LL selalu mematuhi pedoman standar profesi Ikatan Bidan Indonesia (IBI) dan regulasi Kementerian Kesehatan Republik Indonesia, dengan fokus utama keselamatan ibu dan anak.
          </p>
        </div>

      </div>
    </div>
  );
}

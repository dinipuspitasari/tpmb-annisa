import React from 'react';
import SEO from '../components/common/SEO.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import { clinicInfo } from '../data/clinic.js';

export default function About({ onNavigate }) {
  return (
    <div className="pt-28 pb-20 bg-surface">
      <SEO
        title="Tentang Kami - Profil TPMB ANNISA LL"
        description="Mengenal TPMB ANNISA LL lebih dekat. Praktik Mandiri Bidan terakreditasi Kemenkes RI dengan filosofi gentle birth alami dan pendampingan keluarga yang penuh empati."
        path="/about"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        
        {/* Page Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader
            align="center"
            badge="Profil Resmi TPMB"
            badgeIcon="history_edu"
            title="Mendedikasikan Hati untuk Kesehatan Ibu dan Generasi Penerus"
            subtitle="Berdiri dengan tekad menghadirkan pengalaman kebidanan yang humanis, aman, dan memuliakan peran seorang ibu."
          />
        </div>

        {/* Narrative & Photo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5 text-on-surface-variant text-sm leading-relaxed">
            <h3 className="text-2xl font-bold text-on-surface font-headline-md">
              Kisah di Balik Pendirian TPMB ANNISA LL
            </h3>
            <p>
              Didirikan oleh <strong>Bdn. Siti Annisa, S.Tr.Keb, Bd., M.Kes</strong> pada tahun 2014, TPMB ANNISA LL berawal dari kerinduan melihat proses persalinan yang sering kali dipenuhi rasa panik dan trauma. Kami meyakini bahwa tubuh wanita telah dirancang secara sempurna oleh Tuhan untuk melahirkan dengan tenang ketika diberikan lingkungan yang mendukung, penuh kasih, dan bebas dari tekanan yang tidak perlu.
            </p>
            <p>
              Selama lebih dari 10 tahun melayani masyarakat, kami telah mendampingi lebih dari 5.000 proses kelahiran dan pemeriksaan ibu hamil. Dengan memadukan kompetensi klinis kebidanan mutakhir sesuai standar Kementerian Kesehatan RI dan pendekatan holistik alami, kami menciptakan atmosfer klinik yang hangat layaknya sebuah rumah keluarga.
            </p>

            <div className="pt-2 border-l-4 border-primary pl-4 py-1 italic bg-surface-container-low rounded-r-xl">
              "Setiap ibu berhak melahirkan dengan bermartabat, didengar suaranya, dan didekap hangat bersama bayinya sejak detik pertama kelahirannya."
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-surface-container-lowest">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
                alt="Praktik Kebidanan Humanis TPMB ANNISA LL"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-sm font-bold">Konseling Kehamilan Personal &amp; Ramah</p>
                <p className="text-xs text-white/80">Mendengarkan setiap keluhan dan kecemasan bunda tanpa rasa terburu-buru.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">visibility</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">Visi Kami</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Menjadi Tempat Praktik Mandiri Bidan unggulan dan terpercaya yang melahirkan generasi sehat, cerdas, dan berkarakter melalui asuhan kebidanan yang humanis, holistik, serta berorientasi pada pemberdayaan keluarga.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 text-xs font-semibold text-secondary">
              ✓ Standar Pelayanan Mutu IBI Nasional
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">rocket_launch</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">Misi Kami</h3>
              <ul className="space-y-2.5 text-xs text-on-surface-variant leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">1.</span>
                  <span>Memberikan pelayanan kebidanan berkualitas tinggi berlandaskan bukti ilmiah (*evidence-based midwifery*).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">2.</span>
                  <span>Menerapkan metode gentle birth dan persalinan minim intervensi demi keselamatan ibu dan janin.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">3.</span>
                  <span>Menyediakan sarana dan prasarana klinik yang higienis, nyaman, dan privat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">4.</span>
                  <span>Melakukan edukasi laktasi dan pendampingan tumbuh kembang balita secara berkelanjutan.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 text-xs font-semibold text-primary">
              ✓ Melayani dengan Senyum, Empati &amp; Ketulusan
            </div>
          </div>
        </div>

        {/* Legal & Accreditation Box */}
        <div className="p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm mb-16">
          <h3 className="text-xl font-bold text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">verified_user</span>
            Legalitas &amp; Akreditasi Fasilitas Kesehatan
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-surface-container-low">
              <span className="font-semibold text-on-surface block mb-1">Surat Izin Praktik Bidan (SIPB)</span>
              <p className="text-on-surface-variant font-mono">No. 503/SIPB-449/IBI/2023</p>
              <p className="text-[11px] text-secondary mt-1">Ikatan Bidan Indonesia (IBI)</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container-low">
              <span className="font-semibold text-on-surface block mb-1">Izin Operasional Fasilitas</span>
              <p className="text-on-surface-variant font-mono">{clinicInfo.licenseNumber}</p>
              <p className="text-[11px] text-secondary mt-1">Dinas Kesehatan Republik Indonesia</p>
            </div>
            <div className="p-4 rounded-2xl bg-surface-container-low">
              <span className="font-semibold text-on-surface block mb-1">Status Kemitraan</span>
              <p className="text-on-surface-variant">Jejaring BPJS Kesehatan &amp; RS Rujukan PONEK</p>
              <p className="text-[11px] text-secondary mt-1">Siaga Ambulance 24 Jam</p>
            </div>
          </div>
        </div>

        {/* CTA to Consultation */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={() => onNavigate('reservation')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-tertiary text-on-tertiary font-label-lg font-bold shadow-lg hover:bg-tertiary/90 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            <span>Jadwalkan Kunjungan ke TPMB ANNISA LL</span>
          </button>
        </div>

      </div>
    </div>
  );
}

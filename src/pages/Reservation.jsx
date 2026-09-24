import React from 'react';
import SEO from '../components/common/SEO.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import ReservationForm from '../components/reservation/ReservationForm.jsx';
import { clinicInfo } from '../data/clinic.js';

export default function Reservation({ preselectedServiceId, preselectedMidwifeId }) {
  return (
    <div className="pt-28 pb-20 bg-surface">
      <SEO
        title="Reservasi Janji Temu - Formulir Online TPMB ANNISA LL"
        description="Buat janji temu pemeriksaan kehamilan, USG Doppler, imunisasi anak, konseling KB, dan laktasi di TPMB ANNISA LL secara praktis via WhatsApp."
        path="/reservation"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeader
            align="center"
            badge="Booking Jadwal &amp; Konsultasi"
            badgeIcon="calendar_month"
            title="Reservasi Kunjungan Lebih Praktis Tanpa Antre Lama"
            subtitle="Pilih layanan dan tentukan waktu kunjungan Anda. Sistem kami akan meneruskan detail ke WhatsApp resmi bidan jaga untuk konfirmasi antrean."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: The Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <ReservationForm
              preselectedServiceId={preselectedServiceId}
              preselectedMidwifeId={preselectedMidwifeId}
            />
          </div>

          {/* Right Column: Visit Preparation Checklist & Emergency Info (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 24 Hour Emergency Reminder */}
            <div className="p-6 rounded-3xl bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary/20 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-tertiary text-[26px]">
                  emergency
                </span>
                <h4 className="text-sm font-bold uppercase tracking-wider text-tertiary">
                  Layanan Gawat Darurat Bersalin
                </h4>
              </div>
              <p className="text-xs text-on-tertiary-fixed leading-relaxed mb-3">
                Untuk tanda-tanda persalinan aktif seperti <strong>kontraksi teratur setiap 5 menit, keluar lendir darah, atau ketuban pecah</strong>, bunda dapat langsung datang ke TPMB ANNISA LL tanpa perlu membuat janji terlebih dahulu.
              </p>
              <a
                href={`tel:${clinicInfo.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary text-on-tertiary text-xs font-bold shadow-xs hover:bg-tertiary/90 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Hubungi IGD: {clinicInfo.hotline}</span>
              </a>
            </div>

            {/* Checklist Dokumen */}
            <div className="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">checklist</span>
                Kelengkapan Dokumen yang Perlu Dibawa
              </h4>
              <ul className="space-y-2 text-xs text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">check_circle</span>
                  <span><strong>Buku KIA (Buku Pink):</strong> Wajib bagi ibu hamil, pascasalin, dan imunisasi bayi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">check_circle</span>
                  <span><strong>Kartu Identitas (KTP / KK):</strong> Untuk pencatatan rekam medis elektronik.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">check_circle</span>
                  <span><strong>Kartu BPJS Kesehatan:</strong> Jika memanfaatkan jaringan faskes kemitraan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">check_circle</span>
                  <span><strong>Hasil Lab / USG Terdahulu (jika ada):</strong> Membantu analisa riwayat kehamilan.</span>
                </li>
              </ul>
            </div>

            {/* Jam Operasional */}
            <div className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant/30 space-y-2 text-xs">
              <h4 className="font-bold text-on-surface flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Jadwal Praktik Harian
              </h4>
              <p className="text-on-surface-variant">
                <strong>Poli ANC &amp; Balita:</strong> Senin - Minggu (08.00 - 20.00 WIB)
              </p>
              <p className="text-on-surface-variant">
                <strong>Persalinan &amp; Tindakan Urgen:</strong> 24 Jam Penuh
              </p>
              <p className="text-on-surface-variant">
                <strong>Lokasi:</strong> {clinicInfo.address}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

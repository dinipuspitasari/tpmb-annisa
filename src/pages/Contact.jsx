import React from 'react';
import SEO from '../components/common/SEO.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import { clinicInfo } from '../data/clinic.js';

export default function Contact({ onNavigate }) {
  return (
    <div className="pt-28 pb-20 bg-surface">
      <SEO
        title="Kontak &amp; Lokasi - TPMB ANNISA LL"
        description="Hubungi TPMB ANNISA LL. Hotline bersalin 24 jam, konsultasi WhatsApp, alamat lengkap klinik di Jakarta Selatan dan rute Google Maps."
        path="/contact"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeader
            align="center"
            badge="Informasi Kontak &amp; Rute"
            badgeIcon="location_on"
            title="Hubungi &amp; Kunjungi TPMB ANNISA LL"
            subtitle="Kami siap melayani kebutuhan informasi, konsultasi online, maupun penanganan medis persalinan darurat 24 jam setiap hari."
          />
        </div>

        {/* 3 Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: 24h Emergency Hotline */}
          <div className="p-8 rounded-3xl bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary/20 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-tertiary text-on-tertiary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">phone_in_talk</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-tertiary block mb-1">
                Gawat Darurat 24 Jam
              </span>
              <h3 className="text-xl font-bold mb-2">Hotline Bersalin IGD</h3>
              <p className="text-xs text-on-tertiary-fixed leading-relaxed mb-4">
                Siaga panggilan darurat kontraksi aktif, ketuban pecah, atau konsultasi rujukan kebidanan.
              </p>
            </div>
            <a
              href={`tel:${clinicInfo.phone}`}
              className="w-full py-3 rounded-full bg-tertiary text-on-tertiary font-label-md font-bold text-center block shadow-xs hover:bg-tertiary/90 transition-colors"
            >
              Telepon: {clinicInfo.hotline}
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-8 rounded-3xl bg-secondary-fixed text-on-secondary-fixed border border-secondary/20 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">chat</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary block mb-1">
                Chat &amp; Reservasi
              </span>
              <h3 className="text-xl font-bold mb-2">WhatsApp Resmi</h3>
              <p className="text-xs text-on-secondary-fixed leading-relaxed mb-4">
                Layanan informasi jadwal praktek bidan, tanya jawab biaya, dan konfirmasi reservasi kunjungan.
              </p>
            </div>
            <a
              href={`https://wa.me/${clinicInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-secondary text-on-secondary font-label-md font-bold text-center block shadow-xs hover:bg-secondary/90 transition-colors"
            >
              Chat WhatsApp Bidan
            </a>
          </div>

          {/* Card 3: Form Booking */}
          <div className="p-8 rounded-3xl bg-surface-container-low text-on-surface border border-outline-variant/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">calendar_today</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                Daftar Online
              </span>
              <h3 className="text-xl font-bold mb-2">Buat Janji Temu</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                Pilih bidan dan jam kunjungan yang fleksibel sesuai waktu luang Anda dan keluarga.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('reservation')}
              className="w-full py-3 rounded-full bg-primary text-on-primary font-label-md font-bold text-center block shadow-xs hover:bg-primary/90 transition-colors"
            >
              Buka Form Reservasi
            </button>
          </div>

        </div>

        {/* Map and Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest p-6 sm:p-10 rounded-3xl border border-outline-variant/30 shadow-sm">
          
          {/* Address Details (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-bold text-on-surface font-headline-md">
              Lokasi &amp; Akses Fasilitas
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Klinik berlokasi di lingkungan yang nyaman dan mudah diakses menggunakan kendaraan pribadi maupun kendaraan roda empat.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">location_on</span>
                <div>
                  <strong className="text-on-surface block text-sm">{clinicInfo.name}</strong>
                  <span className="text-on-surface-variant">{clinicInfo.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">directions_car</span>
                <div>
                  <strong className="text-on-surface block">Akses Transportasi:</strong>
                  <span className="text-on-surface-variant">Dapat diakses menggunakan kendaraan pribadi dan kendaraan roda empat melalui akses jalan menuju lokasi.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">schedule</span>
                <div>
                  <strong className="text-on-surface block">Jam Operasional:</strong>
                  <span className="text-on-surface-variant">Klinik: 08.00 - 20.00 WIB | Persalinan: 24 Jam Penuh</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={clinicInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-high text-on-surface text-xs font-bold hover:bg-surface-container-highest transition-colors border border-outline-variant/30"
              >
                <span className="material-symbols-outlined text-[18px]">map</span>
                <span>Buka Petunjuk Arah di Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-outline-variant/30 h-80 sm:h-96 shadow-inner bg-surface-container-high">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6476040150096!2d107.2958894747499!3d-6.140373593846547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e697f011ab5e841%3A0x3ecbd478e661e586!2sTPMB%20ANNISA%20L%20L!5e1!3m2!1sid!2sid!4v1790262832327!5m2!1sid!2sid" width="100%" height="100%" style={{ border: "0" }} allowFullScreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

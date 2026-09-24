import React, { useState, useEffect } from 'react';
import { servicesData, midwivesData, clinicInfo } from '../../data/clinic.js';

export default function ReservationForm({ preselectedServiceId, preselectedMidwifeId }) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    serviceId: preselectedServiceId || servicesData[0]?.id || '',
    midwifeId: preselectedMidwifeId || midwivesData[0]?.id || '',
    date: '',
    timeSlot: 'Pagi (08:30 - 11:30 WIB)',
    notes: '',
    isBpjs: false
  });

  const [bookingSuccess, setBookingSuccess] = useState(null);

  // Sync if preselected props change
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (preselectedMidwifeId) {
      setFormData((prev) => ({ ...prev, midwifeId: preselectedMidwifeId }));
    }
  }, [preselectedMidwifeId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const selectedService = servicesData.find(
    (service) => service.id === formData.serviceId
  );

  const selectedMidwife = midwivesData.find(
    (midwife) => midwife.id === formData.midwifeId
  );

  const serviceName = selectedService
    ? selectedService.title
    : formData.serviceId;

  const midwifeName = selectedMidwife
    ? selectedMidwife.name
    : 'Bidan Jaga TPMB';

  const waText = encodeURIComponent(
    `Halo TPMB ANNISA LL, saya ingin melakukan reservasi pelayanan.

*Data Pasien*
Nama: ${formData.patientName}
No. WhatsApp: ${formData.phone}

*Detail Reservasi*
Layanan: ${serviceName}
Bidan: ${midwifeName}
Tanggal: ${formData.date}
Sesi: ${formData.timeSlot}

*Status Pembayaran*
${formData.isBpjs ? 'BPJS Kesehatan' : 'Umum / Mandiri'}

*Catatan / Keluhan*
${formData.notes || '-'}

Mohon informasi mengenai konfirmasi jadwal dan persyaratan yang perlu saya bawa.

Terima kasih.`
  );

  const waUrl = `https://wa.me/${clinicInfo.whatsapp}?text=${waText}`;

  // Langsung buka WhatsApp
  window.location.href = waUrl;
};

  return (
    <div className="w-full">
      {bookingSuccess ? (
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-secondary-container shadow-xl text-center animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-[36px]">check_circle</span>
          </div>

          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary-container text-on-secondary-container inline-block mb-2">
            Reservasi Berhasil Diajukan
          </span>

          <h3 className="text-2xl font-bold text-on-surface mb-1">
            Terima Kasih, Bunda {bookingSuccess.patientName}!
          </h3>
          <p className="text-sm text-on-surface-variant max-w-md mx-auto mb-6">
            Nomor registrasi antrean Anda telah dibuat. Tim admin bidan akan segera memverifikasi ketersediaan jadwal dokter/bidan.
          </p>

          <div className="bg-surface-container-low rounded-2xl p-5 max-w-md mx-auto text-left space-y-2.5 text-xs text-on-surface border border-outline-variant/30 mb-6">
            <div className="flex justify-between border-b border-outline-variant/20 pb-2">
              <span className="text-on-surface-variant">Kode Tiket Registrasi:</span>
              <span className="font-bold font-mono text-primary text-sm">{bookingSuccess.ticketId}</span>
            </div>
            <div className="flex justify-between border-b border-outline-variant/20 pb-2">
              <span className="text-on-surface-variant">Layanan:</span>
              <span className="font-semibold text-right">{bookingSuccess.serviceName}</span>
            </div>
            <div className="flex justify-between border-b border-outline-variant/20 pb-2">
              <span className="text-on-surface-variant">Bidan Pendamping:</span>
              <span className="font-semibold">{bookingSuccess.midwifeName}</span>
            </div>
            <div className="flex justify-between border-b border-outline-variant/20 pb-2">
              <span className="text-on-surface-variant">Jadwal Tanggal &amp; Sesi:</span>
              <span className="font-semibold">{bookingSuccess.date || 'Hari Ini / Besok'} ({bookingSuccess.timeSlot})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant">Status Pasien:</span>
              <span className="font-semibold">{bookingSuccess.isBpjs ? 'Mitra BPJS Kesehatan' : 'Pasien Umum'}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${clinicInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-on-secondary font-label-md font-bold shadow-md hover:bg-secondary/90 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Buka Chat WhatsApp Resmi</span>
            </a>
            <button
              type="button"
              onClick={() => setBookingSuccess(null)}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-surface-container-high text-on-surface font-label-md font-semibold hover:bg-surface-container-highest transition-colors"
            >
              Buat Reservasi Baru
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-outline-variant/30 shadow-md space-y-5"
        >
          <div className="border-b border-outline-variant/20 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-on-surface font-headline-md">
              Formulir Pendaftaran &amp; Konsultasi Bidan
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
              Silakan isi formulir di bawah ini. Layanan persalinan darurat siap 24 jam tanpa perlu janji temu terlebih dahulu.
            </p>
          </div>

          {/* Patient Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                Nama Lengkap Bunda / Wali Pasien <span className="text-tertiary">*</span>
              </label>
              <input
                type="text"
                required
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Contoh: Siti Rahmawati"
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                Nomor WhatsApp Aktif <span className="text-tertiary">*</span>
              </label>
              <input
                type="tel"
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0812-XXXX-XXXX"
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
            </div>
          </div>

          {/* Service & Midwife Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                Pilih Layanan Medis Kebidanan <span className="text-tertiary">*</span>
              </label>
              <select
                name="serviceId"
                value={formData.serviceId}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              >
                {(servicesData || []).map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.title || srv.name} ({srv.category})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                Bidan Pilihan / Bidan Jaga
              </label>
              <select
                name="midwifeId"
                value={formData.midwifeId}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              >
                {(midwivesData || []).map((mid) => (
                  <option key={mid.id} value={mid.id}>
                    {mid.name} ({mid.role || mid.title})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                Rencana Tanggal Kunjungan <span className="text-tertiary">*</span>
              </label>
              <input
                type="date"
                required
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                Sesi Waktu Pemeriksaan
              </label>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              >
                <option value="Pagi (08:30 - 11:30 WIB)">Sesi Pagi: 08:30 - 11:30 WIB</option>
                <option value="Siang (13:00 - 16:00 WIB)">Sesi Siang: 13:00 - 16:00 WIB</option>
                <option value="Sore / Malam (16:30 - 20:00 WIB)">Sesi Sore / Malam: 16:30 - 20:00 WIB</option>
              </select>
            </div>
          </div>

          {/* Notes / Gestational Age */}
          <div>
            <label className="block text-xs font-semibold text-on-surface mb-1.5">
              Usia Kehamilan / Riwayat Keluhan Singkat (Opsional)
            </label>
            <textarea
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Contoh: Hamil 32 minggu, ingin konsultasi rencana gentle birth dan cek denyut jantung janin."
              className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
            ></textarea>
          </div>

          {/* BPJS Checkbox */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <input
              type="checkbox"
              id="isBpjs"
              name="isBpjs"
              checked={formData.isBpjs}
              onChange={handleChange}
              className="w-4 h-4 text-secondary rounded focus:ring-secondary"
            />
            <label htmlFor="isBpjs" className="text-xs text-on-surface cursor-pointer select-none">
              Gunakan rujukan / kepesertaan <strong>BPJS Kesehatan (Faskes Tingkat 1)</strong>
            </label>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-tertiary text-on-tertiary font-label-lg font-bold shadow-lg hover:bg-tertiary/90 transition-all flex items-center justify-center gap-2 transform active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>Kirim &amp; Hubungkan ke WhatsApp Bidan</span>
            </button>
            <p className="text-[11px] text-center text-on-surface-variant mt-2.5">
              🛡️ Data medis Anda dijamin kerahasiaannya sesuai standar etika profesi kebidanan IBI.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

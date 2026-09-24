import React, { useState, useEffect } from 'react';
import { servicesData, clinicInfo } from '../../data/clinic.js';

export default function ReservationForm({ preselectedServiceId }) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    serviceId: preselectedServiceId || servicesData[0]?.id || '',
    date: '',
    timeSlot: 'Pagi (08:30 - 11:30 WIB)',
    notes: '',
    isBpjs: false,
  });

  const [bookingSuccess, setBookingSuccess] = useState(null);

  // Sync jika layanan yang dipilih dari halaman lain berubah
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({
        ...prev,
        serviceId: preselectedServiceId,
      }));
    }
  }, [preselectedServiceId]);

  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Submit reservasi ke WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedService = servicesData.find(
      (service) => service.id === formData.serviceId
    );

    const serviceName = selectedService
      ? selectedService.title || selectedService.name
      : formData.serviceId;

    const waText = encodeURIComponent(
      `Halo TPMB ANNISA LL, saya ingin melakukan reservasi pelayanan.

*Data Pasien*
Nama: ${formData.patientName}
No. WhatsApp: ${formData.phone}

*Detail Reservasi*
Layanan: ${serviceName}
Tanggal: ${formData.date}
Sesi: ${formData.timeSlot}

*Catatan / Keluhan*
${formData.notes || '-'}

Mohon informasi mengenai konfirmasi jadwal dan persyaratan yang perlu saya bawa.

Terima kasih.`
    );

    const waUrl = `https://wa.me/${clinicInfo.whatsapp}?text=${waText}`;

    // Langsung membuka WhatsApp
    window.location.href = waUrl;
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-outline-variant/30 shadow-md space-y-5"
      >
        {/* Header */}
        <div className="border-b border-outline-variant/20 pb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-on-surface font-headline-md">
            Formulir Pendaftaran &amp; Konsultasi Bidan
          </h3>

          <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
            Silakan isi formulir di bawah ini untuk melakukan reservasi
            pelayanan di TPMB ANNISA LL.
          </p>
        </div>

        {/* Patient Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Nama */}
          <div>
            <label className="block text-xs font-semibold text-on-surface mb-1.5">
              Nama Lengkap Bunda / Wali Pasien{' '}
              <span className="text-tertiary">*</span>
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

          {/* Nomor WhatsApp */}
          <div>
            <label className="block text-xs font-semibold text-on-surface mb-1.5">
              Nomor WhatsApp Aktif{' '}
              <span className="text-tertiary">*</span>
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

        {/* Service Selection */}
        <div>
          <label className="block text-xs font-semibold text-on-surface mb-1.5">
            Pilih Layanan Medis Kebidanan{' '}
            <span className="text-tertiary">*</span>
          </label>

          <select
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          >
            {(servicesData || []).map((srv) => (
              <option key={srv.id} value={srv.id}>
                {srv.title || srv.name}
                {srv.category ? ` (${srv.category})` : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Date & Time Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Date */}
          <div>
            <label className="block text-xs font-semibold text-on-surface mb-1.5">
              Rencana Tanggal Kunjungan{' '}
              <span className="text-tertiary">*</span>
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

          {/* Time Slot */}
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
              <option value="Pagi (08:30 - 11:30 WIB)">
                Sesi Pagi: 08:30 - 11:30 WIB
              </option>

              <option value="Siang (13:00 - 16:00 WIB)">
                Sesi Siang: 13:00 - 16:00 WIB
              </option>

              <option value="Sore / Malam (16:30 - 20:00 WIB)">
                Sesi Sore / Malam: 16:30 - 20:00 WIB
              </option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-semibold text-on-surface mb-1.5">
            Usia Kehamilan / Riwayat Keluhan Singkat (Opsional)
          </label>

          <textarea
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Contoh: Hamil 32 minggu, ingin konsultasi kehamilan."
            className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
          />
        </div>

        {/* Submit CTA */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-full bg-tertiary text-on-tertiary font-label-lg font-bold shadow-lg hover:bg-tertiary/90 transition-all flex items-center justify-center gap-2 transform active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">
              send
            </span>

            <span>Kirim &amp; Hubungkan ke WhatsApp</span>
          </button>

          <p className="text-[11px] text-center text-on-surface-variant mt-2.5">
            Setelah menekan tombol, Anda akan diarahkan ke WhatsApp TPMB
            ANNISA LL dengan pesan reservasi yang sudah terisi.
          </p>
        </div>
      </form>
    </div>
  );
}
import React from 'react';
import SectionHeader from '../common/SectionHeader.jsx';
import { clinicInfo } from '../../data/clinic.js';

export default function AboutSection({ onLearnMore }) {
  const pillars = [
    {
      icon: 'spa',
      title: 'Gentle & Natural Birth',
      desc: 'Mendukung proses persalinan alami yang minim intervensi medis, minim trauma fisik & emosional, serta memberdayakan naluri alami bunda.'
    },
    {
      icon: 'other_houses',
      title: 'Suasana Homey & Privat',
      desc: 'Ruang bersalin dan perawatan nifas bernuansa hangat layaknya kamar keluarga, dilengkapi aromaterapi, musik relaksasi, dan privasi optimal.'
    },
    {
      icon: 'diversity_1',
      title: 'Keterlibatan Penuh Suami & Keluarga',
      desc: 'Suami dan keluarga didorong mendampingi aktif di setiap tahapan, mulai dari teknik pernapasan, relaksasi pijat, hingga inisiasi menyusu dini (IMD).'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images collage (5 cols on lg) */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80"
                  alt="Konsultasi Bidan Penuh Empati"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&q=80"
                    alt="Kenyamanan Bayi Baru Lahir"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 rounded-2xl bg-primary-fixed/40 border border-primary-container/40">
                  <p className="text-xs font-bold text-on-primary-fixed leading-tight">
                    "Keluarga Sehat, Ibu Bahagia, Anak Cerdas Generasi Emas."
                  </p>
                  <p className="text-[11px] text-primary font-semibold mt-1">
                    Visi TPMB ANNISA LL
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Pillars (7 cols on lg) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeader
              badge="Tentang Praktik Mandiri Bidan"
              badgeIcon="medical_information"
              title="Dedikasi Penuh Kasih untuk Setiap Detak Jantung Baru"
              subtitle={`Di ${clinicInfo.name}, kami memandang kehamilan dan persalinan bukanlah sekadar peristiwa medis, melainkan mukjizat kehidupan spiritual dan emosional yang suci.`}
            />

            <div className="space-y-4 pt-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-secondary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">
                      {pillar.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-sm font-bold text-on-surface">
                      {pillar.title}
                    </h4>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {onLearnMore && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                >
                  <span>Baca Selengkapnya Profil &amp; Izin Resmi Bidan</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

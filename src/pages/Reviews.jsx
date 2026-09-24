import React, { useState } from 'react';
import SEO from '../components/common/SEO.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import { reviewsData, clinicInfo } from '../data/clinic.js';

export default function Reviews({ onNavigate }) {
  const [filterRating, setFilterRating] = useState('all');

  const filteredReviews = filterRating === 'all'
    ? reviewsData
    : reviewsData.filter(r => r.rating === parseInt(filterRating));

  return (
    <div className="pt-28 pb-20 bg-surface">
      <SEO
        title="Testimoni Pasien - Ulasan Pengalaman Bunda di TPMB ANNISA LL"
        description="Kumpulan testimoni jujur bunda dan keluarga yang melahirkan dan memeriksakan kehamilan di TPMB ANNISA LL. Penilaian bintang 4.9/5 dari ratusan ulasan."
        path="/reviews"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeader
            align="center"
            badge="Kepuasan &amp; Kebahagiaan Pasien"
            badgeIcon="favorite"
            title="Kisah Nyata dari Bunda &amp; Ayah Tercinta"
            subtitle="Mendengar cerita haru dan syukur dari para orang tua yang mempercayakan momen persalinan dan asuhan buah hati bersama kami."
          />
        </div>

        {/* Rating Overview Box */}
        <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/30 shadow-sm max-w-2xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="text-4xl sm:text-5xl font-extrabold text-on-surface">4.9<span className="text-lg text-on-surface-variant font-normal"> / 5.0</span></div>
            <div className="flex text-amber-500 justify-center sm:justify-start my-1.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[24px] filled">star</span>
              ))}
            </div>
            <p className="text-xs text-on-surface-variant">Berdasarkan 300+ ulasan terverifikasi</p>
          </div>

          <div className="flex flex-col gap-2 w-full sm:w-64">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-12 text-on-surface-variant">5 Bintang</span>
              <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full w-[94%]"></div>
              </div>
              <span className="font-semibold text-on-surface">94%</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-12 text-on-surface-variant">4 Bintang</span>
              <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full w-[6%]"></div>
              </div>
              <span className="font-semibold text-on-surface">6%</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/30 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px] filled">star</span>
                    ))}
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold">
                    {review.serviceTag || review.role}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed mb-6">
                  "{review.comment || review.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-surface-container-high/40">
                {review.avatar && review.avatar.startsWith('http') ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-outline-variant/30"
                  />
                ) : (
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${review.avatarBg || 'bg-primary-container text-on-primary'}`}>
                    {review.avatarInitial || review.avatar || review.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-on-surface leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-on-surface-variant">
                    {review.date || review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Review CTA */}
        <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 text-center max-w-xl mx-auto space-y-4">
          <h4 className="text-lg font-bold text-on-surface">
            Pernah Melahirkan atau Berobat di TPMB ANNISA LL?
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Ceritakan pengalaman Anda agar dapat memberikan inspirasi dan ketenangan bagi calon bunda lainnya.
          </p>
          <a
            href={`https://wa.me/${clinicInfo.whatsapp}?text=Halo%20TPMB%20ANNISA%20LL,%20saya%20ingin%20memberikan%20ulasan%20dan%20testimoni`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary text-on-secondary text-xs font-bold hover:bg-secondary/90 transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">rate_review</span>
            <span>Kirim Testimoni via WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}

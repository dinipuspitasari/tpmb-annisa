import React from 'react';
import SectionHeader from '../common/SectionHeader.jsx';
import { reviewsData } from '../../data/clinic.js';

export default function ReviewsPreview({ onViewAllReviews }) {
  // Show first 3 reviews on home
  const topReviews = reviewsData.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            badge="Cerita Hangat Pasien"
            badgeIcon="reviews"
            title="Kisah Pengalaman Melahirkan &amp; Asuhan Bidan"
            subtitle="Kebahagiaan bunda, senyum si kecil, dan ketenangan ayah adalah bukti dedikasi tulus tim bidan TPMB ANNISA LL."
          />
          {onViewAllReviews && (
            <button
              type="button"
              onClick={onViewAllReviews}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-low text-primary font-label-md font-bold border border-outline-variant/30 hover:bg-surface-container-high transition-colors shadow-2xs self-start md:self-auto"
            >
              <span>Lihat Semua Testimoni</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(topReviews || []).map((review) => (
            <div
              key={review.id}
              className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Stars & Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[20px] filled">
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold">
                    {review.serviceTag || review.role}
                  </span>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed mb-6">
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
                  <h4 className="text-sm font-bold text-on-surface leading-tight">
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

      </div>
    </section>
  );
}

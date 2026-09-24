import React from 'react';
import { highlightsData } from '../../data/clinic.js';

export default function ServiceHighlights() {
  return (
    <section className="py-10 bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-margin-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {(highlightsData || []).map((item, index) => (
            <div
              key={item?.id ? `stat-id-${item.id}` : `stat-idx-${index}`}
              className="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-2xs hover:shadow-md transition-shadow flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-fixed/50 text-primary flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[22px]">
                  {item?.icon || 'star'}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-headline-md text-on-surface tracking-tight">
                {item?.number || item?.value || ''}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-secondary mt-0.5">
                {item?.label || ''}
              </div>
              <p className="text-[11px] text-on-surface-variant mt-1 leading-snug hidden sm:block">
                {item?.description || ''}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

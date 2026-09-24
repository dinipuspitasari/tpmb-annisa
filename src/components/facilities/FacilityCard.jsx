import React from 'react';

export default function FacilityCard({ facility, onOpenDetail = () => {} }) {
  if (!facility) return null;

  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-outline-variant/30 hover:border-secondary-container transition-all duration-300 flex flex-col group">
      {/* Image container */}
      <div className="h-52 overflow-hidden relative">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={facility.name}
          src={facility.image}
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-secondary border border-secondary/20 shadow-2xs">
          {facility.category}
        </div>
      </div>

      {/* Info content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
            {facility.name}
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
            {facility.shortDesc}
          </p>
        </div>

        <div className="pt-4 mt-3 border-t border-surface-container-high/40 flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {(facility.highlights || []).slice(0, 2).map((item, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-medium"
              >
                {item}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => onOpenDetail(facility)}
            className="text-xs text-primary hover:text-primary/80 font-bold ml-2 underline focus:outline-none"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}

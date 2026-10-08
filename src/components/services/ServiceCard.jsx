import React from 'react';

export default function ServiceCard({ service, onSelectService = () => {}, onOpenDetail = () => {} }) {
  if (!service) return null;

  const iconBg = service.iconBg || 'bg-primary-fixed text-primary';
  const icon = service.icon || 'medical_services';
  const badgeColor = service.badgeColor || 'bg-surface-container-high text-on-surface-variant';
  const tag = service.tag || service.category || 'Layanan';
  const title = service.title || service.name || 'Layanan Medis Kebidanan';
  const shortDesc = service.shortDesc || '';
  const features = Array.isArray(service.features) ? service.features : [];
  const btnColor = service.btnColor || 'text-primary';
  const image = service.image;

  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-outline-variant/30 hover:border-secondary-container transition-all duration-300 group flex flex-col justify-between">
      {/* Top Image Banner */}
      {image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-container">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 right-3">
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${badgeColor} shadow-sm backdrop-blur-xs`}>
              {tag}
            </span>
          </div>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header row */}
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs flex-shrink-0`}>
              <span className="material-symbols-outlined text-[22px]">
                {icon}
              </span>
            </div>
            {!image && (
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-label-sm font-label-sm ${badgeColor} font-semibold ml-auto`}>
                {tag}
              </span>
            )}
            <h3 className="font-headline-sm text-base sm:text-lg text-on-surface font-bold group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>

          {/* Short description */}
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
            {shortDesc}
          </p>

          {/* Key feature bullet points */}
          <ul className="space-y-1.5 mb-4">
            {features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-[12px] text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-secondary flex-shrink-0 mt-0.5">
                  check
                </span>
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Action Row */}
        <div className="pt-4 mt-auto border-t border-surface-container-high/40 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onSelectService(service)}
            className={`inline-flex items-center gap-1 font-label-md text-label-md font-semibold ${btnColor} hover:underline focus:outline-none`}
          >
            <span>Pilih Layanan</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>

          <button
            type="button"
            onClick={() => onOpenDetail(service)}
            className="text-xs text-on-surface-variant hover:text-on-surface underline font-medium px-2.5 py-1 rounded hover:bg-surface-container-high transition-colors"
          >
            Detail &amp; Prosedur
          </button>
        </div>
      </div>
    </div>
  );
}

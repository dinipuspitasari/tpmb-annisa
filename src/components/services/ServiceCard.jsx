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

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-space-lg shadow-sm hover:shadow-lg border border-outline-variant/30 hover:border-secondary-container transition-all duration-300 group flex flex-col justify-between">
      <div>
        {/* Icon & Category Tag Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs`}>
            <span className="material-symbols-outlined text-[26px]">
              {icon}
            </span>
          </div>
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-label-sm font-label-sm ${badgeColor} font-semibold`}>
            {tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Short description */}
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
          {shortDesc}
        </p>

        {/* Key feature bullet points */}
        <ul className="space-y-1.5 mb-2">
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
      <div className="pt-4 mt-3 border-t border-surface-container-high/40 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onSelectService(service)}
          className={`inline-flex items-center gap-1 font-label-lg text-label-lg font-semibold ${btnColor} hover:underline focus:outline-none`}
        >
          <span>Pilih Layanan</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>

        <button
          type="button"
          onClick={() => onOpenDetail(service)}
          className="text-xs text-on-surface-variant hover:text-on-surface underline font-medium px-2 py-1 rounded hover:bg-surface-container-high transition-colors"
        >
          Detail &amp; Prosedur
        </button>
      </div>
    </div>
  );
}

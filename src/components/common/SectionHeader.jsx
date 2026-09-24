import React from 'react';

export default function SectionHeader({
  badge,
  badgeIcon = 'medical_services',
  badgeColor = 'bg-secondary-fixed text-on-secondary-fixed-variant',
  title,
  subtitle,
  align = 'left',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`flex flex-col ${
        isCenter ? 'items-center text-center max-w-2xl mx-auto' : 'items-start text-left max-w-xl'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-1 rounded-full font-label-md text-label-md mb-2.5 shadow-2xs border border-outline-variant/15 ${badgeColor}`}
        >
          {badgeIcon && (
            <span className="material-symbols-outlined text-[16px]">{badgeIcon}</span>
          )}
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className="font-headline-lg text-headline-lg text-on-surface leading-snug font-bold">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { servicesData } from '../../data/clinic.js';
import ServiceCard from './ServiceCard.jsx';

export default function ServiceGrid({ onSelectService, initialCategory = 'Semua' }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [detailModalService, setDetailModalService] = useState(null);

  const categories = ['Semua', 'Maternal', 'Anak', 'Laktasi', 'Reproduksi', 'Tindakan Medis'];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      selectedCategory === 'Semua' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelect = (service) => {
    if (onSelectService) {
      onSelectService(service);
    }
  };

  return (
    <div className="w-full">
      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-surface-container-lowest p-3 sm:p-4 rounded-2xl border border-outline-variant/30 shadow-2xs">
        {/* Category Chips */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-secondary text-on-secondary shadow-2xs scale-105'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari dari 11 layanan bidan..."
            className="w-full pl-9 pr-8 py-2 text-xs bg-surface-container-low text-on-surface rounded-full outline-none focus:ring-2 focus:ring-secondary/50 border border-outline-variant/20 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSelectService={handleSelect}
            onOpenDetail={(srv) => setDetailModalService(srv)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <div className="text-center py-14 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
          <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-2">
            search_off
          </span>
          <p className="text-on-surface font-semibold text-base">Layanan tidak ditemukan</p>
          <p className="text-sm text-on-surface-variant mt-1">Coba gunakan kata kunci pencarian yang lain.</p>
        </div>
      )}

      {/* Service Detail Modal */}
      {detailModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-surface-container-lowest max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/40 relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setDetailModalService(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-2xl ${detailModalService.iconBg} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-[28px]">
                  {detailModalService.icon}
                </span>
              </div>
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${detailModalService.badgeColor} mb-1`}>
                  Kategori: {detailModalService.category}
                </span>
                <h3 className="text-lg font-bold text-on-surface leading-tight">
                  {detailModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
              {detailModalService.fullDesc}
            </p>

            <div className="mb-6 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/20">
              <h4 className="text-xs uppercase font-bold tracking-wider text-secondary mb-3">
                Cakupan Asuhan &amp; Prosedur Terpadu
              </h4>
              <ul className="space-y-2">
                {(detailModalService.features || []).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-on-surface">
                    <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">
                      check_circle
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  const srv = detailModalService;
                  setDetailModalService(null);
                  handleSelect(srv);
                }}
                className="flex-1 py-3 px-4 rounded-full bg-tertiary text-on-tertiary font-label-md font-bold hover:bg-tertiary/90 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Pilih di Form Booking</span>
              </button>
              <button
                type="button"
                onClick={() => setDetailModalService(null)}
                className="py-3 px-5 rounded-full bg-surface-container-high text-on-surface font-label-md font-semibold hover:bg-surface-container-highest transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

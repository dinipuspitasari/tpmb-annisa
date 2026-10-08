import React from 'react';
import SEO from '../components/common/SEO.jsx';
import Hero from '../components/home/Hero.jsx';
import ServiceHighlights from '../components/home/ServiceHighlights.jsx';
import AboutSection from '../components/home/AboutSection.jsx';
import ServicesPreview from '../components/home/ServicesPreview.jsx';
import MidwifeSection from '../components/home/MidwifeSection.jsx';
import FacilitiesPreview from '../components/home/FacilitiesPreview.jsx';
import ReviewsPreview from '../components/home/ReviewsPreview.jsx';
import ReservationCTA from '../components/home/ReservationCTA.jsx';

export default function Home({
  onNavigate,
  onSelectServiceForBooking,
  onSelectMidwifeForBooking,
  onSelectServiceForDetail,
  onSelectFacilityForDetail,
}) {
  return (
    <div className="w-full">
      <SEO
        title="TPMB ANNISA LL - Sahabat Terbaik Ibu &amp; Buah Hati"
        description="Tempat Praktik Mandiri Bidan TPMB ANNISA LL. Pelayanan kehamilan antenatal care, persalinan gentle birth 24 jam, nifas, bayi baru lahir, imunisasi, MTBS, konseling laktasi, dan KB."
        path="/"
      />

      {/* Hero Section */}
      <Hero
        onBookConsultation={() => onNavigate('reservation')}
        onViewServices={() => onNavigate('services')}
      />

      {/* Highlights / Stats */}
      <ServiceHighlights />

      {/* About Preview */}
      <AboutSection onLearnMore={() => onNavigate('about')} />

      {/* Services Preview (cards with only image & service name) */}
      <ServicesPreview
        onSelectService={(service) => {
          if (onSelectServiceForDetail) {
            onSelectServiceForDetail(service);
          } else {
            onNavigate('services');
          }
        }}
        onViewAllServices={() => onNavigate('services')}
      />

      {/* Certified Midwives */}
      {/* <MidwifeSection
        onBookWithMidwife={(midwife) => {
          if (onSelectMidwifeForBooking) onSelectMidwifeForBooking(midwife);
          onNavigate('reservation');
        }}
      /> */}

      {/* Facilities Preview (cards with only image & facility name) */}
      <FacilitiesPreview
        onOpenFacilityDetail={(facility) => {
          if (onSelectFacilityForDetail) {
            onSelectFacilityForDetail(facility);
          } else {
            onNavigate('facilities');
          }
        }}
        onViewAllFacilities={() => onNavigate('facilities')}
      />

      {/* Testimonials Preview */}
      <ReviewsPreview onViewAllReviews={() => onNavigate('reviews')} />

      {/* Call to Action Banner */}
      <ReservationCTA onOpenReservation={() => onNavigate('reservation')} />
    </div>
  );
}

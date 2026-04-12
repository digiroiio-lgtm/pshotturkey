export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  "name": "PShotTurkey",
  "url": "https://pshotturkey.com",
  "logo": "https://pshotturkey.com/logo.png",
  "telephone": "+90-539-123-4567",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Istanbul",
    "addressCountry": "TR"
  },
  "sameAs": []
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PShotTurkey Clinic",
  "image": "https://pshotturkey.com/clinic.jpg",
  "url": "https://pshotturkey.com",
  "telephone": "+90-539-123-4567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Medical District",
    "addressLocality": "Istanbul",
    "addressRegion": "Istanbul",
    "postalCode": "34000",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.0082,
    "longitude": 28.9784
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  }
};

export function getMedicalProcedureSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": name,
    "procedureType": "P-Shot (PRP Therapy)",
    "bodyLocation": "Penile tissue",
    "description": description,
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Male patients"
    },
    "recognizingAuthority": {
      "@type": "Organization",
      "name": "Turkish Ministry of Health"
    }
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

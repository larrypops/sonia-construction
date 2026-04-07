import { Metadata } from "next";

export const siteConfig = {
  name: "SONIA CONSTRUCTION",
  phone: "+237 6 77 27 91 33",
  phoneHref: "tel:+237677279133",
  whatsapp: "+237677279133",
  whatsappHref:
    "https://wa.me/237677279133?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services%20de%20chapiteaux.%20J%E2%80%99aimerais%20avoir%20plus%20d%E2%80%99informations.",
  city: "Douala",
  country: "Cameroun",
  baseUrl: "https://www.sonia-construction.cm",
  description:
    "Sonia Construction est une entreprise basée à Douala, spécialisée dans la fabrication de chapiteaux et tentes, la vente de rouleaux de bâche et la location de chapiteaux pour événements et besoins professionnels au Cameroun.",
};

export const navigationLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const galleryImages = [
  {
    src: "/images/chapiteaux-1.JPG",
    alt: "Chapiteau installé par Sonia Construction à Douala",
    title: "Installation de chapiteau à Douala",
    description:
      "Montage propre et stable pour cérémonies, réceptions et rassemblements professionnels.",
  },
  {
    src: "/images/chapiteaux-2.JPG",
    alt: "Tente événementielle réalisée par Sonia Construction",
    title: "Tente événementielle au Cameroun",
    description:
      "Solutions esthétiques pour abriter vos invités et créer un espace accueillant.",
  },
  {
    src: "/images/chapiteaux-3.JPG",
    alt: "Installation de chapiteau pour événement à Douala",
    title: "Structure adaptée à vos besoins",
    description:
      "Configuration flexible pour mariages, réunions, lancements et manifestations diverses.",
  },
  {
    src: "/images/chapiteaux-4.JPG",
    alt: "Location de chapiteau à Douala",
    title: "Location rapide de chapiteaux",
    description:
      "Disponibilité rapide pour vos besoins de location à Douala et dans d'autres villes du Cameroun.",
  },
  {
    src: "/images/chapiteaux-5.JPG",
    alt: "Fabrication de chapiteau au Cameroun",
    title: "Chapiteaux solides et fiables",
    description:
      "Matériaux sélectionnés pour offrir protection, présence visuelle et tranquillité d'esprit.",
  },
];

export const serviceCards = [
  {
    title: "Fabrication de chapiteaux",
    description:
      "Nous réalisons des chapiteaux et tentes adaptés à différents besoins avec des structures solides, bien conçues et visuellement propres.",
    href: "/services",
    image: galleryImages[0],
  },
  {
    title: "Vente de rouleaux de bâche",
    description:
      "Nous proposons des rouleaux de bâche pour la couverture, la protection et l'aménagement, avec des solutions fiables disponibles à Douala.",
    href: "/services",
    image: galleryImages[1],
  },
  {
    title: "Location de chapiteaux",
    description:
      "Nous mettons à disposition des chapiteaux en location pour cérémonies, réceptions, événements et autres besoins ponctuels à Douala.",
    href: "/contact",
    image: galleryImages[3],
  },
];

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "fr_CM",
      type: "website",
      images: [
        {
          url: `${siteConfig.baseUrl}/images/chapiteaux-1.JPG`,
          width: 1080,
          height: 810,
          alt: "Chapiteau installé par Sonia Construction à Douala",
        },
      ],
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  areaServed: ["Douala", "Cameroun"],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressCountry: siteConfig.country,
  },
  url: siteConfig.baseUrl,
  sameAs: [siteConfig.whatsappHref],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Fabrication de chapiteaux à Douala",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Location de chapiteaux à Douala",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Rouleaux de bâche au Cameroun",
      },
    },
  ],
};

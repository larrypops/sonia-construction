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
    "Sonia Construction vous accompagne à Douala pour la fabrication, la vente et la location de chapiteaux, tentes et bâches avec un contact rapide par appel ou WhatsApp.",
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
      "Un rendu propre, stable et rassurant pour vos cérémonies, réceptions et événements.",
  },
  {
    src: "/images/chapiteaux-2.JPG",
    alt: "Tente événementielle réalisée par Sonia Construction",
    title: "Tente événementielle au Cameroun",
    description:
      "Une solution esthétique pour protéger vos invités et valoriser votre événement.",
  },
  {
    src: "/images/chapiteaux-3.JPG",
    alt: "Installation de chapiteau pour événement à Douala",
    title: "Structure adaptée à vos besoins",
    description:
      "Une configuration flexible pour mariages, réunions, lancements et autres besoins ponctuels.",
  },
  {
    src: "/images/chapiteaux-4.JPG",
    alt: "Location de chapiteau à Douala",
    title: "Location rapide de chapiteaux",
    description:
      "Une disponibilité rapide pour vos besoins de location à Douala et selon faisabilité dans d'autres villes.",
  },
  {
    src: "/images/chapiteaux-5.JPG",
    alt: "Fabrication de chapiteau au Cameroun",
    title: "Chapiteaux solides et fiables",
    description:
      "Des matériaux choisis pour offrir protection, bonne tenue visuelle et tranquillité d'esprit.",
  },
];

export const serviceCards = [
  {
    title: "Fabrication de chapiteaux",
    description:
      "Des chapiteaux conçus pour durer, bien finis et adaptés à votre besoin.",
    href: "/services",
    image: galleryImages[0],
  },
  {
    title: "Vente de rouleaux de bâche",
    description:
      "Des rouleaux de bâche fiables pour protéger, couvrir et aménager efficacement.",
    href: "/services",
    image: galleryImages[1],
  },
  {
    title: "Location de chapiteaux",
    description:
      "Une solution simple et rapide pour vos cérémonies, réceptions et événements à Douala.",
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

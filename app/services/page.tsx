import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/CTA";
import ServiceCard from "@/components/ServiceCard";
import { buildMetadata, serviceCards } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Services | Fabrication, location de chapiteaux et vente de bâche à Douala",
  description:
    "Découvrez les services de Sonia Construction à Douala : fabrication de chapiteaux et tentes, vente de rouleaux de bâche et location de chapiteaux pour événements et besoins professionnels.",
  path: "/services",
});

const serviceDetails = [
  {
    title: "Fabrication de chapiteaux et tentes à Douala",
    text: "Vous avez besoin d’une structure sur mesure, solide et bien présentée ? Nous fabriquons des chapiteaux et tentes adaptés à plusieurs usages avec un vrai souci de finition.",
    points: [
      "Structures adaptées à plusieurs usages",
      "Finition soignée",
      "Bonne tenue et présentation",
      "Solutions locales à Douala",
      "Accompagnement selon le besoin",
    ],
  },
  {
    title: "Vente de rouleaux de bâche à Douala",
    text: "Nous mettons à votre disposition des rouleaux de bâche pour couvrir, protéger ou aménager efficacement vos espaces selon votre besoin.",
    points: [
      "Solution de protection et de couverture",
      "Usage pratique et professionnel",
      "Produits adaptés au terrain",
      "Disponible à Douala",
      "Accompagnement client",
    ],
  },
  {
    title: "Location de chapiteaux à Douala",
    text: "Pour un besoin ponctuel, la location vous permet d’obtenir une installation prête à l’emploi sans passer par un achat. C’est une solution pratique pour cérémonies, événements et activités professionnelles.",
    points: [
      "Pour événements et cérémonies",
      "Pour besoins ponctuels",
      "Solution pratique et professionnelle",
      "Présentation propre",
      "Disponibilité locale à Douala",
    ],
  },
];

const audiences = [
  "Particuliers ayant besoin d’un chapiteau pour une cérémonie ou un événement",
  "Organisateurs d’événements recherchant une solution pratique et esthétique",
  "Entreprises souhaitant une installation temporaire ou professionnelle",
  "Commerçants et structures locales",
  "Associations, groupes et institutions",
  "Toute personne recherchant des chapiteaux, tentes ou bâches à Douala",
];

const faqItems = [
  {
    q: "Proposez-vous la location de chapiteaux à Douala ?",
    a: "Oui, Sonia Construction propose la location de chapiteaux à Douala pour différents types d’événements, cérémonies et besoins ponctuels.",
  },
  {
    q: "Vendez-vous aussi des rouleaux de bâche ?",
    a: "Oui, nous proposons la vente de rouleaux de bâche pour des usages de couverture, de protection et d’aménagement.",
  },
  {
    q: "Peut-on demander une fabrication de chapiteau adaptée au besoin ?",
    a: "Oui, nous proposons des solutions de fabrication de chapiteaux et tentes adaptées à plusieurs usages.",
  },
  {
    q: "Vos services sont-ils disponibles uniquement à Douala ?",
    a: "Notre entreprise est basée à Douala, mais selon le besoin, nous pouvons échanger avec les clients pour voir la faisabilité d’une intervention.",
  },
  {
    q: "Comment demander un devis ?",
    a: "Vous pouvez nous contacter directement par téléphone ou sur WhatsApp au +237 6 77 27 91 33.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">Services a Douala</span>
            <h1 className="section-title" style={{ marginTop: "1rem" }}>
              Nos services en chapiteaux, tentes et bâches à Douala
            </h1>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Choisissez le service qui correspond à votre besoin: fabrication,
              vente de bâche ou location de chapiteaux. Notre objectif est de vous
              apporter une solution claire, pratique et rapide à Douala.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid grid-3">
            {serviceCards.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid">
          {serviceDetails.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.08}>
              <article className="info-card panel">
                <span className="eyebrow">Notre solution</span>
                <h2 style={{ margin: "1rem 0 0.8rem", fontSize: "1.8rem" }}>{service.title}</h2>
                <p>{service.text}</p>
                <ul className="details-list" style={{ marginTop: "1.25rem" }}>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <AnimatedSection>
            <span className="eyebrow">Public concerné</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              À qui s’adressent nos services ?
            </h2>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Nos services s’adressent à différents profils de clients à Douala et
              au Cameroun.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ul className="details-list">
              {audiences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">FAQ SEO</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Questions fréquentes
            </h2>
          </AnimatedSection>
          <div className="card-grid grid-2" style={{ marginTop: "2rem" }}>
            {faqItems.map((item, index) => (
              <AnimatedSection key={item.q} delay={index * 0.06}>
                <article className="info-card panel">
                  <strong>{item.q}</strong>
                  <p style={{ marginTop: "0.7rem" }}>{item.a}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Parlez-nous de votre besoin"
        description="Dites-nous ce qu’il vous faut et nous vous répondrons rapidement avec la solution la plus adaptée."
      />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CallButton from "@/components/CallButton";
import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { buildMetadata, galleryImages, serviceCards, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Sonia Construction | Fabrication, vente et location de chapiteaux à Douala",
  description:
    "Sonia Construction à Douala vous propose la fabrication de chapiteaux et tentes, la vente de rouleaux de bâche et la location de chapiteaux pour événements, cérémonies et besoins professionnels au Cameroun.",
  path: "/",
});

const features = [
  {
    title: "Réponse rapide",
    description:
      "Vous obtenez rapidement une orientation claire par téléphone ou sur WhatsApp.",
  },
  {
    title: "Rendu propre",
    description:
      "Nous mettons l’accent sur une installation solide, stable et bien présentée.",
  },
  {
    title: "Solutions adaptées",
    description:
      "Fabrication, vente ou location: nous vous proposons la formule la plus utile selon votre besoin.",
  },
  {
    title: "Entreprise locale",
    description:
      "Basés à Douala, nous comprenons mieux les contraintes du terrain et les attentes de nos clients.",
  },
  {
    title: "Confiance visuelle",
    description:
      "Nos images réelles vous montrent le niveau de finition attendu avant même de nous contacter.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-layout">
          <AnimatedSection className="hero-copy">
            <span className="eyebrow">Douala, Cameroun</span>
            <h1 className="hero-title">Des solutions professionnelles de chapiteaux, tentes et bâches à Douala</h1>
            <p className="lead">
              Besoin d’un chapiteau, d’une tente ou de rouleaux de bâche à Douala ?
              Sonia Construction vous propose une réponse rapide, un accompagnement
              sérieux et des installations propres.
            </p>
            <p className="section-copy">
              Fabrication sur mesure, location pour événements ou vente de bâche:
              nous vous aidons à trouver la solution adaptée à votre besoin, à votre
              délai et à votre budget.
            </p>
            <div className="button-row">
              <Link href="/contact" className="btn btn-primary">
                Demander un devis
              </Link>
              <Link href="/realisations" className="btn btn-secondary">
                Voir nos réalisations
              </Link>
              <WhatsAppButton label="Nous écrire sur WhatsApp" />
            </div>
            <ul className="pill-list">
              <li>Fabrication sur mesure</li>
              <li>Location événementielle</li>
              <li>Rouleaux de bâche de qualité</li>
            </ul>
            <div className="metric-strip">
              <div className="metric">
                <strong>Douala</strong>
                <span>Un partenaire local pour vos besoins en chapiteaux et bâches</span>
              </div>
              <div className="metric">
                <strong>WhatsApp</strong>
                <span>Le canal prioritaire pour obtenir une réponse rapide</span>
              </div>
              <div className="metric">
                <strong>Images réelles</strong>
                <span>Des réalisations concrètes pour inspirer confiance</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="hero-visual" delay={0.12}>
            <div className="hero-image-frame">
              <Image
                src="/images/chapiteaux-1.JPG"
                alt="Chapiteau installé par Sonia Construction à Douala"
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 42vw"
              />
            </div>
            <div className="hero-badge panel">
              <strong>Fabrication, vente et location de chapiteaux à Douala</strong>
              <p>
                Décrivez votre besoin en quelques messages et obtenez une réponse
                rapide avec la solution la plus adaptée.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">Présentation</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Votre partenaire local pour les chapiteaux et bâches à Douala
            </h2>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Nous accompagnons particuliers, entreprises et organisateurs
              d’événements avec des solutions concrètes en chapiteaux, tentes et
              bâches à Douala.
            </p>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Notre priorité est simple: vous proposer une structure fiable, bien
              présentée et facile à commander, avec un contact rapide par appel ou
              WhatsApp.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">Nos services</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Nos services
            </h2>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Trois solutions claires pour répondre rapidement à votre besoin.
            </p>
          </AnimatedSection>
          <div className="card-grid grid-3" style={{ marginTop: "2rem" }}>
            {serviceCards.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <AnimatedSection>
            <span className="eyebrow">Pourquoi nous choisir</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Pourquoi choisir Sonia Construction à Douala ?
            </h2>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Nous allons à l’essentiel: une réponse rapide, un service sérieux et
              un résultat propre pour vous aider à avancer sans perdre de temps.
            </p>
            <div className="button-row" style={{ marginTop: "1.5rem" }}>
              <CallButton label="Appeler maintenant" />
              <WhatsAppButton label="Obtenir une réponse rapide" />
            </div>
          </AnimatedSection>

          <div className="card-grid grid-2">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.08}>
                <article className="feature-card panel">
                  <div className="feature-index">0{index + 1}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">Realisations</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Quelques-unes de nos réalisations
            </h2>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Voici un aperçu concret de notre travail. Ces réalisations montrent le
              niveau de propreté, de stabilité et de présentation que vous pouvez
              attendre.
            </p>
          </AnimatedSection>
          <div style={{ marginTop: "2rem" }}>
            <Gallery items={galleryImages.slice(0, 3)} variant="showcase" />
          </div>
          <AnimatedSection delay={0.18}>
            <div className="button-row" style={{ marginTop: "1.8rem" }}>
              <Link href="/realisations" className="btn btn-secondary">
                Voir nos réalisations
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">SEO local</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Chapiteaux, tentes et bâches à Douala
            </h2>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Si vous recherchez une entreprise de chapiteaux à Douala pour une
              fabrication, une location ou un besoin en bâche, Sonia Construction
              vous accompagne avec une solution locale, fiable et rapide à mettre en
              place.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTA
        title="Besoin d’un chapiteau, d’une bâche ou d’une installation adaptée ?"
        description="Expliquez-nous votre besoin et nous vous orienterons rapidement vers la bonne solution, par appel ou sur WhatsApp."
      />
    </>
  );
}

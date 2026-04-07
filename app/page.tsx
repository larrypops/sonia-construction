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
    title: "Savoir-faire local",
    description:
      "Nous connaissons les besoins des clients à Douala et au Cameroun, et nous proposons des solutions adaptées aux réalités locales.",
  },
  {
    title: "Structures solides et fiables",
    description:
      "Nous mettons l’accent sur la robustesse, la durabilité et la bonne présentation de chaque installation.",
  },
  {
    title: "Service professionnel",
    description:
      "Nous travaillons avec sérieux, réactivité et engagement pour offrir une expérience rassurante à nos clients.",
  },
  {
    title: "Solutions adaptées à plusieurs usages",
    description:
      "Nos chapiteaux, tentes et bâches peuvent répondre à des besoins événementiels, commerciaux, professionnels ou pratiques.",
  },
  {
    title: "Accompagnement rapide",
    description:
      "Nous restons disponibles pour vous orienter, vous renseigner et vous proposer la solution la plus adaptée à votre besoin.",
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
              Sonia Construction accompagne particuliers, entreprises, organisateurs
              d’événements et professionnels avec des solutions fiables de
              fabrication, de vente et de location de chapiteaux à Douala et au
              Cameroun.
            </p>
            <p className="section-copy">
              Vous recherchez une entreprise sérieuse pour la fabrication de
              chapiteaux, la vente de rouleaux de bâche ou la location de
              chapiteaux à Douala ? Sonia Construction met à votre disposition son
              savoir-faire pour répondre à vos besoins avec des installations
              solides, soignées et adaptées à différents usages.
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
                Contactez-nous par appel ou sur WhatsApp pour discuter de votre
                besoin, demander un devis rapide et obtenir une solution adaptée.
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
              Basée à Douala, Sonia Construction propose des services
              professionnels dans le domaine des chapiteaux, tentes et bâches. Nous
              intervenons pour différents besoins, qu’il s’agisse de fabrication sur
              mesure, de location pour événements ou de vente de rouleaux de bâche.
            </p>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Nous mettons l’accent sur la qualité, la solidité des structures, la
              bonne finition et un accompagnement sérieux. Notre entreprise
              s’adresse aux particuliers, entreprises, commerçants, organisateurs
              d’événements, associations et structures locales.
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
              Choisir Sonia Construction, c’est faire appel à une entreprise locale
              qui comprend les besoins du terrain et qui met la qualité du service
              au centre de son travail.
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
              Découvrez un aperçu du travail réalisé par Sonia Construction à
              Douala. Nos réalisations reflètent notre engagement pour des
              installations propres, solides et adaptées aux besoins du client.
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
              Si vous recherchez une entreprise spécialisée dans la fabrication de
              chapiteaux à Douala, la location de chapiteaux pour événements ou la
              vente de rouleaux de bâche au Cameroun, Sonia Construction est à votre
              service. Notre présence à Douala nous permet d’accompagner
              efficacement les particuliers et professionnels qui souhaitent une
              solution locale, fiable et sérieuse.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTA
        title="Besoin d’un chapiteau, d’une bâche ou d’une installation adaptée ?"
        description="Que vous ayez besoin d’une fabrication sur mesure, d’une location de chapiteaux ou de rouleaux de bâche, Sonia Construction est disponible pour vous accompagner. Contactez-nous dès maintenant pour obtenir des informations, discuter de votre besoin ou demander un devis rapide."
      />
    </>
  );
}

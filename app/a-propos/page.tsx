import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "À propos | Sonia Construction à Douala",
  description:
    "Découvrez Sonia Construction, entreprise basée à Douala spécialisée dans la fabrication de chapiteaux et tentes, la vente de bâche et la location de chapiteaux au Cameroun.",
  path: "/a-propos",
});

const values = [
  {
    title: "Professionnalisme",
    text: "Nous attachons de l’importance au sérieux, à la rigueur et à la qualité du service.",
  },
  {
    title: "Qualité",
    text: "Nous cherchons à proposer des solutions fiables, durables et bien réalisées.",
  },
  {
    title: "Réactivité",
    text: "Nous savons que les clients ont besoin d’une réponse claire et rapide.",
  },
  {
    title: "Confiance",
    text: "Nous travaillons pour établir une relation rassurante et durable avec nos clients.",
  },
  {
    title: "Proximité",
    text: "En tant qu’entreprise basée à Douala, nous restons proches des réalités locales et des besoins du terrain.",
  },
];

export default function AProposPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">Entreprise locale</span>
            <h1 className="section-title" style={{ marginTop: "1rem" }}>
              À propos de Sonia Construction
            </h1>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Sonia Construction est une entreprise basée à Douala, spécialisée dans
              la fabrication de chapiteaux et tentes, la vente de rouleaux de bâche
              et la location de chapiteaux. Nous accompagnons une clientèle variée
              avec des solutions pratiques, professionnelles et adaptées aux
              réalités du terrain.
            </p>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Notre entreprise s’appuie sur une approche simple : proposer un
              service sérieux, un travail propre et des solutions utiles aux
              particuliers comme aux professionnels.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <AnimatedSection className="image-stack">
            <div className="image-stack-main">
              <Image
                src="/images/chapiteaux-4.JPG"
                alt="Réalisation de chapiteau à Douala au Cameroun"
                fill
                sizes="(max-width: 1100px) 100vw, 46vw"
              />
            </div>
            <div className="image-stack-side">
              <Image
                src="/images/chapiteaux-2.JPG"
                alt="Structure de chapiteau proposée par Sonia Construction"
                fill
                sizes="(max-width: 1100px) 100vw, 46vw"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <span className="eyebrow">Notre mission</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Offrir un service fiable et professionnel à Douala
            </h2>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Notre mission est d’offrir à nos clients à Douala et au Cameroun des
              solutions fiables en chapiteaux, tentes et bâches, avec un haut niveau
              de sérieux, une bonne qualité d’exécution et un accompagnement
              professionnel.
            </p>
            <article className="info-card panel" style={{ marginTop: "1.5rem" }}>
              <strong>Notre vision</strong>
              <p style={{ marginTop: "0.8rem" }}>
                Nous voulons devenir une référence locale à Douala dans le domaine
                de la fabrication de chapiteaux, de la location de chapiteaux et de
                la vente de bâche, en bâtissant une réputation fondée sur la qualité
                du travail, la confiance et la satisfaction de nos clients.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">Nos valeurs</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Des valeurs qui renforcent la confiance
            </h2>
          </AnimatedSection>
          <div className="card-grid grid-3" style={{ marginTop: "2rem" }}>
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.08}>
                <article className="feature-card panel">
                  <div className="feature-index">0{index + 1}</div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <article className="info-card panel" style={{ marginTop: "2rem" }}>
              <strong>Une présence locale rassurante</strong>
              <p style={{ marginTop: "0.8rem" }}>
                Sonia Construction ne se limite pas à fournir un produit ou une
                structure. Nous cherchons à apporter une vraie solution, adaptée à
                votre besoin, avec le niveau de sérieux attendu d’une entreprise
                professionnelle. Notre présence à Douala nous permet de mieux
                comprendre les attentes de notre clientèle et de proposer un
                accompagnement concret.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <CTA
        title="Besoin d’en savoir plus sur nos services ?"
        description="Nous sommes disponibles pour répondre à vos questions, vous orienter et vous proposer une solution adaptée à votre besoin en chapiteaux, tentes ou bâches."
      />
    </>
  );
}

import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import { buildMetadata, galleryImages } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Réalisations | Chapiteaux installés par Sonia Construction à Douala",
  description:
    "Découvrez les réalisations de Sonia Construction à Douala : installations de chapiteaux, tentes et solutions adaptées pour événements et besoins professionnels au Cameroun.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">Galerie</span>
            <h1 className="section-title" style={{ marginTop: "1rem" }}>
              Nos réalisations en chapiteaux et tentes à Douala
            </h1>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Les réalisations de Sonia Construction témoignent de notre savoir-faire
              dans la fabrication, l’installation et la location de chapiteaux à
              Douala. À travers nos interventions, nous cherchons à offrir des
              structures propres, solides et adaptées au besoin du client.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <p className="section-copy" style={{ marginBottom: "2rem" }}>
              Chaque projet est une occasion de démontrer notre sérieux, notre sens
              du détail et notre engagement pour un travail bien exécuté. Les images
              de nos réalisations permettent d’avoir un aperçu concret du type
              d’installations que nous proposons.
            </p>
          </AnimatedSection>
          <Gallery items={galleryImages} />
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <AnimatedSection>
            <span className="eyebrow">SEO local</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Des installations de chapiteaux visibles à Douala
            </h2>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Sonia Construction intervient à Douala pour proposer des solutions de
              chapiteaux adaptées à différents besoins. Notre galerie de
              réalisations permet de découvrir le type de structures que nous
              mettons à disposition pour les événements, activités et besoins
              ponctuels.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <article className="info-card panel">
              <strong>Un rendu propre et rassurant</strong>
              <p style={{ marginTop: "0.8rem" }}>
                Chaque réalisation présentée sur cette page reflète notre volonté de
                fournir un travail sérieux, propre et rassurant. Nous accordons de
                l’importance à la stabilité de la structure, à la présentation
                visuelle et à l’adaptation au besoin du client.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <CTA
        title="Vous souhaitez une installation similaire ?"
        description="Contactez Sonia Construction pour discuter de votre besoin. Nous sommes disponibles pour vous orienter vers une solution adaptée en fabrication, location de chapiteaux ou vente de bâche à Douala."
      />
    </>
  );
}

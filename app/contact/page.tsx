import AnimatedSection from "@/components/AnimatedSection";
import CallButton from "@/components/CallButton";
import CTA from "@/components/CTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact | Sonia Construction Douala",
  description:
    "Contactez Sonia Construction à Douala pour la fabrication de chapiteaux, la vente de rouleaux de bâche et la location de chapiteaux. Téléphone et WhatsApp : +237 6 77 27 91 33.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">Contact direct</span>
            <h1 className="section-title" style={{ marginTop: "1rem" }}>
              Contactez Sonia Construction
            </h1>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Vous avez besoin d’un devis, d’une disponibilité ou d’un conseil
              rapide ? Contactez-nous pour votre besoin en chapiteaux, tentes ou
              bâches à Douala.
            </p>
            <p className="section-copy" style={{ marginTop: "1rem" }}>
              Le plus simple reste WhatsApp ou l’appel direct pour recevoir une
              réponse rapide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <AnimatedSection>
            <article className="contact-card panel">
              <span className="eyebrow">Coordonnees</span>
              <h2 style={{ margin: "1rem 0 1rem", fontSize: "2rem" }}>
                Informations de contact
              </h2>
              <p className="section-copy" style={{ marginBottom: "1rem" }}>
                Appelez-nous ou écrivez-nous sur WhatsApp pour présenter rapidement
                votre besoin et obtenir une réponse claire.
              </p>
              <ul className="details-list">
                <li>
                  <span className="details-label">Téléphone</span>
                  <span>{siteConfig.phone}</span>
                </li>
                <li>
                  <span className="details-label">WhatsApp</span>
                  <span>{siteConfig.phone}</span>
                </li>
                <li>
                  <span className="details-label">Adresse</span>
                  <span>Douala, Cameroun</span>
                </li>
              </ul>
              <div className="button-row" style={{ marginTop: "1.5rem" }}>
                <CallButton label="Appeler" />
                <WhatsAppButton label="WhatsApp" />
              </div>
            </article>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="form-shell panel">
              <span className="eyebrow">Formulaire</span>
              <h3 style={{ marginTop: "1rem" }}>Présentez votre besoin</h3>
              <p>
                Laissez-nous vos informations et décrivez votre besoin. Nous pourrons
                ensuite vous recontacter avec une réponse adaptée.
              </p>
              <form className="form-grid">
                <div className="field">
                  <label htmlFor="nom">Nom</label>
                  <input id="nom" name="nom" type="text" placeholder="Votre nom" />
                </div>
                <div className="field">
                  <label htmlFor="telephone">Téléphone</label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="+237..."
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="Votre email" />
                </div>
                <div className="field">
                  <label htmlFor="service">Service souhaité</label>
                  <input
                    id="service"
                    name="service"
                    type="text"
                    placeholder="Fabrication, vente de bâche ou location"
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre besoin, votre date et votre localisation"
                  />
                </div>
                <button type="button" className="btn btn-primary">
                  Envoyer
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid grid-2">
          <AnimatedSection>
            <article className="info-card panel">
              <span className="eyebrow">WhatsApp</span>
              <h2 style={{ margin: "1rem 0 0.8rem", fontSize: "1.8rem" }}>
                Contact rapide par WhatsApp
              </h2>
              <p>
                Pour aller plus vite, envoyez directement votre besoin sur WhatsApp.
                C’est le moyen le plus simple pour demander un devis ou une
                disponibilité.
              </p>
              <div className="button-row" style={{ marginTop: "1.25rem" }}>
                <WhatsAppButton label="WhatsApp" />
              </div>
            </article>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <article className="info-card panel">
              <span className="eyebrow">Appel direct</span>
              <h2 style={{ margin: "1rem 0 0.8rem", fontSize: "1.8rem" }}>
                Appelez-nous directement
              </h2>
              <p>
                Vous préférez parler directement ? Appelez-nous pour expliquer votre
                besoin et obtenir une orientation rapide.
              </p>
              <div className="button-row" style={{ marginTop: "1.25rem" }}>
                <CallButton label="Appeler" />
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <CTA
        title="Parlons de votre projet"
        description="Un appel ou un message WhatsApp suffit pour lancer votre demande et recevoir une réponse rapide."
      />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { navigationLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap panel">
          <div className="footer-grid">
            <div>
              <div className="footer-brand brand" style={{ marginBottom: "1rem" }}>
                <div className="brand-logo">
                  <Image src="/images/logo.JPG" alt="Logo Sonia Construction" fill sizes="56px" />
                </div>
                <div>
                  <strong>SONIA CONSTRUCTION</strong>
                  <span>Fabrication, vente et location de chapiteaux</span>
                </div>
              </div>
              <p>
                Sonia Construction est une entreprise basée à Douala, spécialisée dans
                la fabrication de chapiteaux et tentes, la vente de rouleaux de bâche
                et la location de chapiteaux.
              </p>
            </div>

            <div>
              <h4>Liens rapides</h4>
              <ul>
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul>
                <li>Douala, Cameroun</li>
                <li>Téléphone : {siteConfig.phone}</li>
                <li>
                  <Link href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                    WhatsApp : {siteConfig.phone}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: "1.5rem" }}>© Sonia Construction. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

type CTAProps = {
  title: string;
  description: string;
};

export default function CTA({ title, description }: CTAProps) {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="cta-banner panel">
          <div>
            <span className="eyebrow">Devis rapide</span>
            <h2 className="section-title" style={{ maxWidth: "14ch", marginTop: "1rem" }}>
              {title}
            </h2>
          </div>
          <p>{description}</p>
          <div className="button-row">
            <WhatsAppButton label="WhatsApp" />
            <CallButton label="Appeler" />
          </div>
        </div>
      </div>
    </section>
  );
}

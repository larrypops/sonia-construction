import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

type CTAProps = {
  title: string;
  description: string;
  whatsappLabel?: string;
  callLabel?: string;
};

export default function CTA({
  title,
  description,
  whatsappLabel = "Demander un devis WhatsApp",
  callLabel = "Appeler maintenant",
}: CTAProps) {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="cta-banner panel">
          <div>
            <span className="eyebrow">Action rapide</span>
            <h2 className="section-title" style={{ maxWidth: "14ch", marginTop: "1rem" }}>
              {title}
            </h2>
          </div>
          <p>{description}</p>
          <div className="button-row">
            <WhatsAppButton label={whatsappLabel} />
            <CallButton label={callLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}

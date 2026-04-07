import Link from "next/link";
import { siteConfig } from "@/lib/site";

type WhatsAppButtonProps = {
  className?: string;
  label?: string;
  floating?: boolean;
};

export default function WhatsAppButton({
  className = "btn btn-whatsapp",
  label = "Écrire sur WhatsApp",
  floating = false,
}: WhatsAppButtonProps) {
  return (
    <Link
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className={floating ? "floating-whatsapp" : className}
      aria-label="Contacter Sonia Construction sur WhatsApp"
    >
      {floating ? "WA" : <>WhatsApp <span>{label}</span></>}
    </Link>
  );
}

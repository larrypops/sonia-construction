import Link from "next/link";
import { siteConfig } from "@/lib/site";

type WhatsAppButtonProps = {
  className?: string;
  label?: string;
  floating?: boolean;
};

export default function WhatsAppButton({
  className = "btn btn-whatsapp",
  label = "WhatsApp",
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
      {floating ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.48 0 .12 5.36.12 11.95c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.64a11.9 11.9 0 0 0 5.83 1.5h.01c6.58 0 11.94-5.36 11.94-11.95 0-3.19-1.24-6.18-3.5-8.43ZM12.08 21.84h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.24-.37a9.88 9.88 0 0 1-1.52-5.29c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7c0 5.48-4.45 9.93-9.92 9.93Zm5.44-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.54.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      ) : (
        label
      )}
    </Link>
  );
}

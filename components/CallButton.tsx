import Link from "next/link";
import { siteConfig } from "@/lib/site";

type CallButtonProps = {
  className?: string;
  label?: string;
};

export default function CallButton({
  className = "btn btn-secondary",
  label = "Appelez-nous directement",
}: CallButtonProps) {
  return (
    <Link href={siteConfig.phoneHref} className={className}>
      Appeler
      <span>{label}</span>
    </Link>
  );
}

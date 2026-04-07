import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  index?: number;
  title: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

export default function ServiceCard({
  index = 1,
  title,
  description,
  href,
  image,
}: ServiceCardProps) {
  return (
    <article className="service-card panel">
      <div className="service-top">
        <span className="service-kicker">Service {String(index).padStart(2, "0")}</span>
        <span className="service-index">{String(index).padStart(2, "0")}</span>
      </div>
      <div className="service-media">
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 820px) 100vw, 33vw" />
      </div>
      <div className="service-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="service-actions">
        <Link href={href} className="btn btn-secondary">
          Découvrir nos services
        </Link>
      </div>
    </article>
  );
}

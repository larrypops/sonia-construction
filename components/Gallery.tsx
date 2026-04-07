import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type GalleryProps = {
  items: GalleryItem[];
};

export default function Gallery({ items }: GalleryProps) {
  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <AnimatedSection key={item.src} delay={index * 0.08}>
          <article className="gallery-card panel">
            <div className="gallery-image">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 820px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
            <div className="gallery-caption">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          </article>
        </AnimatedSection>
      ))}
    </div>
  );
}

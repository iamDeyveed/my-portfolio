import Image from "next/image";
import Link from "next/link";

const illustrations = [
  {
    src: "/images/stackko-1080x1080.png",
    alt: "Illustrated shopper carrying groceries",
    className: "illustration-main",
    width: 1080,
    height: 1080,
  },
  {
    src: "/images/stacko-illustration (10).png",
    alt: "Illustrated footballer seen through a goal net",
    className: "illustration-tall-a",
    width: 1024,
    height: 1536,
  },
  {
    src: "/images/stacko-illustration (11).png",
    alt: "Illustrated hand holding two tacos",
    className: "illustration-tall-b",
    width: 1024,
    height: 1536,
  },
];

export function IllustrationGrid() {
  return (
    <section className="illustration-section" aria-labelledby="illustration-title">
      <div className="illustration-heading reveal" data-reveal>
        <h2 id="illustration-title">Stories, drawn.</h2>
        <p>Character, color, and ordinary moments turned up loud.</p>
        <Link className="text-link" href="/work/stacko-stories">See the series ↗</Link>
      </div>
      <div className="illustration-wall">
        {illustrations.map((image, index) => (
          <figure key={image.src} className={`${image.className} reveal`} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 767px) 100vw, 50vw" quality={88} />
          </figure>
        ))}
      </div>
    </section>
  );
}

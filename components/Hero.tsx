import Image from "next/image";

export function Hero() {
  return (
    <section className="hero-shell" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow hero-enter hero-enter-1">Designer · Illustrator · Builder</p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-enter hero-enter-2">I illustrate,</span>
            <span className="hero-enter hero-enter-3">design &amp; ship<span className="signal-dot">.</span></span>
          </h1>
          <p className="hero-summary hero-enter hero-enter-4">
            Yagazie creates identities, illustrations and digital experiences, from first sketch to shipped product.
          </p>
        </div>

        <figure className="hero-art hero-enter hero-enter-5">
          <Image
            src="/images/stackko-1080x1080.png"
            alt="Colorful illustration of a shopper carrying fresh groceries"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 34vw"
            quality={90}
          />
          <figcaption>Illustration / Stacko Stories</figcaption>
        </figure>

        <a className="scroll-cue hero-enter hero-enter-5" href="#work">
          <span>Scroll to work</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

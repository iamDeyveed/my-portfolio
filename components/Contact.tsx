export function Contact() {
  return (
    <section id="contact" className="contact-section contact-section--hero" aria-labelledby="contact-title">
      <p className="contact-kicker hero-enter hero-enter-1">Have something worth making?</p>
      <h1 id="contact-title" className="hero-enter hero-enter-2">Let&apos;s make<br />something good<span>.</span></h1>
      <div className="contact-actions hero-enter hero-enter-3">
        <a className="contact-primary" href="mailto:hello@davidubakaibeya.com?subject=Project%20enquiry%20for%20Yagazie">Start a project ↗</a>
        <div className="contact-links">
          <a href="mailto:hello@davidubakaibeya.com">Email ↗</a>
          <a href="https://wa.me/2348063926498?text=Hi%20Yagazie%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer">WhatsApp ↗</a>
        </div>
        <a className="contact-scroll" href="#work">View selected work ↓</a>
      </div>
    </section>
  );
}

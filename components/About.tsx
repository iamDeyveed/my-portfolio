const capabilities = [
  "Illustration",
  "Brand identity",
  "Graphic design",
  "Digital design",
  "Web design",
  "Development",
];

export function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-name reveal" data-reveal>
        <p className="section-number">04 / About</p>
        <h2 id="about-title">Yagazie</h2>
      </div>
      <div className="about-copy reveal" data-reveal>
        <h3>Designer, illustrator and builder.</h3>
        <p>I turn ideas into visual systems and digital experiences, from the first sketch to the thing people actually use.</p>
      </div>
      <ul className="capabilities reveal" data-reveal aria-label="Capabilities">
        {capabilities.map((capability, index) => (
          <li key={capability}><span>{String(index + 1).padStart(2, "0")}</span>{capability}</li>
        ))}
      </ul>
    </section>
  );
}

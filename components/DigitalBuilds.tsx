import Image from "next/image";

const builds = [
  { name: "GREAA", type: "Web design + build", href: "https://greaa.vercel.app/" },
  { name: "Jesse Farms", type: "Commerce experience", href: "https://jessefarms.com/" },
  { name: "Yagazie Archive", type: "Portfolio build", href: "https://yagazie.vercel.app/" },
];

export function DigitalBuilds() {
  return (
    <section className="builds-section" aria-labelledby="builds-title">
      <div className="builds-copy reveal" data-reveal>
        <p className="section-number">03 / Digital</p>
        <h2 id="builds-title">Designed.<br />Then shipped.</h2>
        <p>Interfaces are only finished when people can use them.</p>
      </div>

      <div className="browser-frame reveal" data-reveal aria-label="OtakuAI responsive interface composition">
        <div className="browser-bar">
          <span /><span /><span />
          <p>otaku.ai / dashboard</p>
        </div>
        <div className="browser-canvas">
          <Image
            src="/images/otakuww 1.png"
            alt="OtakuAI product screens presented as a responsive digital experience"
            fill
            sizes="(max-width: 767px) 100vw, 62vw"
            quality={88}
          />
        </div>
      </div>

      <div className="build-list reveal" data-reveal>
        {builds.map((build) => (
          <a key={build.name} href={build.href} target="_blank" rel="noreferrer">
            <span>{build.name}</span>
            <small>{build.type}</small>
            <strong aria-hidden="true">↗</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

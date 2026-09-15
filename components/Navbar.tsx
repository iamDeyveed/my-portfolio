"use client";

import Link from "next/link";
import { startTransition, useEffect, useState } from "react";

export function Navbar({ homeHero = false }: { homeHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => startTransition(() => setScrolled(window.scrollY > 28));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-nav" data-scrolled={scrolled} data-variant={homeHero ? "blue" : "paper"}>
      <Link className="site-logo" href="/" aria-label="Yagazie home">YAGAZIE</Link>
      <p className="availability"><span aria-hidden="true" />Available for selected projects</p>
      <nav aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#illustration">Illustration</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}

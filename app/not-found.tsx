import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="grid min-h-screen place-items-center px-6 py-32">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-[var(--muted)]">404</p>
          <h1 className="font-display text-[clamp(3.75rem,12vw,10rem)] leading-[0.84] tracking-[-0.075em]">
            Nothing<br />here yet.
          </h1>
          <Link className="text-link mt-10 inline-flex" href="/">Back to the work ↗</Link>
        </div>
      </main>
    </>
  );
}

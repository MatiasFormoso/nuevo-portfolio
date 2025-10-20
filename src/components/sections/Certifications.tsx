"use client";

import { AnimatedGrid, AnimatedItem } from "@/components/AnimatedSection";

type Cert = { 
  title: string; 
  meta: string; 
  topics: string; 
  href: string; 
  provider: string;
};

const CERTS: Cert[] = [
  {
    title: "Scrum Fundamentals Certified (SFC)",
    meta: "Enero 2025 · ID: 1063108",
    topics: "Scrum · Metodologías ágiles",
    href: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1063108",
    provider: "SCRUMstudy"
  },
  {
    title: "IA Generativa",
    meta: "Enero 2025 · ID: OA-2025-0107000725293",
    topics: "Ética en IA · IA generativa · Análisis de sentimiento",
    href: "/assets/106_formosomatiasagustin@gmail.com.pdf",
    provider: "Santander Open Academy"
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    meta: "Enero 2025 · ID: EU5LNJIZLCE7",
    topics: "Hojas de cálculo · Análisis de datos",
    href: "https://www.coursera.org/account/accomplishments/verify/EU5LNJIZLCE7",
    provider: "Google"
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    meta: "Febrero 2025 · ID: LO7PWKIPCHK6",
    topics: "Hojas de cálculo · Analítica de datos",
    href: "https://www.coursera.org/account/accomplishments/verify/LO7PWKIPCHK6",
    provider: "Google"
  },
  {
    title: "Process Data from Dirty to Clean",
    meta: "Marzo 2025 · ID: DKVHCLLCJXP3",
    topics: "Integridad y limpieza de datos · SQL",
    href: "https://www.coursera.org/account/accomplishments/verify/DKVHCLLCJXP3",
    provider: "Google"
  },
  {
    title: "Prepare Data for Exploration",
    meta: "Marzo 2025 · ID: DIAT2YM7S567",
    topics: "SQL · Hojas de cálculo · Análisis de datos",
    href: "https://www.coursera.org/account/accomplishments/verify/DIAT2YM7S567",
    provider: "Google"
  },
];

export default function Certifications() {
  return (
    <section id="certificaciones" className="band band-base anchor-section">
      <div className="container section">
        <div className="max-w-6xl">
          <h2 className="stitle">Certificaciones</h2>
        </div>

        <AnimatedGrid className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {CERTS.map((c) => (
            <AnimatedItem key={c.title}>
              <div className="card card-hover h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">{c.meta}</p>
                  <p className="mt-2 text-sm text-[color:var(--eyebrow)]">{c.topics}</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-4 hover:no-underline hover:text-white/90 transition-all duration-200"
                  >
                    Ver credencial →
                  </a>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
}

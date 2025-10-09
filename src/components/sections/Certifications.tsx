type Cert = { title: string; meta: string; topics: string; href: string };

const CERTS: Cert[] = [
  {
    title: "SCRUMstudy • Scrum Fundamentals Certified (SFC)",
    meta: "Enero 2025 · ID: 1063108",
    topics: "Scrum · Metodologías ágiles",
    href: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1063108",
  },
  {
    title: "Santander Open Academy • IA Generativa",
    meta: "Enero 2025 · ID: OA-2025-0107000725293",
    topics: "Ética en IA · IA generativa · Análisis de sentimiento",
    href: "/assets/106_formosomatiasagustin@gmail.com.pdf",
  },
  {
    title: "Google • Foundations: Data, Data, Everywhere",
    meta: "Enero 2025 · ID: EU5LNJIZLCE7",
    topics: "Hojas de cálculo · Análisis de datos",
    href: "https://www.coursera.org/account/accomplishments/verify/EU5LNJIZLCE7",
  },
  {
    title: "Google • Ask Questions to Make Data-Driven Decisions",
    meta: "Febrero 2025 · ID: LO7PWKIPCHK6",
    topics: "Hojas de cálculo · Analítica de datos",
    href: "https://www.coursera.org/account/accomplishments/verify/LO7PWKIPCHK6",
  },
  {
    title: "Google • Process Data from Dirty to Clean",
    meta: "Marzo 2025 · ID: DKVHCLLCJXP3",
    topics: "Integridad y limpieza de datos · SQL",
    href: "https://www.coursera.org/account/accomplishments/verify/DKVHCLLCJXP3",
  },
  {
    title: "Google • Prepare Data for Exploration",
    meta: "Marzo 2025 · ID: DIAT2YM7S567",
    topics: "SQL · Hojas de cálculo · Análisis de datos",
    href: "https://www.coursera.org/account/accomplishments/verify/DIAT2YM7S567",
  },
];

export default function Certifications() {
  return (
    <section id="certificaciones" className="band band-base">
      <div className="container section">
        <h2 className="stitle">Certificaciones</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block card card-hover"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-[color:var(--muted)]">{c.meta}</p>
              <p className="mt-1 text-sm text-[color:var(--eyebrow)]">{c.topics}</p>
              <div className="mt-2 text-sm text-[color:var(--muted)]">
                <small>Credencial:</small> <span className="underline">Ver credencial</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

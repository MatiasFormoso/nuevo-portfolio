import { CONFIG } from "@/lib/config";

type Service = { title: string; blurb: string; bullets: string[] };

const SERVICES: Service[] = [
  {
    title: "Integraciones & APIs",
    blurb: "REST/JSON, OAuth2, webhooks y jobs con reintentos e idempotencia.",
    bullets: [
      "Auth (API Keys/OAuth2) y rate-limits",
      "Observabilidad: logs, métricas y alertas",
      "Escalabilidad y rendimiento",
    ],
  },
  {
    title: "Datos & ETL/BI",
    blurb:
      "Ingesta, validación y modelado relacional para análisis que se sostienen en el tiempo.",
    bullets: [
      "Ingesta y limpieza (APIs, CSV, DBs)",
      "Estandarización y modelado (SQL)",
      "KPIs/tableros con trazabilidad",
    ],
  },
  {
    title: "Desarrollo web",
    blurb: "Webs optimizadas para operar de forma autónoma.",
    bullets: [
      "Next.js/React + Tailwind",
      "Streamlit para tableros",
      "Formularios (email/WhatsApp) y SEO",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="band band-alt">
      <div className="container section">
        <p className="eyebrow">Servicios</p>
        <h2 className="stitle">Arquitectura, datos e integraciones · Desarrollo web</h2>
        <p className="sdesc">Priorizo trazabilidad, mantenibilidad y operación simple.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="card card-hover">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-[color:var(--muted)]">{s.blurb}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[color:var(--muted)]">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="btn border border-[color:var(--border)] hover:bg-[#1A1A1F]"
                >
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

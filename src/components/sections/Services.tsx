"use client";

import { CONFIG } from "@/lib/config";
import { AnimatedGrid, AnimatedItem } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

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
      "Desarrollo frontend y backend",
      "Streamlit para tableros",
      "Formularios (email/WhatsApp) y SEO",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="band band-alt">
      <div className="container section">
        <div className="max-w-6xl">
          <p className="eyebrow">Lo que hago</p>
          <h2 className="stitle">
              Integraciones, procesamiento de datos y desarrollo web
          </h2>
          <p className="sdesc">Priorizo trazabilidad y mantenibilidad.</p>
        </div>

        <AnimatedGrid className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-6 md:gap-6 grid-cols-1 md:grid-cols-3">
          {SERVICES.map((s) => (
            <AnimatedItem key={s.title}>
              <div className="card card-hover h-full flex flex-col p-4 sm:p-5 md:p-6">
                <div className="flex-1">
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{s.blurb}</p>
                  <ul className="mt-2 list-disc space-y-0.5 pl-5 text-sm text-[color:var(--muted)]">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 flex justify-end">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="text-xs underline underline-offset-4 hover:no-underline hover:text-white/90 transition-all duration-200"
                  >
                    Contactar →
                  </motion.a>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
}

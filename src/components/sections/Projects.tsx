"use client";

import { AnimatedGrid, AnimatedItem } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  blurb: string;
  bullets: string[];
  moreHref?: string;
};

function Card({ title, blurb, bullets, moreHref }: CardProps) {
  return (
    <div className="card card-hover h-full flex flex-col">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-[color:var(--muted)]">{blurb}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-[color:var(--muted)]">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      {moreHref && (
        <div className="mt-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={moreHref}
            className="text-sm underline underline-offset-4 hover:no-underline hover:text-white/90 transition-all duration-200"
          >
            Ver más →
          </motion.a>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="band band-alt anchor-section">
      <div className="container section">
        <p className="eyebrow">Proyectos</p>
        <h2 className="stitle">Una selección breve de trabajos y POCs</h2>
        <p className="sdesc">Proyectos recientes y pruebas de concepto.</p>

        <AnimatedGrid className="mt-8 grid gap-6 md:grid-cols-2">
          <AnimatedItem>
            <Card
              title="Pipeline MP4 automático (de .txt a video)"
              blurb="De un .txt a un MP4 listo: narración TTS, clips, música y subtítulos."
              bullets={[
                "Cobertura visual 1:1 con transiciones suaves",
                "Sincronía audio–video y subtítulos limpios",
                "Procesamiento por lotes para cuidar RAM",
              ]}
              moreHref="/proyectos/pipeline-mp4"
            />
          </AnimatedItem>

          <AnimatedItem>
            <Card
              title="Market Indicators Dashboard"
              blurb="ETL + Postgres (Neon) y app en Streamlit para comparar mercados."
              bullets={[
                "Ingesta automática (GitHub Actions)",
                "Normalización base 100 y KPIs clave",
                "Despliegue en Render con controles de rango",
              ]}
              moreHref="/proyectos/market-indicators"
            />
          </AnimatedItem>
        </AnimatedGrid>
      </div>
    </section>
  );
}
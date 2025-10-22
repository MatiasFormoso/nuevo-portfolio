"use client";

import { AnimatedGrid, AnimatedItem } from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type CardProps = {
  title: string;
  blurb: string;
  bullets: string[];
  moreHref?: string;
};

function Card({ title, blurb, bullets, moreHref }: CardProps) {
  return (
    <div className="card card-hover min-h-[280px] sm:min-h-[300px] flex flex-col">
      <div className="flex-1 min-h-0">
        <h3 className="text-base sm:text-lg font-semibold leading-tight">{title}</h3>
        <p className="mt-1 text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">{blurb}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm sm:text-base text-[color:var(--muted)]">
          {bullets.map((b) => (
            <li key={b} className="leading-relaxed">{b}</li>
          ))}
        </ul>
      </div>

      {moreHref && (
        <div className="mt-4 flex-shrink-0">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={moreHref}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm underline underline-offset-4 hover:no-underline hover:text-white/90 transition-all duration-200"
          >
            Ver más →
          </motion.a>
        </div>
      )}
    </div>
  );
}

const PROJECTS = [
  {
    title: "Santa Frida Farm — Sitio ES/EN",
    blurb: "Desarrollo web multilingüe con SEO internacional, arquitectura moderna y despliegue en producción.",
    bullets: [
      "Next.js 14 + TypeScript estricto; imágenes AVIF/WebP",
      "SEO técnico: JSON‑LD, hreflang, sitemap y headers",
      "First‑load JS ~87 kB; Core Web Vitals consistentes",
    ],
    moreHref: "/proyectos/santa-frida-farm"
  },
  {
    title: "Pipeline MP4 automático (de .txt a video)",
    blurb: "De un .txt a un MP4 listo: narración TTS, clips, música y subtítulos.",
    bullets: [
      "Cobertura visual 1:1 con transiciones suaves",
      "Sincronía audio–video y subtítulos limpios",
      "Procesamiento por lotes para cuidar RAM",
    ],
    moreHref: "/proyectos/pipeline-mp4"
  },
  {
    title: "Market Indicators Dashboard",
    blurb: "ETL + Postgres (Neon) y app en Streamlit para comparar mercados.",
    bullets: [
      "Ingesta automática (GitHub Actions)",
      "Normalización base 100 y KPIs clave",
      "Despliegue en Render con controles de rango",
    ],
    moreHref: "/proyectos/market-indicators"
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
      const itemsPerPage = 1; // Mostrar 1 proyecto a la vez
  const totalPages = Math.ceil(PROJECTS.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProjects = PROJECTS.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section id="projects" className="band band-alt anchor-section">
      <div className="container section">
        <div className="max-w-5xl">
          <p className="eyebrow">Proyectos</p>
          <h2 className="stitle">Una selección breve de trabajos y POCs</h2>
          <p className="sdesc">Proyectos recientes y pruebas de concepto.</p>
        </div>

            {/* Carrusel */}
            <div className="mt-8 sm:mt-10 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="w-full"
                >
                  {currentProjects.map((project, index) => (
                    <AnimatedItem key={`${currentIndex}-${index}`}>
                      <Card
                        title={project.title}
                        blurb={project.blurb}
                        bullets={project.bullets}
                        moreHref={project.moreHref}
                      />
                    </AnimatedItem>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Navegación */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between mt-6 sm:mt-8 gap-4">
                  {/* Botones de navegación */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={prevSlide}
                      className="btn btn-ghost text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2.5"
                    >
                      ← Anterior
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={nextSlide}
                      className="btn btn-ghost text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2.5"
                    >
                      Siguiente →
                    </motion.button>
                  </div>

                  {/* Indicadores */}
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-200 ${
                          index === currentIndex
                            ? 'bg-[color:var(--brand)]'
                            : 'bg-[color:var(--border)] hover:bg-[color:var(--muted)]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
      </div>
    </section>
  );
}
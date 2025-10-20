"use client";

import { CONFIG } from "@/lib/config";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // full-bleed
    <section className="relative isolate w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      {/* BG image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat transform-gpu scale-[1.05] blur-[1px]"
        style={{
          backgroundImage: "url('/images/hero/cover.jpg')",
          backgroundPosition: "50% 38%",
        }}
      />

      {/* overlays */}
      <div className="absolute inset-0 -z-10 bg-black/70 md:bg-black/60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-black/60 to-transparent" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 60% at 70% 40%, rgba(0,0,0,0.35), transparent 60%), radial-gradient(60% 40% at 60% 35%, rgba(255,255,255,0.05), transparent 60%)",
        }}
      />

      {/* Mobile minimal */}
      <div className="md:hidden">
        <div className="container">
          <div className="py-16 sm:py-20">
            <div className="text-left">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-sm">
                Córdoba · Remoto
              </span>
              <h1 className="mt-3 text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-white/95">
                Matías Formoso
              </h1>
              <p className="mt-2 text-sm sm:text-base text-white/85 leading-relaxed">
                Software Engineer — Python, SQL, Next.js, TypeScript. ETL automatizado y APIs.
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap justify-start gap-2 sm:gap-3">
                <a href={CONFIG.contact.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[color:var(--brand)] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.15)] hover:bg-[color:var(--brand-strong)] transition-colors duration-150">LinkedIn</a>
                <a href={CONFIG.contact.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs sm:text-sm text-white hover:bg-white/10 transition-colors duration-150 backdrop-blur-sm">GitHub</a>
                <a href={`mailto:${CONFIG.contact.email}`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs sm:text-sm text-white hover:bg-white/10 transition-colors duration-150 backdrop-blur-sm">Email</a>
              </div>
              <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-white/75 italic leading-relaxed">
                Abierto a colaborar en proyectos donde la tecnología simplifique lo importante.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop / md+ rich layout */}
      <div className="hidden md:block">
        <div className="container">
          <div className="py-12 md:py-16 lg:py-20">
            <div className="flex flex-row items-end gap-8 w-full pt-16 pb-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex-shrink-0"
                >
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative">
                  <img
                    src="/images/profile/matias-formoso.jpg"
                    alt="Matías Formoso"
                    className="w-full h-full object-cover object-center filter brightness-95 contrast-110 saturate-100"
                    style={{ objectPosition: "center 15%" }}
                  />
                  <div className="absolute inset-0 bg-black/5 rounded-full"></div>
                  <div className="absolute inset-2 border border-white/10 rounded-full"></div>
                </div>
              </motion.div>

              <div className="flex-1 text-left max-w-2xl">
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
                >
                  Córdoba · Remoto
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mt-3 text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-white/95 drop-shadow"
                >
                  Matías Formoso
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mt-3 text-lg text-white/85 drop-shadow leading-normal"
                >
                  Software Engineer — Python, SQL, Next.js, TypeScript. ETL automatizado y APIs.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mt-8 flex flex-wrap justify-start gap-3"
                >
                  <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={CONFIG.contact.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[color:var(--brand)] px-6 py-2.5 text-base font-semibold text-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.15)] hover:bg-[color:var(--brand-strong)] transition-colors duration-150">LinkedIn</motion.a>
                  <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={CONFIG.contact.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 bg-white/5 px-6 py-2.5 text-base text-white hover:bg-white/10 transition-colors duration-150 backdrop-blur-sm">GitHub</motion.a>
                  <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={`mailto:${CONFIG.contact.email}`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 bg-white/5 px-6 py-2.5 text-base text-white hover:bg-white/10 transition-colors duration-150 backdrop-blur-sm">Email</motion.a>
                </motion.div>
              </div>
            </div>
            
            {/* Texto "Abierto a colaborar..." más abajo */}
            <div className="mt-4 max-w-2xl ml-[calc(44*4px+2rem)]">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-base text-white/75 italic leading-normal"
              >
                Abierto a colaborar en proyectos donde la tecnología simplifique lo importante.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
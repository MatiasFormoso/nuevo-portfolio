import { CONFIG } from "@/lib/config";

export default function Hero() {
  return (
    // full-bleed, pero con altura más baja y tope en desktop
    <section className="relative isolate w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      {/* BG image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat transform-gpu scale-[1.03] blur-[0.5px]"
        style={{
          backgroundImage: "url('/images/hero/cover.jpg')",
          backgroundPosition: "50% 42%",
        }}
      />

      {/* overlays más sutiles */}
      <div className="absolute inset-0 -z-10 bg-black/45" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-16 bg-gradient-to-b from-black/45 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-16 bg-gradient-to-t from-black/35 to-transparent" />

      {/* altura: más rectangular en desktop, sin aplastar en mobile */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="
            flex items-end
            min-h-[56vh]            /* mobile cómodo */
            md:min-h-[46vh]
            lg:min-h-[70vh]
            xl:min-h-[62vh]
            max-h-[560px]           /* tope para pantallas grandes */
          "
        >
          <div className="max-w-2xl pb-10 md:pb-12">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
              Córdoba · Remoto
            </span>

            <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white drop-shadow">
              Matías Formoso
            </h1>

            <p className="mt-2 text-base md:text-lg text-white/90 drop-shadow">
            Arquitectura, datos e integraciones — Python + SQL + web. 
            <br className="hidden md:block" />
            Software con principios de ingeniería.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CONFIG.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
              >
                LinkedIn
              </a>
              <a
                href={CONFIG.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
              >
                GitHub
              </a>
              <a
                href={`mailto:${CONFIG.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

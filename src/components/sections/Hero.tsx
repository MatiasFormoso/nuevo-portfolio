import { CONFIG } from "@/lib/config";

export default function Hero() {
  return (
    // full-bleed
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

      {/* overlays */}
      <div className="absolute inset-0 -z-10 bg-black/45" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-16 bg-gradient-to-b from-black/45 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-16 bg-gradient-to-t from-black/35 to-transparent" />

      {/* Altura estable: reemplazo de vh -> svh */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="
            flex items-end
            min-h-[60svh]
            md:min-h-[46svh]
            lg:min-h-[70svh]
            xl:min-h-[62svh]
            max-h-[560px]
          "
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 w-full pt-20 pb-10 md:pt-0 md:pb-12">
            {/* Imagen de perfil */}
            <div className="flex-shrink-0 md:self-start md:pt-8">
              <div className="w-24 h-24 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative">
                <img
                  src="/images/profile/matias-formoso.jpg"
                  alt="Matías Formoso"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-110 saturate-100"
                  style={{ objectPosition: 'center 15%' }}
                />
                {/* Overlay mínimo para integrar con el fondo */}
                <div className="absolute inset-0 bg-black/5 rounded-full"></div>
                {/* Borde interno sutil */}
                <div className="absolute inset-2 border border-white/10 rounded-full"></div>
              </div>
            </div>

            {/* Contenido principal */}
            <div className="flex-1 max-w-2xl text-center md:text-left">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 md:px-3 md:py-1 text-xs font-medium md:font-medium text-white/90 backdrop-blur-sm">
                Córdoba · Remoto
              </span>

              <h1 className="mt-4 md:mt-3 text-5xl md:text-5xl font-bold md:font-semibold leading-tight tracking-tight text-white drop-shadow-lg md:drop-shadow">
                Matías Formoso
              </h1>

              <p className="mt-3 md:mt-2 text-lg md:text-lg text-white/95 md:text-white/90 drop-shadow leading-relaxed md:leading-normal">
                Software Engineer — Arquitectura,&nbsp;
                <br className="md:hidden" />
                datos e integraciones.&nbsp;
                <br className="hidden md:block" />
                Python + SQL + web.
              </p>

              <div className="mt-8 md:mt-6 flex flex-wrap justify-center md:justify-start gap-4 md:gap-3">
                <a
                  href={CONFIG.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg md:rounded-xl bg-[color:var(--brand)] px-6 py-3 md:px-4 md:py-2 text-sm font-semibold md:font-medium text-white hover:bg-[color:var(--brand-strong)] transition-all duration-200 shadow-lg hover:shadow-xl md:shadow-none md:hover:shadow-none"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${CONFIG.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg md:rounded-xl border border-white/30 bg-white/10 px-6 py-3 md:px-4 md:py-2 text-sm font-semibold md:text-sm text-white hover:bg-white/20 hover:border-white/40 md:hover:bg-white/15 transition-all duration-200 backdrop-blur-sm md:backdrop-blur-none"
                >
                  Email
                </a>
                <a
                  href={CONFIG.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg md:rounded-xl border border-white/30 bg-white/10 px-6 py-3 md:px-4 md:py-2 text-sm font-semibold md:text-sm text-white hover:bg-white/20 hover:border-white/40 md:hover:bg-white/15 transition-all duration-200 backdrop-blur-sm md:backdrop-blur-none"
                >
                  GitHub
                </a>
              </div>

              {/* Frase de colaboración */}
              <p className="mt-8 md:mt-6 text-base md:text-sm text-white/85 md:text-white/80 drop-shadow italic leading-relaxed md:leading-normal">
                Abierto a colaborar en proyectos&nbsp;
                <br className="md:hidden" />
                donde la tecnología simplifique lo importante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

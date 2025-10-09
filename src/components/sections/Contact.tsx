import { CONFIG } from "@/lib/config";

export default function Contact() {
  return (
    <section id="contact" className="band band-alt">
      <div className="container section">
        <p className="eyebrow">Contacto</p>
        <h2 className="stitle">Hablemos</h2>

        <div className="mt-6 card md:flex md:items-center md:justify-between md:gap-4">
          <p className="text-[color:var(--muted)]">
            ¿Tenés algo puntual o una web/app por levantar? Escribime y vemos si encaja.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 md:mt-0">
            <a
              className="btn bg-[color:var(--brand)] text-black hover:bg-[color:var(--brand-strong)] font-medium"
              href={CONFIG.contact.whatsapp}
              target="_blank"
            >
              WhatsApp
            </a>
            <a
              className="btn border border-[color:var(--border)] hover:bg-[#1A1A1F]"
              href={`mailto:${CONFIG.contact.email}`}
              target="_blank"
            >
              Email
            </a>
            <a
              className="btn border border-[color:var(--border)] hover:bg-[#1A1A1F]"
              href={CONFIG.contact.linkedin}
              target="_blank"
            >
              LinkedIn
            </a>
            {/* Oculto en mobile, visible desde md */}
            <a
              className="btn border border-[color:var(--border)] hover:bg-[#1A1A1F] hidden md:inline-flex"
              href={CONFIG.contact.github}
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CONFIG } from "@/lib/config";

export default function Contact() {
  return (
    <section id="contact" className="band band-alt">
      <div className="container section">
        <div className="max-w-3xl">
          <h2 className="stitle">Contacto</h2>
          <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
            ¿Tenés algo puntual o una web/app por levantar? Escribime y lo vemos juntos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="btn bg-[color:var(--brand)] text-white hover:bg-[color:var(--brand-strong)] font-medium"
              href={CONFIG.contact.whatsapp}
              target="_blank"
            >
              WhatsApp
            </a>
            <a
              className="btn border border-[color:var(--border)] bg-[color:var(--card)] hover:bg-[color:var(--bg-alt)] hover:border-white/20 font-medium"
              href={`mailto:${CONFIG.contact.email}`}
              target="_blank"
            >
              Email
            </a>
            <a
              className="btn border border-[color:var(--border)] bg-[color:var(--card)] hover:bg-[color:var(--bg-alt)] hover:border-white/20 font-medium"
              href={CONFIG.contact.linkedin}
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="btn border border-[color:var(--border)] bg-[color:var(--card)] hover:bg-[color:var(--bg-alt)] hover:border-white/20 font-medium"
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

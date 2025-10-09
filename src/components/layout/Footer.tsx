import { CONFIG } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#23232A]">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-[#B4B4B8]">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {CONFIG.site.name}. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href={CONFIG.contact.whatsapp} target="_blank">WhatsApp</a>
            <a href={`mailto:${CONFIG.contact.email}`} target="_blank">Email</a>
            <a href={CONFIG.contact.linkedin} target="_blank">LinkedIn</a>
            <a href={CONFIG.contact.github} target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

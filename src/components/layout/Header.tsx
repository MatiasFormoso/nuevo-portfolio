"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { CONFIG } from "@/lib/config";

export default function Header() {
  const [active, setActive] = useState<string>("#");
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const anchors = useMemo(
    () => CONFIG.nav.filter((n) => n.href.startsWith("#")).map((n) => n.href),
    []
  );

  /* -------- Scroll-spy -------- */
  useEffect(() => {
    const ids = anchors.map((h) => h.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [anchors]);

  /* -------- Cierre por ESC y click-fuera -------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!open) return;
      if (panelRef.current?.contains(t)) return;
      if (btnRef.current?.contains(t)) return;
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  /* -------- Navegación con scroll suave -------- */
  const smoothGo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--bg)]/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-medium text-[color:var(--muted)] hover:text-white">
          {CONFIG.brand.logoText}
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden gap-4 md:flex">
          {CONFIG.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => smoothGo(e, item.href)}
              className="nav-link"
              data-active={active === item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTAs DESKTOP */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={CONFIG.contact.github}
            target="_blank"
            className="btn border border-[color:var(--border)] text-[color:var(--muted)] hover:text-white"
          >
            GitHub
          </a>
          <a
            href={CONFIG.contact.linkedin}
            target="_blank"
            className="btn bg-[color:var(--brand)] text-black hover:bg-[color:var(--brand-strong)] font-medium"
          >
            LinkedIn
          </a>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          ref={btnRef}
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden btn border border-[color:var(--border)] text-[color:var(--muted)]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* SCRIM: separa el contenido detrás */}
      {open && <div className="md:hidden fixed inset-0 z-40 bg-black/40" aria-hidden="true" />}

      {/* POPOVER negro translúcido (sin ver texto del fondo) */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Menú"
          className="
            md:hidden fixed z-50 top-[64px] right-4
            w-[min(92vw,360px)] rounded-2xl border border-white/10
            bg-black/80 shadow-2xl
          "
        >
          <div className="flex items-center justify-between px-4 pt-3">
            <p className="text-sm font-medium text-white/90">Menú</p>
            <button
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="btn border border-white/15 text-white/70 px-2 py-1"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="px-3 pb-3">
            <div className="mt-2 space-y-1">
              {CONFIG.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => smoothGo(e, item.href)}
                  className="
                    flex items-center justify-between rounded-xl
                    px-3 py-2 text-[0.95rem]
                    text-white/95 hover:bg-white/5 transition
                  "
                  data-active={active === item.href}
                >
                  <span>{item.label}</span>
                  <span
                    className="ml-3 hidden h-1.5 w-1.5 rounded-full bg-[color:var(--brand)] data-[active=true]:inline"
                    data-active={active === item.href}
                  />
                </a>
              ))}
            </div>

            <div className="my-3 h-px bg-white/10" />

            {/* CTAs al pie */}
            <div className="flex items-center gap-2">
              <a
                href={CONFIG.contact.linkedin}
                target="_blank"
                className="btn bg-[color:var(--brand)] text-black hover:bg-[color:var(--brand-strong)] font-medium flex-1"
              >
                LinkedIn
              </a>
              <a
                href={CONFIG.contact.github}
                target="_blank"
                className="btn border border-white/15 text-white/80 hover:text-white flex-1"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { CONFIG } from "@/lib/config";
import { motion } from "framer-motion";

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
        <Link href="/" className="font-medium text-[color:var(--muted)] hover:text-white transition-colors duration-200">
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
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={CONFIG.contact.github}
            target="_blank"
            className="btn border border-[color:var(--border)] text-[color:var(--muted)] hover:text-white hover:shadow-md transition-all duration-200"
          >
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={CONFIG.contact.linkedin}
            target="_blank"
            className="btn bg-[color:var(--brand)] text-black hover:bg-[color:var(--brand-strong)] font-medium hover:shadow-md transition-all duration-200"
          >
            LinkedIn
          </motion.a>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          ref={btnRef}
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden btn border border-[color:var(--border)] text-[color:var(--muted)] hover:text-white transition-all duration-200"
        >
          <motion.svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none"
            animate={open ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </motion.svg>
        </motion.button>
      </div>

      {/* SCRIM: separa el contenido detrás */}
      {open && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 z-40 bg-black/40" 
          aria-hidden="true" 
        />
      )}

      {/* POPOVER negro translúcido (sin ver texto del fondo) */}
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
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
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="btn border border-white/15 text-white/70 px-2 py-1 hover:bg-white/10 transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </motion.button>
          </div>

          <div className="px-3 pb-3">
            <div className="mt-2 space-y-1">
              {CONFIG.nav.map((item, index) => (
                <motion.a
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  href={item.href}
                  onClick={(e) => smoothGo(e, item.href)}
                  className="
                    flex items-center justify-between rounded-xl
                    px-3 py-2 text-[0.95rem]
                    text-white/95 hover:bg-white/5 transition-all duration-200
                  "
                  data-active={active === item.href}
                >
                  <span>{item.label}</span>
                  <span
                    className="ml-3 hidden h-1.5 w-1.5 rounded-full bg-[color:var(--brand)] data-[active=true]:inline"
                    data-active={active === item.href}
                  />
                </motion.a>
              ))}
            </div>

            <div className="my-3 h-px bg-white/10" />

            {/* CTAs al pie */}
            <div className="flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={CONFIG.contact.linkedin}
                target="_blank"
                className="btn bg-[color:var(--brand)] text-black hover:bg-[color:var(--brand-strong)] font-medium flex-1 hover:shadow-md transition-all duration-200"
              >
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={CONFIG.contact.github}
                target="_blank"
                className="btn border border-white/15 text-white/80 hover:text-white flex-1 hover:shadow-md transition-all duration-200"
              >
                GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
import { Metadata } from "next";
import Link from "next/link";
import { FaGlobe, FaCode, FaSearch, FaRocket, FaExternalLinkAlt, FaLanguage, FaFilePdf } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Santa Frida Farm — Sitio ES/EN",
  description: "Plataforma web profesional multilingüe con arquitectura moderna, SEO técnico avanzado y optimización de rendimiento.",
};

export default function SantaFridaFarmPage() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-[color:var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand)]/3 via-transparent to-transparent pointer-events-none" />
        <div className="container py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center px-3 sm:px-4">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[color:var(--card)] border border-[color:var(--border)] text-[color:var(--text)] text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <FaGlobe className="w-3 h-3 sm:w-4 sm:h-4 text-[color:var(--brand)]" />
              Desarrollo Web Profesional
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 sm:mb-6 leading-tight">
              Santa Frida Farm — Sitio ES/EN
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted)] mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
              Plataforma web multilingüe para Santa Frida Farm, finca agrícola en Marinilla, Antioquia, Colombia. 
              Desarrollada con Next.js 14, TypeScript estricto, sistema de internacionalización ES/EN, 
              SEO técnico con Schema.org y optimización de rendimiento para mercados internacionales.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/"
                className="btn btn-ghost flex items-center gap-2"
              >
                ← Volver al portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Overview */}
          <div className="container py-12 sm:py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-3 sm:px-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[color:var(--text)] mb-8 sm:mb-12 text-center">
                Resumen Técnico
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="card p-4 sm:p-6 text-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg bg-[color:var(--brand)]/15 flex items-center justify-center">
                <FaCode className="w-4 h-4 sm:w-6 sm:h-6 text-[color:var(--brand)]" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-[color:var(--text)] mb-1 sm:mb-2">Next.js 14</h3>
              <p className="text-[color:var(--muted)] text-xs sm:text-sm">App Router + SSG</p>
            </div>

            <div className="card p-4 sm:p-6 text-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg bg-[color:var(--brand)]/15 flex items-center justify-center">
                <FaLanguage className="w-4 h-4 sm:w-6 sm:h-6 text-[color:var(--brand)]" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-[color:var(--text)] mb-1 sm:mb-2">i18n</h3>
              <p className="text-[color:var(--muted)] text-xs sm:text-sm">ES/EN con rutas</p>
            </div>

            <div className="card p-4 sm:p-6 text-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg bg-[color:var(--brand)]/15 flex items-center justify-center">
                <FaSearch className="w-4 h-4 sm:w-6 sm:h-6 text-[color:var(--brand)]" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-[color:var(--text)] mb-1 sm:mb-2">SEO Avanzado</h3>
              <p className="text-[color:var(--muted)] text-xs sm:text-sm">JSON-LD + Schema.org</p>
            </div>

            <div className="card p-4 sm:p-6 text-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg bg-[color:var(--brand)]/15 flex items-center justify-center">
                <FaRocket className="w-4 h-4 sm:w-6 sm:h-6 text-[color:var(--brand)]" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-[color:var(--text)] mb-1 sm:mb-2">Performance</h3>
              <p className="text-[color:var(--muted)] text-xs sm:text-sm">87 kB First-load JS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Context */}
      <div className="band band-alt">
        <div className="container py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[color:var(--text)] mb-12 text-center">
              Contexto del Proyecto
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-[color:var(--text)] mb-4">Objetivo del Proyecto</h3>
                <p className="text-[color:var(--muted)] leading-relaxed mb-4">
                  Santa Frida Farm necesitaba una plataforma web para exportar productos agrícolas colombianos 
                  a mercados internacionales. El sitio debía funcionar en español e inglés, con SEO técnico 
                  para visibilidad internacional y performance optimizada.
                </p>
                <ul className="space-y-2 text-[color:var(--muted)]">
                  <li>• Productos agrícolas colombianos</li>
                  <li>• Mercados internacionales</li>
                  <li>• Certificaciones del sector</li>
                  <li>• Estándares de calidad exportación</li>
                </ul>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-semibold text-[color:var(--text)] mb-4">Desafíos Técnicos</h3>
                <p className="text-[color:var(--muted)] leading-relaxed mb-4">
                  El proyecto requería una arquitectura que soportara múltiples idiomas, SEO técnico avanzado para 
                  mercados internacionales, y performance optimizada para conversión. La solución debía ser escalable 
                  y mantenible a largo plazo.
                </p>
                <ul className="space-y-2 text-[color:var(--muted)]">
                  <li>• Internacionalización completa con rutas ES/EN</li>
                  <li>• SEO técnico para mercados agrícolas internacionales</li>
                  <li>• Performance optimizada para Core Web Vitals</li>
                  <li>• Seguridad empresarial con headers y CSP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="band band-alt">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[color:var(--text)] mb-12 text-center">
              Métricas Técnicas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-[color:var(--brand)] mb-2">87.4 kB</div>
                <p className="text-sm text-[color:var(--muted)]">First Load JS</p>
                <p className="text-xs text-green-400 mt-1">✅ Excelente</p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-[color:var(--brand)] mb-2">155 kB</div>
                <p className="text-sm text-[color:var(--muted)]">Bundle Total</p>
                <p className="text-xs text-green-400 mt-1">✅ Optimizado</p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-[color:var(--brand)] mb-2">7/7</div>
                <p className="text-sm text-[color:var(--muted)]">Páginas SSG</p>
                <p className="text-xs text-green-400 mt-1">✅ 100%</p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-[color:var(--brand)] mb-2">95+</div>
                <p className="text-sm text-[color:var(--muted)]">Lighthouse Score</p>
                <p className="text-xs text-green-400 mt-1">✅ Excelente</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="container py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[color:var(--text)] mb-12 text-center">
            Implementación Técnica
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Frontend Development */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-[color:var(--text)] mb-4">Desarrollo Frontend</h3>
              <p className="text-[color:var(--muted)] leading-relaxed mb-4">
                Implementé una arquitectura moderna con Next.js 14 aprovechando el App Router para generación estática 
                y optimización automática. El sistema de componentes fue diseñado con primitivos reutilizables que 
                garantizan consistencia visual y mantenibilidad del código.
              </p>
              <ul className="space-y-2 text-[color:var(--muted)]">
                <li>• Next.js 14 con App Router y generación estática (SSG) para performance óptima</li>
                <li>• TypeScript estricto con configuración `noUncheckedIndexedAccess` y `exactOptionalPropertyTypes`</li>
                <li>• Sistema de componentes con Tailwind CSS y primitivos reutilizables (Section, Container, Card, Button)</li>
                <li>• Animaciones optimizadas con Framer Motion y `optimizePackageImports` para reducir bundle size</li>
                <li>• Sistema de diseño coherente con variables CSS y tokens de color consistentes</li>
              </ul>
            </div>

            {/* Internationalization */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-[color:var(--text)] mb-4">Internacionalización</h3>
              <p className="text-[color:var(--muted)] leading-relaxed mb-4">
                Desarrollé un sistema de internacionalización completo que permite a Santa Frida Farm comunicarse 
                efectivamente con mercados internacionales. La implementación incluye rutas específicas por idioma, 
                metadatos SEO diferenciados y redirecciones automáticas para optimizar la experiencia del usuario.
              </p>
              <ul className="space-y-2 text-[color:var(--muted)]">
                <li>• Sistema i18n completo con rutas `/es` y `/en` para separación clara de contenidos</li>
                <li>• Redirección automática desde `/` hacia `/es` (301 redirect) para SEO internacional</li>
                <li>• Metadatos específicos por idioma con `hreflang` para evitar contenido duplicado</li>
                <li>• Diccionarios tipados con TypeScript para consistencia y detección temprana de errores</li>
                <li>• LocaleSwitcher component para cambio dinámico de idioma manteniendo la URL</li>
              </ul>
            </div>

            {/* SEO & Performance */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-[color:var(--text)] mb-4">SEO y Rendimiento</h3>
              <p className="text-[color:var(--muted)] leading-relaxed mb-4">
                Implementé un sistema SEO técnico completo con datos estructurados Schema.org y optimización de performance. 
                El objetivo era posicionar el sitio para búsquedas internacionales de productos agrícolas y garantizar 
                una carga rápida que no afecte la conversión en mercados internacionales.
              </p>
              <ul className="space-y-2 text-[color:var(--muted)]">
                <li>• JSON-LD Schema.org con AgriculturalBusiness, Product y Organization para rich snippets en Google</li>
                <li>• Sitemap dinámico generado automáticamente con URLs ES/EN y secciones específicas</li>
                <li>• Optimización de imágenes con Sharp: WebP/AVIF, lazy loading y TTL de caché de 30 días</li>
                <li>• Bundle splitting optimizado: First-load JS de 87.4 kB (excelente para SSG)</li>
                <li>• Core Web Vitals optimizados: LCP, FID y CLS para mobile-first (requisito de Google)</li>
                <li>• Metadatos geográficos con coordenadas GPS de Marinilla para SEO local</li>
                <li>• Headers de seguridad (X-Frame-Options, CSP) para cumplir estándares empresariales</li>
              </ul>
            </div>

            {/* Security & Quality */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-[color:var(--text)] mb-4">Seguridad y Calidad</h3>
              <ul className="space-y-2 text-[color:var(--muted)]">
                <li>• Headers de seguridad: X-Frame-Options, X-Content-Type-Options</li>
                <li>• CSP para imágenes con sandbox y script-src 'none'</li>
                <li>• ESLint + Prettier con reglas de accesibilidad (jsx-a11y)</li>
                <li>• Bundle Analyzer integrado para monitoreo de performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="band band-alt">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[color:var(--text)] mb-8">
              Stack Tecnológico
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="badge">Next.js 14</div>
              <div className="badge">TypeScript</div>
              <div className="badge">Tailwind CSS</div>
              <div className="badge">Framer Motion</div>
              <div className="badge">Sharp</div>
              <div className="badge">ESLint</div>
              <div className="badge">Prettier</div>
              <div className="badge">Bundle Analyzer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Brief PDF */}
      <div className="container py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[color:var(--text)] mb-8 text-center">
            Case Brief Técnico
          </h2>

          <div className="card p-8">
            <div className="text-center mb-6">
              <FaFilePdf className="w-16 h-16 text-[color:var(--brand)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[color:var(--text)] mb-2">
                Resumen del Proyecto
              </h3>
              <p className="text-[color:var(--muted)]">
                Documento con información del proyecto, tecnologías utilizadas 
                y aspectos técnicos principales.
              </p>
            </div>

            {/* PDF Embed */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-lg overflow-hidden border border-[color:var(--border)] shadow-lg">
              <iframe
                src="/assets/santa-frida-farm-brief.pdf#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH"
                className="absolute inset-0 w-full h-full"
                title="Santa Frida Farm Case Brief"
                style={{ border: "none" }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a
                href="/assets/santa-frida-farm-brief.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center justify-center gap-2"
              >
                <FaFilePdf className="w-4 h-4" />
                Ver en nueva pestaña
              </a>
              <a
                href="/assets/santa-frida-farm-brief.pdf"
                download
                className="btn btn-ghost flex items-center justify-center gap-2"
              >
                <FaFilePdf className="w-4 h-4" />
                Descargar PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="band band-alt">
        <div className="container py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-[color:var(--text)] mb-4">
                Ver sitio en producción
              </h2>
              <p className="text-[color:var(--muted)] mb-6">
                Plataforma web profesional con 
                optimizaciones de rendimiento y SEO técnico avanzado.
              </p>
              <a
                href="https://santafridafarm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2 mx-auto"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Ver sitio en vivo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Metadata } from "next";
import Link from "next/link";
import { FaChartLine, FaDatabase, FaCog, FaExternalLinkAlt, FaCode, FaServer, FaChartBar } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Market Indicators Dashboard",
  description: "Dashboard financiero con ETL automatizado y análisis en tiempo real",
};

export default function MarketIndicatorsPage() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-[color:var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand)]/3 via-transparent to-transparent pointer-events-none" />
        <div className="container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[color:var(--card)] border border-[color:var(--border)] text-[color:var(--text)] text-sm font-medium mb-8">
              <FaChartLine className="w-4 h-4 text-[color:var(--brand)]" />
              Proyecto Técnico
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-6 leading-tight">
              Market Indicators Dashboard
            </h1>
            
            <p className="text-lg text-[color:var(--muted)] mb-8 leading-relaxed max-w-3xl mx-auto">
              Dashboard financiero que automatiza la ingesta de datos de mercados mediante 
              GitHub Actions, almacena información histórica en Neon Postgres y presenta análisis 
              interactivos a través de una aplicación Streamlit desplegada en Render.
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
      <div className="container py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[color:var(--text)] mb-12 text-center">
            Resumen Técnico
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[color:var(--brand)]/15 flex items-center justify-center">
                <FaCode className="w-6 h-6 text-[color:var(--brand)]" />
              </div>
              <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">Python</h3>
              <p className="text-[color:var(--muted)] text-sm">ETL y procesamiento de datos</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[color:var(--brand)]/15 flex items-center justify-center">
                <FaServer className="w-6 h-6 text-[color:var(--brand)]" />
              </div>
              <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">PostgreSQL</h3>
              <p className="text-[color:var(--muted)] text-sm">Base de datos relacional</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[color:var(--brand)]/15 flex items-center justify-center">
                <FaCog className="w-6 h-6 text-[color:var(--brand)]" />
              </div>
              <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">GitHub Actions</h3>
              <p className="text-[color:var(--muted)] text-sm">Automatización CI/CD</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[color:var(--brand)]/15 flex items-center justify-center">
                <FaChartBar className="w-6 h-6 text-[color:var(--brand)]" />
              </div>
              <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">Streamlit</h3>
              <p className="text-[color:var(--muted)] text-sm">Dashboard interactivo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Flow */}
      <div className="band band-alt">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[color:var(--text)] mb-12 text-center">
              Arquitectura del Sistema
            </h2>
            
            <div className="relative">
              {/* Flow Steps */}
              <div className="md:grid md:grid-cols-4 md:gap-6">
                {/* Mobile: Horizontal layout with connecting lines */}
                <div className="md:hidden relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[color:var(--brand)] flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[color:var(--text)]">APIs</h3>
                      <p className="text-[color:var(--muted)] text-sm">FMP, CoinGecko</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[color:var(--brand)] flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[color:var(--text)]">ETL</h3>
                      <p className="text-[color:var(--muted)] text-sm">Python + GitHub Actions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[color:var(--brand)] flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[color:var(--text)]">Storage</h3>
                      <p className="text-[color:var(--muted)] text-sm">Neon PostgreSQL</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[color:var(--brand)] flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[color:var(--text)]">Dashboard</h3>
                      <p className="text-[color:var(--muted)] text-sm">Streamlit en Render</p>
                    </div>
                  </div>
                  
                  {/* Vertical connecting line for mobile */}
                  <div className="absolute left-6 top-6 w-0.5 h-[calc(100%-24px)] bg-[color:var(--border)] -z-10">
                    <div className="absolute top-0 left-0 w-full h-3/4 bg-[color:var(--brand)]/30"></div>
                  </div>
                </div>

                {/* Desktop: Original layout */}
                <div className="hidden md:block text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[color:var(--brand)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">APIs</h3>
                  <p className="text-[color:var(--muted)] text-sm">FMP, CoinGecko</p>
                </div>
                
                <div className="hidden md:block text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[color:var(--brand)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">ETL</h3>
                  <p className="text-[color:var(--muted)] text-sm">Python + GitHub Actions</p>
                </div>
                
                <div className="hidden md:block text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[color:var(--brand)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">Storage</h3>
                  <p className="text-[color:var(--muted)] text-sm">Neon PostgreSQL</p>
                </div>
                
                <div className="hidden md:block text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[color:var(--brand)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">Dashboard</h3>
                  <p className="text-[color:var(--muted)] text-sm">Streamlit en Render</p>
                </div>
              </div>
              
              {/* Connecting Lines */}
              <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[color:var(--border)] -z-10">
                <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[color:var(--brand)]/30"></div>
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
            {/* Data Processing */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-[color:var(--text)] mb-6 flex items-center gap-3">
                <FaDatabase className="w-5 h-5 text-[color:var(--brand)]" />
                Procesamiento de Datos
              </h3>
              <ul className="space-y-3 text-[color:var(--muted)]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Validación y limpieza automática de datos de APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Checks de consistencia en tiempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Upsert idempotente para evitar duplicados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Claves compuestas por símbolo, timestamp y granularidad</span>
                </li>
              </ul>
            </div>

            {/* Frontend */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-[color:var(--text)] mb-6 flex items-center gap-3">
                <FaChartBar className="w-5 h-5 text-[color:var(--brand)]" />
                Interfaz de Usuario
              </h3>
              <ul className="space-y-3 text-[color:var(--muted)]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Consultas por activo, rango temporal y granularidad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Normalización base 100 para comparaciones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>KPIs: precio actual, variación 24h, volumen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Visualizaciones interactivas (línea, área, OHLC)</span>
                </li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-[color:var(--text)] mb-6 flex items-center gap-3">
                <FaCog className="w-5 h-5 text-[color:var(--brand)]" />
                Despliegue y Operación
              </h3>
              <ul className="space-y-3 text-[color:var(--muted)]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Contenedor Docker reproducible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Variables de entorno configurables</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Logs y observabilidad integrada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Free tier: Render + GitHub Actions</span>
                </li>
              </ul>
            </div>

            {/* My Role */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-[color:var(--text)] mb-6 flex items-center gap-3">
                <FaCode className="w-5 h-5 text-[color:var(--brand)]" />
                Mi Contribución
              </h3>
              <ul className="space-y-3 text-[color:var(--muted)]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Diseño completo de la arquitectura ETL</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Desarrollo de la aplicación Streamlit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Configuración de workflows de GitHub Actions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Optimización de consultas SQL y performance</span>
                </li>
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
              <div className="badge">Python</div>
              <div className="badge">Streamlit</div>
              <div className="badge">PostgreSQL</div>
              <div className="badge">GitHub Actions</div>
              <div className="badge">Docker</div>
              <div className="badge">Render</div>
              <div className="badge">Plotly</div>
              <div className="badge">APIs REST</div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[color:var(--text)] mb-8 text-center">
            Detalles del Proyecto
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-[color:var(--text)] mb-4">Características Principales</h3>
              <ul className="space-y-2 text-[color:var(--muted)]">
                <li>• Ingesta automática cada hora</li>
                <li>• Procesamiento por lotes para eficiencia</li>
                <li>• Manejo robusto de errores y reintentos</li>
                <li>• Interfaz responsive y accesible</li>
                <li>• Configuración por variables de entorno</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-[color:var(--text)] mb-4">Arquitectura</h3>
              <ul className="space-y-2 text-[color:var(--muted)]">
                <li>• Microservicios desacoplados</li>
                <li>• Base de datos relacional normalizada</li>
                <li>• API REST para integración</li>
                <li>• Contenedores para portabilidad</li>
                <li>• CI/CD automatizado</li>
              </ul>
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
                Ver análisis técnico completo
              </h2>
              <p className="text-[color:var(--muted)] mb-6">
                Documentación detallada del proyecto con arquitectura, 
                decisiones técnicas y código fuente.
              </p>
              <a
                href="https://matiasagustinformoso.vercel.app/proyecto_market_indicators.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2 mx-auto"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Ver documentación técnica
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
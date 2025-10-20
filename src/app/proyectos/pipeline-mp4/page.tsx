import { Metadata } from "next";
import Link from "next/link";
import { FaVideo, FaMicrophone, FaBrain, FaCog, FaExternalLinkAlt, FaCode, FaServer, FaChartBar } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Pipeline MP4 automático",
  description: "Pipeline automatizado de texto a video con IA",
};

export default function PipelineMP4Page() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-[color:var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand)]/3 via-transparent to-transparent pointer-events-none" />
        <div className="container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[color:var(--card)] border border-[color:var(--border)] text-[color:var(--text)] text-sm font-medium mb-8">
              <FaVideo className="w-4 h-4 text-[color:var(--brand)]" />
              Automatización de Video
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-6 leading-tight">
              Pipeline MP4 automático (de .txt a video)
            </h1>
            
            <p className="text-lg text-[color:var(--muted)] mb-8 leading-relaxed max-w-3xl mx-auto">
              Pipeline automatizado que transforma texto plano en videos MP4 listos para publicar,
              integrando narración Text-to-Speech, selección inteligente de clips visuales, música de fondo
              y subtítulos automáticos, optimizado para eficiencia y escalabilidad.
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
                <FaMicrophone className="w-6 h-6 text-[color:var(--brand)]" />
              </div>
              <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">TTS</h3>
              <p className="text-[color:var(--muted)] text-sm">Narración automática</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[color:var(--brand)]/15 flex items-center justify-center">
                <FaBrain className="w-6 h-6 text-[color:var(--brand)]" />
              </div>
              <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">IA Visual</h3>
              <p className="text-[color:var(--muted)] text-sm">Generación de prompts</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[color:var(--brand)]/15 flex items-center justify-center">
                <FaVideo className="w-6 h-6 text-[color:var(--brand)]" />
              </div>
              <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">Ensamblado</h3>
              <p className="text-[color:var(--muted)] text-sm">MoviePy + ffmpeg</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-[color:var(--brand)]/15 flex items-center justify-center">
                <FaCog className="w-6 h-6 text-[color:var(--brand)]" />
              </div>
              <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">Automatización</h3>
              <p className="text-[color:var(--muted)] text-sm">Pipeline completo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Flow */}
      <div className="band band-alt">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[color:var(--text)] mb-12 text-center">
              Arquitectura del Pipeline
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
                      <h3 className="text-base font-semibold text-[color:var(--text)]">Entrada</h3>
                      <p className="text-[color:var(--muted)] text-sm">Archivo .txt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[color:var(--brand)] flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[color:var(--text)]">Segmentación</h3>
                      <p className="text-[color:var(--muted)] text-sm">Whisper + TTS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[color:var(--brand)] flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[color:var(--text)]">Visual</h3>
                      <p className="text-[color:var(--muted)] text-sm">IA + Pexels</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[color:var(--brand)] flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[color:var(--text)]">Salida</h3>
                      <p className="text-[color:var(--muted)] text-sm">MP4 + Subtítulos</p>
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
                  <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">Entrada</h3>
                  <p className="text-[color:var(--muted)] text-sm">Archivo .txt</p>
                </div>
                
                <div className="hidden md:block text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[color:var(--brand)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">Segmentación</h3>
                  <p className="text-[color:var(--muted)] text-sm">Whisper + TTS</p>
                </div>
                
                <div className="hidden md:block text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[color:var(--brand)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">Visual</h3>
                  <p className="text-[color:var(--muted)] text-sm">IA + Pexels</p>
                </div>
                
                <div className="hidden md:block text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[color:var(--brand)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[color:var(--text)] mb-2">Salida</h3>
                  <p className="text-[color:var(--muted)] text-sm">MP4 + Subtítulos</p>
                </div>
              </div>
              
              {/* Connecting Lines - Desktop only */}
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
            {/* Audio Processing */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-[color:var(--text)] mb-6 flex items-center gap-3">
                <FaMicrophone className="w-5 h-5 text-[color:var(--brand)]" />
                Procesamiento de Audio
              </h3>
              <ul className="space-y-3 text-[color:var(--muted)]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Whisper detecta pausas y segmenta texto semánticamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>ElevenLabs genera narración por bloques con voz estable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Sincronización precisa audio-video por fragmento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Mezcla con música de fondo y ducking automático</span>
                </li>
              </ul>
            </div>

            {/* Visual Generation */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-[color:var(--text)] mb-6 flex items-center gap-3">
                <FaBrain className="w-5 h-5 text-[color:var(--brand)]" />
                Generación Visual
              </h3>
              <ul className="space-y-3 text-[color:var(--muted)]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Mistral/Ollama genera prompts contextuales por bloque</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Pexels API selecciona clips por relevancia y duración</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Cobertura visual 1:1 con transiciones suaves</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Reintentos automáticos para asegurar calidad</span>
                </li>
              </ul>
            </div>

            {/* Video Assembly */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-[color:var(--text)] mb-6 flex items-center gap-3">
                <FaVideo className="w-5 h-5 text-[color:var(--brand)]" />
                Ensamblado de Video
              </h3>
              <ul className="space-y-3 text-[color:var(--muted)]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>MoviePy concatena fragmentos con transiciones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Preservación de encuadre para continuidad visual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Render por lotes para estabilidad y eficiencia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Optimización de memoria y procesamiento</span>
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
                  <span>Diseño completo de la arquitectura del pipeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Integración de APIs de TTS, video y LLMs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Optimización de rendimiento y uso de recursos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] mt-2 flex-shrink-0"></span>
                  <span>Desarrollo de la lógica de ensamblado y post-producción</span>
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
              <div className="badge">MoviePy</div>
              <div className="badge">ffmpeg</div>
              <div className="badge">pydub</div>
              <div className="badge">Whisper</div>
              <div className="badge">ElevenLabs</div>
              <div className="badge">Pexels API</div>
              <div className="badge">Mistral/Ollama</div>
              <div className="badge">Streamlit</div>
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
                <li>• Procesamiento local con GPU</li>
                <li>• Cobertura visual 1:1 perfecta</li>
                <li>• Sincronización audio-video precisa</li>
                <li>• Subtítulos automáticos con corrección</li>
                <li>• Render por lotes estable</li>
              </ul>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-[color:var(--text)] mb-4">Optimizaciones</h3>
              <ul className="space-y-2 text-[color:var(--muted)]">
                <li>• Reintentos por fragmento</li>
                <li>• Margen adicional para fades</li>
                <li>• Control de costos en APIs</li>
                <li>• Uso eficiente de RAM/IO</li>
                <li>• Escalabilidad modular</li>
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
                flujo de datos y resultados técnicos.
              </p>
              <a
                href="https://matiasagustinformoso.vercel.app/proyect_txt_to_mp4.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2 mx-auto"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Ver análisis completo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
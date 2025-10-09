export default function Principles() {
  return (
    <section id="principios" className="band band-base">
      <div className="container section">
        <h2 className="stitle">Principios de ingeniería</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card card-hover">
            <h3 className="text-lg font-semibold">Calidad</h3>
            <p className="mt-1 text-[color:var(--muted)]">
              Logging estructurado, manejo de errores con reintentos, validación de entradas y
              tiempos máximos por tarea.
            </p>
          </div>

          <div className="card card-hover">
            <h3 className="text-lg font-semibold">Mantenibilidad</h3>
            <p className="mt-1 text-[color:var(--muted)]">
              Módulos desacoplados, configuración por entorno, documentación mínima y clara.
            </p>
          </div>

          <div className="card card-hover">
            <h3 className="text-lg font-semibold">Performance</h3>
            <p className="mt-1 text-[color:var(--muted)]">
              Procesamiento por lotes, uso eficiente de memoria/IO, medición y profiling antes de
              optimizar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

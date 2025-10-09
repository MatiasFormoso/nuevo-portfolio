export default function CollaborationModels() {
  return (
    <section id="models" className="band band-alt anchor-section">
      <div className="container section">
        <p className="eyebrow">Cómo trabajo</p>
        <h2 className="stitle">Modelos de colaboración</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card card-hover">
            <h3 className="text-lg font-semibold">Proyecto cerrado</h3>
            <p className="mt-1 text-[color:var(--muted)]">
              Alcance definido, entregables claros y timeline. Ideal para piezas completas de
              integración o un dashboard de datos.
            </p>
          </div>

          <div className="card card-hover">
            <h3 className="text-lg font-semibold">Bolsa mensual</h3>
            <p className="mt-1 text-[color:var(--muted)]">
              Horas flexibles para mantenimiento, mejoras y soporte. Enfoque en continuidad y
              estabilidad.
            </p>
          </div>

          <div className="card card-hover">
            <h3 className="text-lg font-semibold">Ayuda puntual</h3>
            <p className="mt-1 text-[color:var(--muted)]">
              Tiempo dedicado a un tema concreto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

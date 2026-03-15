import { useState } from "react";

export default function Services() {

  const [open, setOpen] = useState(false);

  return (
    <section id="services" className="services">

      <h2>Servicios</h2>

      <div className="services-grid">

        <div className="card">
          <h3>Limpieza exterior</h3>
          <p>Lavado completo con espuma activa y limpieza de llantas.</p>
        </div>

        <div className="card">
          <h3>Limpieza interior</h3>
          <p>Aspirado profundo, limpieza de plásticos y cristales.</p>
        </div>

        <div className="card">
          <h3>Detailing completo</h3>
          <p>Limpieza premium interior y exterior con acabado profesional.</p>
        </div>

        {/* CARD DESPLEGABLE */}
        <div 
          className={`card custom-card ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >

          <h3>Plan personalizado</h3>

          <p>
            Diseñamos un servicio a medida según las necesidades de tu vehículo.
          </p>

          <div className="dropdown-content">

            <ul>
              <li>Pulido de faros</li>
              <li>Tratamiento cerámico</li>
              <li>Descontaminado de pintura</li>
              <li>Protección de plásticos</li>
              <li>Lavado premium</li>
              <li>Eliminación de olores</li>
              <li>Limpieza de tapicería profunda</li>
            </ul>

          </div>

          <span className="dropdown-icon">
            {open ? "▲" : "▼"}
          </span>

        </div>

      </div>

    </section>
  );
}
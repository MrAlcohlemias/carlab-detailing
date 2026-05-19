import { useState } from "react";

export default function Services() {

  const [open, setOpen] = useState(false);

  return (
    <section id="services" className="services">

      <h2>Servicios</h2>

      <div className="services-grid">

        <div className="card">
          <h3>Servicio básico</h3>
          <p>
            Incluye una limpieza interior y exterior sencilla, pensada para el mantenimiento del vehículo.
          </p>
          <span>2 horas aproximadamente · 60€</span>
        </div>

        <div className="card">
          <h3>Servicio estándar</h3>
          <p>
            Incluye una limpieza completa interior y exterior con más detalle y mejor acabado.
          </p>
          <span>3 horas aproximadamente · 100€</span>
        </div>

        <div className="card">
          <h3>Servicio premium</h3>
          <p>
            Incluye un detailing más exhaustivo con tratamientos específicos y mayor dedicación.
          </p>
          <span>4-5 horas aproximadamente · 150€</span>
        </div>

        {/* CARD DESPLEGABLE */}
        <div 
          className={`card custom-card ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >

          <h3>Servicio personalizado</h3>

          <p>
            Diseñamos un servicio totalmente adaptado a las necesidades de tu vehículo.
          </p>

          <div className="dropdown-content">

            <ul>
              <li>Pulido de faros</li>
              <li>Tratamiento cerámico</li>
              <li>Descontaminado de pintura</li>
              <li>Protección de plásticos</li>
              <li>Lavado premium</li>
              <li>Eliminación de olores</li>
              <li>Limpieza profunda de tapicería</li>
            </ul>

          </div>

          <span className="dropdown-icon">
            {open ? "▲" : "▼"}
          </span>

        </div>

      </div>

       {/* LETRA PEQUEÑA */}
      <p className="services-note">
        * El desplazamiento se cobra aparte según la ubicación.
      </p>

    </section>
  );
}
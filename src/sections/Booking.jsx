export default function Booking() {
  return (
    <section id="booking" className="booking">

      <h2>Reservar servicio</h2>

      <div className="booking-card">

        <form className="booking-form">

          <input type="text" placeholder="Nombre" required />

          <input type="tel" placeholder="Teléfono" required />

          <input type="text" placeholder="Dirección" required />

          <select>
            <option>Limpieza exterior</option>
            <option>Limpieza interior</option>
            <option>Detailing completo</option>
            <option>Plan personalizado</option>
          </select>

          <button type="submit" className="btn">
            Reservar
          </button>

        </form>

      </div>

    </section>
  )
}
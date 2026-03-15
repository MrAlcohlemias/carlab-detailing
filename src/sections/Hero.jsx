import car from "../assets/carIntro.jpg"

export default function Hero() {
  return (
    <section className="hero">
      <img src={car} className="hero-img"/>

      <div className="hero-text">
        <h1>CarLab Detailing</h1>
        <p>Detailing profesional a domicilio</p>
        <p className="hero-sub">
        Servicio premium de limpieza y detailing para tu vehículo.
        Vamos a tu casa o trabajo.
        </p>
        <br />
        <a href="#booking" className="btn">
          Reservar servicio
        </a>
      </div>
    </section>
  )
}
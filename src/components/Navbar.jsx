import logo from "../assets/logoCarLab.png"

export default function Navbar() {
  return (
    <nav className="navbar">

      <a href="#" className="logo">
        <img src={logo} alt="CarLab Detailing logo" className="logo-img" />
      </a>

      <div className="nav-links">
        <a href="#services">Servicios</a>
        <a href="#gallery">Gallery</a>
        <a href="#booking">Reservar</a>
        <a href="#contact">Contacto</a>
      </div>

    </nav>
  )
}
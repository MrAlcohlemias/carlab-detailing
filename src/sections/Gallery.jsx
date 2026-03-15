import car1 from "../assets/car1.jpg"
import car2 from "../assets/car2.jpg"
import car3 from "../assets/car3.jpg"
import car4 from "../assets/car4.jpg"
import car5 from "../assets/car5.jpg"
import car6 from "../assets/car6.jpg"
import car7 from "../assets/car7.jpg"
import car8 from "../assets/car8.jpg"
import car9 from "../assets/car9.jpg"
import car10 from "../assets/car10.jpg"
import car11 from "../assets/car11.jpg"
import car12 from "../assets/car12.jpg"
import car13 from "../assets/car13.jpg"

export default function Gallery() {

  const images = [
    car1, car2, car3, car4, car5, car6, car7,
    car8, car9, car10, car11, car12, car13
  ]

  return (
    <section id="gallery" className="gallery">

      <h2>Gallery</h2>
      <br />

      <div className="carousel-container">
        <div className="carousel">

          {images.map((img, index) => (
            <div
              key={index}
              className="carousel__face"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

        </div>
      </div>

    </section>
  )
}
import TitleJuego from "../layouts/TitleJuego/TitleJuego";
import JuegoCard from "../components/Juegos/JuegoCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

const Juegos = () => {
  return (
    <>
    <Navbar/>
    <TitleJuego />
 <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
      Entre Pelotas y Juegos de Azar: 
      </h2>
      <h2 className="text-2xl font-bold sm:text-2xl"> La conexión espiritual de los juegos prehispánicos</h2>
    </div>
    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img alt="Juego de pelota" src="https://i.pinimg.com/564x/3f/f5/93/3ff593377a59f0d36baeba9144a35b73.jpg" />
      </div>
      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
La principal diferencia entre un juego y un deporte es que éste último tiene una finalidad
competitiva, mientras que el juego se lleva a cabo por diversión o fines esotéricos.
En cuanto a las reglas, en el deporte son muy estrictas y se rigen bajo reglamentos, mientras que
en el juego las reglas podrían no existir o bien ser acordadas por los jugadores.
Por otra parte, para practicar un deporte la persona debe entrenarse de manera específica para
lograr buenos resultados, es decir, debe entrenar tanto los gestos técnicos como la preparación
física y mental.
Mientras que en el juego, no existe una preparación específica y cualquier persona puede
participar en cualquier momento. Por último, en cuanto a las instalaciones en el deporte están
claramente establecidas y reglamentadas, mientras que el juego puede llevarse a cabo en
cualquier lugar.
Para nosotros estas actividades, nombradas “Juegos”, fueron herramientas para alcanzar un
Desarrollo Humano Personal y Grupal. Tenían sus propios espacios para el desarrollo de estas
actividades, el TLAXCO (infraestructura del juego de pelota) y los AHUILCALLI (recinto del juego).
Además de sus propios TLAMATINIME especializados en explicar las tiradas y los números
obtenidos en el juego.
          </p>
        </article>
      </div>
    </div>
  </div>
</section>

    <JuegoCard />
    <Footer />
    </>
  )
}
export default Juegos
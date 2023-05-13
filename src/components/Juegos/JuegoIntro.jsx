const JuegoIntro = () => {
    return (
      <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="Juego de pelota"
            src="https://i.pinimg.com/564x/3f/f5/93/3ff593377a59f0d36baeba9144a35b73.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
        <h2 className="text-3xl font-bold sm:text-4xl text center">
        Entre Pelotas y Juegos de Azar:  
        </h2>
        <h2 className="text-2xl font-bold sm:text-2xl text-center"> La conexión espiritual de los juegos prehispánicos</h2>

          <p className="mt-4 text-black text-justify">
            La principal diferencia entre un juego y un deporte es que éste último tiene una finalidad competitiva, mientras que el juego se lleva a cabo por diversión o fines esotéricos.
            En cuanto a las reglas, en el deporte son muy estrictas y se rigen bajo reglamentos, mientras que en el juego las reglas podrían no existir o bien ser acordadas por los jugadores.
            Por otra parte, para practicar un deporte la persona debe entrenarse de manera específica para lograr buenos resultados, es decir, debe entrenar tanto los gestos técnicos como la preparación física y mental.
            Mientras que en el juego, no existe una preparación específica y cualquier persona puede participar en cualquier momento. Por último, en cuanto a las instalaciones en el deporte están claramente establecidas y reglamentadas, mientras que el juego puede llevarse a cabo en cualquier lugar.
            Para nosotros estas actividades, nombradas “Juegos”, fueron herramientas para alcanzar un Desarrollo Humano Personal y Grupal. Tenían sus propios espacios para el desarrollo de estas actividades, el TLAXCO (infraestructura del juego de pelota) y los AHUILCALLI (recinto del juego).
            Además de sus propios TLAMATINIME especializados en explicar las tiradas y los números obtenidos en el juego.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-l font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
          >
            Leer más
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      );
  };
  export default JuegoIntro
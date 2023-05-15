import videoFile from "../../assets/tonalvideo.mp4"

const TonalIntro = () => {
    return (
      <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <video
              alt="Tonalpohualli"
              src={videoFile}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
  
        <div className="relative flex items-center bg-gray-100">
          <span
            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>
  
          <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-3xl font-bold sm:text-4xl text-center">
          Descifrando el Tonalpohualli:  
          </h2>
          <h2 className="text-2xl font-bold sm:text-2xl text-center"> Un ciclo sagrado de 260 días en la cosmología ancestral</h2>
  
          <p className="mt-4 text-black text-justify">
          Imaginemos que nos encontramos en una época muy antigua donde nuestro pasatiempo sea la observación y
comprensión de los fenómenos que nos rodean. Si quisiéramos describir las formas, esencias o fuerzas que se
observan día tras día en la Tierra, observaríamos que cada 20 días se repite la misma esencia en general.
Nuestros ancestros, quienes distinguieron esas 20 esencias, las representaron con 20 signos, entre animales,
plantas, objetos y conceptos metafóricos.
  
            </p>
  
            <p className="mt-4 text-black text-justify">El Tonalpohualli es un ciclo de 260 días que surge de la combinación de trece números (que representan los
cambios que vive el ser humano con respecto al Sol), con los veinte signos de los días (que son las fuerzas o
esencias que se perciben en la Tierra con respecto a la energía del Sol). En su conjunto marcan “la cuenta del
destino”, es decir que esas 260 combinaciones son las características que una persona adquiere debido al día de
nacimiento.</p>
  
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
  export default TonalIntro
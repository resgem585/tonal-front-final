const TemazIntro = () => {
  return (
    <section>
      <div className="mx-auto h-screen w-screen px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="Juego de pelota"
            src="https://images.squarespace-cdn.com/content/v1/597a3a7837c581de3f210413/1615512507574-2HY2PFP3JHX6795WGZTP/IMG_8424.jpg?format=1500w"
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
        Un Portal hacia la Sanación Profunda:  
        </h2>
        <h2 className="text-2xl font-bold sm:text-2xl text-center"> Explorando los Baños de Vapor Tradicionales</h2>

        <p className="mt-4 text-black text-justify">
          Aunque los baños de vapor han sido usados por muchas culturas en diversas partes del mundo, el
temazcal ha tenido una importancia especial en las culturas nativas de América, tanto por motivos
religiosos y rituales, como herramienta de sanación.Se pueden encontrar vestigios de temazcales
en numerosas zonas arqueológicas de Mesoamérica. En muchos
temazcales de la cultura náhuatl se observaba representada la diosa Toci, también llamada Teteo
Innan ('la madre de los dioses) y Temazcaltecci (abuela de los baños de vapor), patrona de los
médicos, las parteras, las yerberas, los adivinos y los temazcaleros. A la llegada de los españoles, el
uso del temazcal era generalizado, aunque en su mayoría con propósitos medicinales. Después de
la conquista, su uso fue paulatinamente prohibido, ya que a los españoles les horrorizaba el
contenido ritual pagano del temazcal, y el hecho de que varios hombres y mujeres compartieran la
misma habitación estando casi desnudos.

          </p>

          <p className="mt-4 text-black text-justify">El Temazcalli representa el vientre de la Madre Tierra. Para la tradición náhuatl, su propósito es la
confrontación de Tezcatlipoca, es decir de nuestras partes obscuras para que el espíritu pueda
renacer más libre de como entró. Se realiza en cuatro puertas en las que se sanan los cuerpos
físico, emocional, mental y espiritual.El ritual se inicia con el encendido del fuego y se acompaña
con música elaborada con instrumentos autóctonos y cantos emanados de la tradición. Acorde al
propósito del mismo, el Temazcalli “se corre” con 4, 7 y 9 piedras, en cada una de las cuatro
puertas si es de sanación y con 13 si se trata de templar el espíritu guerrero.</p>

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
export default TemazIntro

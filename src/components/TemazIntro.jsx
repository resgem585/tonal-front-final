// React
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

// Apollo/client
import { useLazyQuery } from '@apollo/client';
// Query
import { GET_TEMAZ } from '../graphql/Queries'



const TemazIntro = () => {
  const [searchTemaz, { data, error }] = useLazyQuery(GET_TEMAZ)


 
  useEffect(() => {
		console.log("use effect in home");
		searchTemaz();
	}, [searchTemaz])

	if (data) {
		console.log(data);
	}

	if (error) return <h1>Error: {error}</h1>;
 

  
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
      Un Portal hacia la Sanación Profunda: 
      </h2>
      <h2 className="text-2xl font-bold sm:text-2xl"> Explorando los Baños de Vapor Tradicionales</h2>
    </div>
    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img alt="Juego de pelota" src="https://images.squarespace-cdn.com/content/v1/597a3a7837c581de3f210413/1615512507574-2HY2PFP3JHX6795WGZTP/IMG_8424.jpg?format=1500w" />
      </div>
      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
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

          <p>El Temazcalli representa el vientre de la Madre Tierra. Para la tradición náhuatl, su propósito es la
confrontación de Tezcatlipoca, es decir de nuestras partes obscuras para que el espíritu pueda
renacer más libre de como entró. Se realiza en cuatro puertas en las que se sanan los cuerpos
físico, emocional, mental y espiritual.El ritual se inicia con el encendido del fuego y se acompaña
con música elaborada con instrumentos autóctonos y cantos emanados de la tradición. Acorde al
propósito del mismo, el Temazcalli “se corre” con 4, 7 y 9 piedras, en cada una de las cuatro
puertas si es de sanación y con 13 si se trata de templar el espíritu guerrero.</p>
        </article>
      </div>
    </div>
  </div>
</section>
	);
};
export default TemazIntro
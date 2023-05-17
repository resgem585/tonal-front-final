import {useState} from "react";
import { Link } from 'react-router-dom';

function DatePick(){
    const [date, setDate] = useState()

    console.log("Date", date)

    return(
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
    <div className="mx-auto max-w-lg">
    <h1 className="text-center text-4xl font-bold text-red-600">
      Despierta tu energía ancestral
    </h1>

    <p className="mx-auto mt-4 text-l max-w-md text-center text-black">
      20 signos que revelan las esencias y fuerzas de la naturaleza. Descubre cómo nuestros ancestros capturaron la magia de cada ciclo de 20 días a través de animales, plantas, objetos y conceptos metafóricos.
    </p>
    <form
      action=""
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p className="text-center text-lg font-medium">Ingresa tu fecha de nacimiento</p>

      <div className="flex justify-center">
        <input type="date" className="mx-auto text-center" onChange={e => setDate(e.target.value)} />
      </div>
      <Link to="/mono">
  <button 
    type="submit"
    className="block w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
  >
    Descubre tu destino
  </button>
</Link>

    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="20 signos"
      src="https://pbs.twimg.com/media/FWrtlB_XoAAhnRy.jpg"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
    )
}

export default DatePick
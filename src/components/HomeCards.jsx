import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <div className="my-10 flex space-x-20 justify-center ">
      <Link
        to="/nahuatl"
        className="w-2/5 relative block overflow-hidden rounded-xl bg-[url(https://www.mexicodesconocido.com.mx/sites/default/files/nodes/586/codice_florentino.jpg)] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
          <div className="sm:pt-18 pt-12 text-white lg:pt-24">
            <h3 className="text-xl font-bold sm:text-2xl">Nahuatl</h3>
            <p className="text-sm"></p>
          </div>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
            4.5
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>
      </Link>
      <Link
        to="/juegos"
        className="w-2/5 relative block overflow-hidden rounded-xl bg-[url(https://www.muyinteresante.com.mx/wp-content/uploads/2018/05/httpstved-prod.adobecqms.netcontentdameditorialTelevisamexicomuyinteresantemxhistoria1202patolli-juego-prehispanico-588x257.imgo_.jpg)] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
          <div className="sm:pt-18 pt-12 text-white lg:pt-24">
            <h3 className="text-xl font-bold sm:text-2xl">Juegos</h3>
            <p className="text-sm"></p>
          </div>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
            4.5
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>
      </Link>
      <a
        href="#"
        className="w-2/5 relative block overflow-hidden rounded-xl bg-[url(https://i1.wp.com/www.dejarlotodoeirse.com/wp-content/uploads/2018/08/experiencia-en-un-temazcal-mexico.jpg?fit=642%2C482)] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
          <div className="sm:pt-18 pt-12 text-white lg:pt-24">
            <h3 className="text-xl font-bold sm:text-2xl">Temazcal</h3>
            <p className="text-sm"></p>
          </div>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
            4.5
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        </div>
      </a>
    </div>
  );
}
export default HomeCards
const HomeBanner = () => {
  return (
<section
  className="relative bg-[url(https://wallpapercave.com/wp/wp3098674.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
      Explora la antigua sabiduría azteca

        <strong className="block font-extrabold text-red-500">
        Obtén tu Horóscopo y desentraña tu potencial
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
      Sumérgete en un viaje de autoconocimiento y explora las características y potencialidades que el Horóscopo azteca revela sobre ti.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Comenzar
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          ¿Cómo funciona?
        </a>
      </div>
    </div>
  </div>
</section>
  );
}
export default HomeBanner
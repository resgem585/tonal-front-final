const Articulo1 = () => {
  return (
    <article className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Título del artículo</h1>
      <p className="text-gray-600 mb-8">Fecha de publicación: 12 de mayo de 2023</p>
      <div className="prose">
        <div className="mb-8">
          <img
            src="url_de_la_imagen_1"
            alt="Descripción de la imagen 1"
            className="w-full mb-4"
          />
          <p className="text-center text-gray-500">Pie de foto de la imagen 1</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia consequat
          pharetra. Sed cursus, lectus non cursus tincidunt, tellus enim commodo est, vel
          tincidunt ipsum urna a tellus. Proin semper arcu et nibh posuere, vel laoreet lorem
          interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>
        <div className="mb-8">
          <img
            src="url_de_la_imagen_2"
            alt="Descripción de la imagen 2"
            className="w-full mb-4"
          />
          <p className="text-center text-gray-500">Pie de foto de la imagen 2</p>
        </div>
        <p>
          Nulla posuere euismod mauris. Pellentesque pellentesque pellentesque nunc id consectetur.
          Nunc posuere lectus a hendrerit tincidunt. Nam aliquet finibus nunc, non rhoncus nulla
          volutpat a. Vestibulum id pellentesque arcu. Sed quis tristique leo. Cras hendrerit
          aliquet iaculis. Donec efficitur finibus laoreet.
        </p>
        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia consequat
            pharetra. Sed cursus, lectus non cursus tincidunt, tellus enim commodo est, vel
            tincidunt ipsum urna a tellus.
          </p>
          <cite>- Autor del artículo</cite>
        </blockquote>
        <h2 className="font-bold text-xl mt-8 mb-4">Subtítulo 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia consequat
          pharetra. Sed cursus, lectus non cursus tincidunt, tellus enim commodo est, vel
          tincidunt ipsum urna a tellus.
        </p>
        <h2 className="font-bold text-xl mt-8 mb-4">Subtítulo 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia consequat
          pharetra. Sed cursus, lectus non cursus tincidunt, tellus enim commodo est, vel
          tincidunt ipsum urna a tellus.
        </p>
        <ul>
        <li>Elemento de lista 1</li>
          <li>Elemento de lista 2</li>
          <li>Elemento de lista 3</li>
        </ul>
      </div>
    </article>
  );
};

export default Articulo1;


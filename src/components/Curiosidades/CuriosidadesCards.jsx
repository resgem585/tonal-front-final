// React
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

// Apollo/client
import { useLazyQuery } from '@apollo/client';
// Query
import { GET_SIGNO } from '../../graphql/Queries'



const CuriosidadesCard = () => {
  const [searchSigno, { data, error }] = useLazyQuery(GET_SIGNO)


 
  useEffect(() => {
		console.log("use effect in home");
		searchSigno();
	}, [searchSigno])

	if (data) {
		console.log(data);
	}

	if (error) return <h1>Error: {error}</h1>;
 

  
  return (
<div className="flex justify-center flex-wrap gap-y-5 xs:gap-y-7 sm:gap-y-5 gap-x-6 2xl:gap-x-4 mb-8 mt-15 2xl:mt-44 xs:pt-2 sm:pt-5 md:pt-4 lg:pt-6 xl:pt-5 2xl:pt-2 xl:px-6 2xl:px-0">
			{data &&
				data.getSigno.map(({ _id, title, description, image }) => (
					<>
						<Link
							to=""
							state={{ _id, title, description, image}}
							className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
						>
							<article className="flex bg-white transition hover:shadow-xl">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
      <span>¿Sabías qué..?</span>
  </div>

  <div className="">
    <img
      alt=""
      src={image}
      className="object-cover h-64"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900">
          {title}
        </h3>
      </a>

      <p className="mt-2 line-clamp-7  text-sm/relaxed text-gray-700">
        {description}
      </p>
    </div>
  </div>
</article>
							
						</Link>
						
					</>
				))}
		</div>
			
	);
};
export default CuriosidadesCard
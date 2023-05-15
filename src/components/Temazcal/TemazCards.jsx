// React
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

// Apollo/client
import { useLazyQuery } from '@apollo/client';
// Query
import { GET_TEMAZ } from '../../graphql/Queries'



const TemazCard = () => {
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
<div className="flex justify-center flex-wrap gap-y-5 xs:gap-y-7 sm:gap-y-5 gap-x-6 2xl:gap-x-4 mb-8 mt-15 2xl:mt-44 xs:pt-2 sm:pt-5 md:pt-4 lg:pt-6 xl:pt-5 2xl:pt-2 xl:px-6 2xl:px-0">
			{data &&
				data.getTemaz.map(({ _id, title, description, image }) => (
					<>
						<Link
							to=""
							state={{ _id, title, description, image}}
							className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
						>
							<article className="group">
  <img
    alt=""
    src={image}
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />

  <div className="p-4">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
        {title}
      </h3>
    </a>

    <p className="mt-2 line-clamp-5 text-sm/relaxed text-gray-500">
      {description}
    </p>
  </div>
</article>
								<a
      href="/primerapuerta"
      className="group mt-4 p-5 inline-flex items-center gap-1 text-sm font-medium text-red-600"
    >
      Descubre más

      <span
        aria-hidden="true"
        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
      >
        &rarr;
      </span>
    </a>
							
						</Link>
						
					</>
				))}
		</div>
			
	);
};
export default TemazCard
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
							className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
						>
							<a href="#">
								<img
									className="rounded-t-lg opacity-100 hover:opacity-50"
									src={image}
									alt
								/>
							</a>
							<div className="p-5">
								<a href="#">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
										{title}
									</h5>
								</a>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									{description}
								</p>
								<a
      href=""
      className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-red-600"
    >
      Descubre más

      <span
        aria-hidden="true"
        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
      >
        &rarr;
      </span>
    </a>
							</div>
							
						</Link>
						
					</>
				))}
		</div>
			
	);
};
export default CuriosidadesCard
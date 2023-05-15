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
							<article className="group">
  <img
    alt="Lava"
    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />

  <div className="p-4">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
        Finding the Journey to Mordor
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
      sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
      voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
      Molestias explicabo corporis voluptatem?
    </p>
  </div>
</article>
							
						</Link>
						
					</>
				))}
		</div>
			
	);
};
export default CuriosidadesCard
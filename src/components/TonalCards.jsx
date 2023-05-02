// React
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

// Apollo/client
import { useLazyQuery } from '@apollo/client';
// Query
import { GET_TONAL } from '../graphql/Queries'

const TonalCards = () => {
    const [searchTonal, { data, error }] = useLazyQuery(GET_TONAL)

    useEffect(() => {
          console.log("use effect in home");
          searchTonal();
      }, [searchTonal])
  
      if (data) {
          console.log(data);
      }
  
      if (error) return <h1>Error: {error}</h1>;
   
  return (

<div className="flex justify-center flex-wrap gap-y-5 xs:gap-y-7 sm:gap-y-5 gap-x-6 2xl:gap-x-4 mb-8 mt-15 2xl:mt-44 xs:pt-2 sm:pt-5 md:pt-4 lg:pt-6 xl:pt-5 2xl:pt-2 xl:px-6 2xl:px-0">
{data &&
    data.getTonal.map(({ _id, title, significado, description, image }) => (
        <>
            <Link
                to=""
                state={{ _id, title, significado, description,  image}}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
                <a href="#">
                    <img
                        className="rounded-t-lg"
                        src={image}
                        alt={title}
                    />
                </a>

                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">
                            {significado}
                        </h5>
                    </a>
                    <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">
                            {description}
                        </h5>
                    </a>
                 
                </div>
                 
                </div>
                
            </Link>
            
        </>
    ))}
</div> 
  )
    }
 
export default TonalCards

{/* <div className="flex gap-4 pt-4">
{data &&
    data.getTonal.map(({ _id, title, significado, description, image }) => (
        <>
            <Link
                to=""
                state={{ _id, title, significado, description,  image}}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
                <a href="#">
                    <img
                        className="rounded-t-lg"
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
                 
                </div>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {significado}
                        </h5>
                    </a>
                    <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {description}
                        </h5>
                    </a>
                 
                </div>
                 
                </div>
                
            </Link>
            
        </>
    ))}
</div> */}
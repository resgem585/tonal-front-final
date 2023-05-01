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
    <div className="flex gap-4 pt-4">
    {data &&
        data.getJuegos.map(({ _id, title, significado, description, acompaniante, oficio, image }) => (
            <>
                <Link
                    to=""
                    state={{ _id, title, significado, description, acompaniante, oficio, image}}
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
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {significado}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {description}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {acompaniante}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {oficio}
                        </p>
                        
                    </div>
                    
                </Link>
                
            </>
        ))}
</div>
  )
}
export default TonalCards
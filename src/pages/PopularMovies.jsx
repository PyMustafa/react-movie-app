import { useEffect, useState } from 'react';
import {movieListPopular} from '../apis/api'
import Pagination from '../components/pagination';

function MoviePopularList(){
    const [movies, setMovies] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fetchMovies = async () => {
          const {moviesPopular} = await movieListPopular(currentPage);
          setMovies(moviesPopular);
          setTotalPages(moviesPopular.totalPages)
    
        };
        fetchMovies();
      }, [currentPage]);
    
      console.log(movies)

    return(

        
  <>
  <div>
    <Pagination 
    currentPage={currentPage} 
    totalPages={totalPages} 
    onPageChange={setCurrentPage} 
  />
  </div>
  </>
    )
}
export default MoviePopularList
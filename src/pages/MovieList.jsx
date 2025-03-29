import { getMoviesList } from "../apis/api";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { useLanguage } from "../context/LanguageContext";

function MovieList() {
    const { language } = useLanguage();

    const [movies, setMovies] = useState();
    //const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesList = await getMoviesList(language);
            setMovies(moviesList);
        };

        fetchMovies();
    }, [language]);

    return (
        <>
            <SearchBar />
            <div className="grid grid-cols-1 sm:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
                {movies?.map((movie) => (
                    <div key={movie.id} className="">
                        <MovieCard movieObj={movie} />
                    </div>
                ))}
            </div>
        </>
    );
}
export default MovieList;

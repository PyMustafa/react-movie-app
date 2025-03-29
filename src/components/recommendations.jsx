import { getRecommendations } from '../apis/api';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Recommendations({ movieId }) {
    const [recommendations, setRecommendations] = useState([]);
  console.log(
    `3#########33333 ${movieId}`
  )
    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getRecommendations(+movieId);
            setRecommendations(movies);
        };
        fetchMovies();
    }, [movieId]);

    return (
        <div>
            <h1>Recommendations</h1>
            {recommendations.length > 0 ? (
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={6} 
                    navigation
                >
                    {recommendations.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <MovieCard movieObj={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Recommendations;
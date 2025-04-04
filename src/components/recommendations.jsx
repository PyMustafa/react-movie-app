import { getRecommendations } from "../apis/api";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext"; // Import LanguageContext
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Recommendations({ movieId }) {
    const [recommendations, setRecommendations] = useState([]);
    const { language } = useLanguage(); // Get the selected language from context

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movies = await getRecommendations(+movieId, language); // Pass language to API
                setRecommendations(movies);
            } catch (error) {
                console.error("Error fetching recommendations:", error);
            }
        };
        fetchMovies();
    }, [movieId, language]); // Re-fetch when movieId or language changes

    return (
        <div>
            <h1>Recommendations</h1>
            {recommendations.length > 0 ? (
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={6}
                    navigation
                    onTouchStart={(e) => e.stopPropagation()} // Prevent Swiper from interfering with dropdown
                    onClick={(e) => e.stopPropagation()} // Prevent Swiper click events from propagating
                >
                    {recommendations.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <MovieCard movieObj={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p>
                    We don't have enough data to suggest any movies based on this movie.
                    You can help by rating movies you've seen.

                </p>
            )}
            <style>
                {`
                .swiper-button-next, .swiper-button-prev {
                    color: #FFEA50 !important;
                    top: 40% !important;
                    transform: translateY(-50%) !important;
                }
                .swiper-button-next {
                    right: 10px !important;
                }
                .swiper-button-prev {
                    left: 10px !important;
                }
                `}
            </style>
        </div>
    );
}

export default Recommendations;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaLink, FaHeart } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    // Load favorite list from localStorage when the page loads
    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setIsFavorite(wishlist.includes(id));
    }, [id]);

    // Fetch movie details from the API
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const BASE_URL = import.meta.env.VITE_BASE_URL?.endsWith("/")
                    ? import.meta.env.VITE_BASE_URL
                    : `${import.meta.env.VITE_BASE_URL}/`;

                const url = `${BASE_URL}movie/${id}`;
                const { data } = await axios.get(url, { params: { api_key: import.meta.env.VITE_API_KEY } });
                setMovie(data);
            } catch (err) {
                setError("Failed to fetch movie details. Please try again.");
            }
        };

        fetchMovie();
    }, [id]);

    // Toggle favorite status and update localStorage
    const toggleFavorite = () => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        let updatedWishlist;

        if (isFavorite) {
            // Remove movie from favorites
            updatedWishlist = wishlist.filter(movieId => movieId !== id);
        } else {
            // Add movie to favorites
            updatedWishlist = [...wishlist, id];
        }

        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setIsFavorite(!isFavorite);
    };

    if (error) return <p className="error-message">{error}</p>;
    if (!movie) return <p className="loading-message">Loading...</p>;

    return (
        <>
            <div className="movie-container ">
                
                <div className="movie-poster">
                    {movie.poster_path ? (
                        <img src={`${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
                    ) : (
                        <p className="no-image">No image available</p>
                    )}
                </div>

                <div>
                    {/* Movie title with favorite icon */}
                    <div className="movie-header">
                        <h2 className="movie-title">{movie.title}</h2>
                        <FaHeart 
                            className={`heart-icon ${isFavorite ? "favorite" : ""}`} 
                            onClick={toggleFavorite} 
                        />
                    </div>

                    {/* Release date */}
                    <p className="movie-date mt-3">{movie.release_date || "N/A"}</p>

                    {/* Movie rating (stars + numeric value) */}
                    <div className="movie-rating mt-4">
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className="star-wrapper">
                                <svg 
                                    className={`vector-star ${index < Math.round(movie.vote_average / 2) ? "filled" : "empty"}`}
                                    viewBox="0 0 24 24" 
                                    fill={index < Math.round(movie.vote_average / 2) ? "black" : "none"}
                                    stroke="black" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <polygon points="12 2 15.1 8.3 22 9.3 17 14.2 18.2 21 12 17.8 5.8 21 7 14.2 2 9.3 8.9 8.3 12 2"></polygon>
                                </svg>
                            </span>
                        ))}
                        <span className="rating-number">{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</span>
                    </div>

                    {/* Movie description */}
                    <p className="movie-description mt-5">{movie.overview || "No overview available."}</p>

                    {/* Movie genres */}
                    <div className="movie-genres mt-4">
                        {movie.genres?.map((genre) => (
                            <span key={genre.id} className="genre-badge">{genre.name}</span>
                        ))}
                    </div>

                    {/* Additional movie details */}
                    <div className="movie-info mt-4">
                        <p><strong>Duration:</strong> <span className="movie-value movie-duration-value">{movie.runtime ? `${movie.runtime} min` : "N/A"}</span></p>
                        <p><strong>Language:</strong> <span className="movie-value movie-language-value">{movie.original_language ? movie.original_language.toUpperCase() : "N/A"}</span></p>
                    </div>

                    {/* Production company (if available) */}
                    {movie.production_companies?.length > 0 && (
                        <div className="movie-company mt-4">
                            {movie.production_companies[0].logo_path ? (
                                <img src={`${import.meta.env.VITE_IMAGE_URL}${movie.production_companies[0].logo_path}`} alt={movie.production_companies[0].name} />
                            ) : (
                                <p>{movie.production_companies[0].name}</p>
                            )}
                        </div>
                    )}

                    {/* Official movie website link */}
                    {movie.homepage && (
                        <a href={movie.homepage} target="_blank" className="movie-website mt-4">
                            Website <FaLink className="link-icon" /> 
                        </a>
                    )}
                </div>
            </div>

            <div className="movie-divider"></div>
        </>
    );
};

export default MovieDetails;

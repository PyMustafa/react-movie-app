import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaLink, FaHeart } from "react-icons/fa";
import Recommendations from "../components/recommendations";
import Loader from "../components/Loader";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import emptyPosterImage from "../assets/empty_poster.png";
import { MovieReviews, fetchTvShowDetails } from "../apis/api";

const TvShowDetails = () => {
    const { id } = useParams();
    const [tvShow, setTvShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [reviewError, setReviewError] = useState(null);

    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setIsFavorite(wishlist.includes(id));
    }, [id]);

    useEffect(() => {
        const fetchTvShow = async () => {
            setLoading(true);
            try {
                const tvShowData = await fetchTvShowDetails(id, "en-US");
                setTvShow(tvShowData);
            } catch (err) {
                setError("Failed to fetch TV show details. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchTvShow();
    }, [id]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviewDetails = await MovieReviews(id, "en-US");
                setReviews(reviewDetails);
            } catch (error) {
                setReviewError("Failed to fetch reviews.");
                console.error("Failed to fetch reviews:", error);
            }
        };
        fetchReviews();
    }, [id]);

    const toggleFavorite = () => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const updatedWishlist = isFavorite
            ? wishlist.filter(showId => showId !== id)
            : [...wishlist, id];

        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setIsFavorite(!isFavorite);
    };

    if (loading) return <Loader />;
    if (error) return <p className="text-danger text-center">{error}</p>;

    return (
        <Container className="mt-4">
            <Row className="align-items-start">
                <Col md={4} className="text-start">
                    <img 
                        className="rounded-3 img-fluid" 
                        src={tvShow.poster_path ? `${import.meta.env.VITE_IMAGE_URL}${tvShow.poster_path}` : emptyPosterImage} 
                        alt={tvShow.name} 
                        style={{ width: "100%", objectFit: "cover", borderRadius: "27px" }}
                    />
                </Col>
                <Col md={8}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="h3 fw-bold" style={{ fontSize: "48px", color: "#000" }}>{tvShow.name}</h1>
                        <FaHeart 
                            onClick={toggleFavorite} 
                            className="fs-4" 
                            role="button" 
                            style={{ 
                                cursor: "pointer", 
                                transition: "all 0.3s ease-in-out", 
                                color: isFavorite ? "#FFE353" : "#6c757d" 
                            }}
                        />
                    </div>
                    <p className="text-muted">{tvShow.first_air_date || "N/A"}</p>
                    <p style={{ fontSize: "24px", color: "#000" }}>{tvShow.overview || "No overview available."}</p>
                    <div className="mb-3 d-flex flex-wrap mt-5" style={{ gap: "10px" }}>
                        {tvShow.genres?.map((genre) => (
                            <Badge key={genre.id} className="me-2" style={{ backgroundColor: "#FFE353", borderRadius: "25px", padding: "10px 15px", color: "#000" }}>{genre.name}</Badge>
                        ))}
                    </div>
                    <Row className="mt-4">
                        <Col><p><strong>Seasons:</strong> {tvShow.number_of_seasons || "N/A"}</p></Col>
                        <Col><p><strong>Episodes:</strong> {tvShow.number_of_episodes || "N/A"}</p></Col>
                        <Col><p><strong>Language:</strong> {tvShow.original_language?.toUpperCase() || "N/A"}</p></Col>
                    </Row>
                    {tvShow.homepage && tvShow.homepage.trim() && (
                        <Button 
                            className="border fw-bold mt-4 d-flex align-items-center justify-content-center" 
                            style={{ 
                                backgroundColor: "transparent", 
                                borderColor: "#FFE353", 
                                borderRadius: "25px",
                                padding: "10px 15px",
                                color: "#000",
                                width: "122px",
                                height: "37px",
                                gap: "8px" 
                            }}
                        >
                            Website
                            <FaLink style={{ color: "#292D32", fontSize: "18px" }} />
                        </Button>
                    )}
                </Col>
            </Row>
            <hr className="mt-5" />
            <Row>
                <Col>
                    <Recommendations movieId={id} />
                </Col>
            </Row>
            <hr />
            
        </Container>
    );
};

export default TvShowDetails;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";

const WishListCard = (props) => {
    console.log(props);
    const { movie } = props;
    const img_url = import.meta.env.VITE_IMAGE_URL;
    const movie_img = `${img_url}${movie.poster_path}`;
    console.log(movie);

    return (
        <div className="card p-3 shadow" style={{ borderRadius: "19px", backgroundColor: "#F8F8F8" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={movie_img} className="img-fluid" alt={movie.title} style={{ borderRadius: "27px", maxHeight: "250px" }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <h2
                                className="card-title mb-0"
                                accordionstyle={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2, // Limit to 2 lines
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {movie.title}
                            </h2>
                            <FontAwesomeIcon icon={faHeart} style={{ color: "#FFE353" }} className="fs-3" />
                        </div>
                        <p className="card-text mb-1">
                            <small style={{ color: "#858585" }}>{movie.release_date}</small>
                        </p>
                        <div className="d-flex  mb-2">
                            <Rating
                                name="half-rating-read"
                                className="me-1"
                                style={{ color: "#292D32" }}
                                defaultValue={movie.vote_average ? movie.vote_average / 2 : 0} // Default to 0 if vote_average is invalid
                                precision={movie.vote_average && movie.vote_average > 0 ? 0.5 : 0.5} // Default precision to 0.5
                                readOnly
                            />
                            <p className="card-text mb-0">
                                <small className="text-black">{movie.vote_count}</small>
                            </p>
                        </div>
                        <p
                            className="card-text text-dark"
                            style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 3, // Limit to 3 lines
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {movie.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishListCard;

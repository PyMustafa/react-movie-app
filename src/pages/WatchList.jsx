import React from "react";
import { Link } from "react-router-dom";
import BrokenHeart from "../assets/broken-heart.svg";

const WatchList = () => {
    const movies = [];

    return (
        <>
            <h1 className=" fs-4 fw-bold">Watchlist</h1>
            <hr />

            <div className="d-flex flex-column align-items-center justify-content-center   text-center ">
                {movies.length === 0 ? (
                    <div className="d-flex flex-column align-items-center">
                        <img src={BrokenHeart} alt="Broken Heart" className=" opacity-50" />
                        <p className="fs-5 mt-3 text-secondary">No Movies in watchlist</p>
                        <Link to="/" className="mt-4 btn btn-warning text-dark fw-semibold px-4 py-2">
                            Back to home
                        </Link>
                    </div>
                ) : (
                    <ul className="mt-4 list-unstyled">
                        {movies.map((movie) => (
                            <li key={movie.id} className="fs-5 fw-medium">
                                {movie.title}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default WatchList;

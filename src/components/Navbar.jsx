import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar d-flex align-items-center justify-content-center" style={{ backgroundColor: "#FFE353", height: "55px" }}>
            <div className="container-fluid d-flex justify-content-between align-items-center px-4">
                <div className="d-flex  justify-content-between align-items-center gap-3">
                    <Link className="navbar-brand h4 fw-bold text-dark m-0 align-self-start" to="/">
                        Movie App
                    </Link>
                    <div className="dropdown">
                        <Link
                            to="#"
                            className="text-dark text-decoration-none nav-link dropdown-toggle"
                            id="moviesDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Movies
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="moviesDropdown">
                            <li>
                                <Link className="dropdown-item" to="/nowplaying">
                                    Now Playing
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/popular">
                                    Popular
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/tvShows" className="text-dark text-decoration-none nav-link">
                        <span className="">TV Shows</span>
                    </Link>
                </div>
                <Link to="/watchlist" className="text-dark text-decoration-none d-flex align-items-center gap-2">
                    <i className="fas fa-heart text-dark fs-4"></i>
                    <span className="fw-medium">Watchlist</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

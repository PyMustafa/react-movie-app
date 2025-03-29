import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1 className="display-4 fw-bold text-secondary">404 - Page Not Found</h1>
            <Link to="/" className="mt-4 btn btn-warning text-white">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;

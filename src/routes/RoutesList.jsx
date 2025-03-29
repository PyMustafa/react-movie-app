import { Suspense } from "react";
import Loader from "../components/Loader";
import { Route, Routes } from "react-router-dom";
import HeaderLayout from "../components/HeaderLayout";
import NotFound from "../pages/NotFound";
import MovieList from "../pages/MovieList";
import Watchlist from "../pages/WatchList";

const RoutesList = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route element={<HeaderLayout />}>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/watchlist" element={<Watchlist />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default RoutesList;

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const HeaderLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <Outlet />
            </div>
        </>
    );
};

export default HeaderLayout;

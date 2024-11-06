import { Outlet } from "react-router-dom";
import Footer from "../StaticPages/Footer";
import Navbar from "../StaticPages/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-268px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
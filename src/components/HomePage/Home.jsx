import Banner from "./Banner";
import AllGadget from "../Explore/AllGadget";
import { Outlet, useLoaderData } from "react-router-dom";
import GadgetCards from "../Explore/GadgetCards";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div className="mb-10">
            <Banner></Banner>
            <div className="flex gap-5">
                <AllGadget categories={categories}></AllGadget>
                <div>
                    <Outlet></Outlet>

                </div>
            </div>

        </div>
    );
};

export default Home;
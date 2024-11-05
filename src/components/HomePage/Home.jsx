import Banner from "./Banner";
import AllGadget from "../Explore/AllGadget";
import { Outlet, useLoaderData } from "react-router-dom";
import GadgetCards from "../Explore/GadgetCards";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div className="mb-10">
            <Banner></Banner>
            <h1 className="text-3xl font-bold text-center my-10">Explore Cutting-Edge Gadgets</h1>
            <div className="container mx-auto flex gap-5 justify-center">
                <AllGadget categories={categories}></AllGadget>
                <div>
                    <Outlet></Outlet>

                </div>
            </div>

        </div>
    );
};

export default Home;
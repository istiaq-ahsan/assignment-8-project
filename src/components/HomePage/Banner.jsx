import Heading from "../StaticPages/heading";

const Banner = () => {
    return (
        <div>
            <div className="bg-blue-600 h-[500px] container mx-auto rounded-2xl">
                <Heading title={"Upgrade Your Tech Accessories with Gadget Heaven Accessories"}
                    description={"Explore the latest gadgets that will take your experience next level.From smart devices to the coolest accessories,we have it all!"}
                ></Heading>
                <div className="text-center">
                    <a href="#explore-category">
                        <button className="btn btn-actions bg-white text-blue-700 rounded-3xl px-8 mt-8">Shop Now</button>
                    </a>
                </div>
            </div >

            <div className="lg:w-[60%] w-[70%] max-w-3xl mx-auto border rounded-2xl
             border-white bg-transparent z-10 -mt-36">
                <div className="p-3">
                    <img className="w-full h-[250px] md:h-[350px] lg:h-[450px] rounded-2xl" src="https://i.ibb.co.com/WfCV6pS/banner.jpg" alt="" />

                </div>
            </div>
        </div>
    );
};

export default Banner;
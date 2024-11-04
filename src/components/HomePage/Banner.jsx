import Heading from "../StaticPages/heading";

const Banner = () => {
    return (
        <div>
            <div className="bg-blue-600 h-[500px] container mx-auto rounded-2xl">
                <Heading title={"Upgrade Your Tech Accessories with Gadget Heaven Accessories"}
                    description={"Explore the latest gadgets that will take your experience next level.From smart devices to the coolest accessories,we have it all!"}
                ></Heading>
            </div >
            <div className="w-[60%] max-w-3xl mx-auto border rounded-2xl
             border-white bg-transparent z-10 -mt-36">
                <div className="p-3">
                    <img className="w-full h-[450px] rounded-2xl" src="/public/assets/banner.jpg" alt="" />

                </div>
            </div>
        </div>
    );
};

export default Banner;
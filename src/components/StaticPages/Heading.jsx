
const Heading = ({ title, description }) => {
    return (
        <div className="text-center">
            <h1 className="text-white text-3xl lg:text-5xl w-[90%] md:w-4/5 mx-auto font-bold pt-10">{title}</h1>
            <p className="text-base w-4/5 md:w-3/5 mx-auto text-white mt-10">{description}</p>

        </div>
    );
};

export default Heading;
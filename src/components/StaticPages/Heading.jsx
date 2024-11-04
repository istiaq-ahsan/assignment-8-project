
const Heading = ({ title, description }) => {
    return (
        <div className="text-center">
            <h1 className="text-white text-5xl w-4/5 mx-auto font-bold pt-10">{title}</h1>
            <p className="text-base w-3/5 mx-auto text-white mt-10">{description}</p>
            <button className="btn btn-actions bg-white text-blue-700 rounded-3xl px-8 mt-8">Shop Now</button>
        </div>
    );
};

export default Heading;
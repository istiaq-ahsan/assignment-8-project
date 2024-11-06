import { Link } from "react-router-dom";

const Card = ({ device }) => {
    const { product_id, product_image, product_title, price } = device
    console.log(device);
    return (
        <div className="card bg-base-100 shadow-xl border border-gray-200">
            <figure>
                <img className="w-full h-[200px] md:h-[250px] lg:h-[300px] p-3"
                    src={product_image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}</p>
                <div className="card-actions">
                    <Link to={`/gadget/${product_id}`}><button className="btn btn-outline btn-primary rounded-3xl">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
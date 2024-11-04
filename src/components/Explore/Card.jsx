
const Card = ({ device }) => {
    const { product_image, product_title, price } = device
    console.log(device);
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src=""
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}</p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-primary rounded-3xl">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../StaticPages/heading";
import { addToCart, addToWish } from "../Utlilities";

const GadgetDetails = () => {
    const allGadgetData = useLoaderData()
    const { id } = useParams()

    const [device, setDevice] = useState({})

    useEffect(() => {
        const singleData = allGadgetData.find(device => device.product_id == id)
        setDevice(singleData)
    }, [allGadgetData, id])

    const handleAddToCart = (id) => {
        addToCart(id);

    }

    const handleAddToWish = (id) => {
        addToWish(id);

    }



    return (
        <div className="">
            <div className="bg-blue-600 h-[400px]">
                <Heading title={"Product Details"}
                    description={"Explore the latest gadgets that will take your experience next level.From smart devices to the coolest accessories,we have it all!"}
                ></Heading>
            </div>
            <div className="hero-content w-[80%] flex-col lg:flex-row rounded-2xl mx-auto bg-gray-100 z-10 -mt-40 mb-4 ">
                <div className="w-2/5">
                    <img
                        src={device.product_image}
                        className="w-full rounded-lg" />
                </div>
                <div className="ml-5 w-3/5">
                    <div className="space-y-3">
                        <h1 className="text-4xl font-bold">{device.product_title}</h1>
                        <h2 className="text-3xl font-bold">{device.price}</h2>
                        <div className="badge badge-outline p-2">
                            {device.availability ? <p>In Stock</p> : <p>Out of Stock</p>}
                        </div>
                        <p className="">
                            {device.description}
                        </p>
                    </div>
                    <div>
                        <ol className="" style={{ listStyleType: 'decimal' }}>
                            <h3 className="font-bold text-xl">Specification</h3>
                            {
                                device.specifications && device.specifications.map((spec, index) => (
                                    <li className="mt-3 ml-4" key={index}>{spec}</li>
                                ))
                            }
                        </ol>
                    </div>
                    <div className="my-3">
                        <h3 className="font-bold text-xl">Rating</h3>
                        <div className="rating flex my-2">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-yellow-400"
                                defaultChecked />

                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <h4 className="ml-5">{device.rating}</h4>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-3">
                        <button onClick={() => handleAddToCart(device.product_id)} className="btn rounded-3xl btn-primary">Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>
                        <button onClick={() => handleAddToWish(device.product_id)} className="btn btn-active rounded-full border-b"><i className="fa-regular fa-heart"></i></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;
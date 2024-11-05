import { useEffect, useRef } from "react";

const ListedProduct = ({ cart, handleIncreasePrice, handleDeleteProduct, handleDecreasePrice }) => {

    const hasAddedPrice = useRef(false);


    useEffect(() => {
        if (!hasAddedPrice.current) { // Check if the price has not been added yet
            handleIncreasePrice(cart.price); // Add the price to the total
            hasAddedPrice.current = true; // Mark as added
        }

    }, [cart.price, handleIncreasePrice])

    return (
        <div className="w-4/5 mx-auto">
            <div className='border border-gray-500 p-4 rounded-xl mb-5'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <img className='w-32 h-28' src={cart.product_image} alt="" />
                        <div>
                            <h3 className='text-xl font-bold'>{cart.product_title}</h3>
                            <h4 className='text-base'>{cart.description}</h4>
                            <h2 className="text-lg font-medium">Price: $ {cart.price}</h2>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {
                            handleDeleteProduct(cart.product_id)
                            handleDecreasePrice(cart.price)
                        }}><i class="fa-regular fa-circle-xmark text-3xl"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedProduct;
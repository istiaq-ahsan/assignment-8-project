

const ListedWishes = ({ wish, handleDeleteWish, handleAddToCart, handleIncreasePrice }) => {



    return (
        <div className="w-4/5 mx-auto">
            <div className='border border-gray-500 p-4 rounded-xl mb-5'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 items-center'>
                        <img className='w-32 h-28' src={wish.product_image} alt="" />
                        <div>
                            <h3 className='text-xl font-bold'>{wish.product_title}</h3>
                            <h4 className='text-base'>{wish.description}</h4>
                            <h2 className="text-lg font-medium">Price: $ {wish.price}</h2>
                            <button onClick={() => {
                                handleDeleteWish(wish.product_id);
                                handleAddToCart(wish.product_id);
                                handleIncreasePrice(wish.price);
                            }} className="btn btn-secondary rounded-full my-5">Add to Card</button>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleDeleteWish(wish.product_id)}><i class="fa-regular fa-circle-xmark text-3xl"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedWishes;
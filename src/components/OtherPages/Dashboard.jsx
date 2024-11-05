import { useEffect, useState } from "react";
import { useLoaderData, Link, Outlet } from "react-router-dom";
import { getAllCarts, getAllWish, removeFromCart, removeFromWish, addToCart } from "../Utlilities";
import Heading from "../StaticPages/heading";
import ListedProduct from "./ListedProduct";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedWishes from "./ListedWishes";




const Dashboard = () => {

    const allDevices = useLoaderData();

    const [cartList, setCartList] = useState([]);
    const [wishlist, setWishList] = useState([]);
    const [total, setTotal] = useState(0);
    const [sort, setSort] = useState("");

    const handleIncreasePrice = (money) => {
        setTotal(prevTotal => prevTotal + money);
    }

    const handleDecreasePrice = (money) => {
        setTotal(prevTotal => prevTotal - money);
    }

    const handleDeleteProduct = (id) => {
        const remainingProduct = cartList.filter((p) => p.product_id !== id);
        setCartList(remainingProduct);
        removeFromCart(id);
    }

    const handleDeleteWish = (id) => {
        const remainingProduct = wishlist.filter((p) => p.product_id !== id);
        setWishList(remainingProduct);
        removeFromWish(id);
    }

    const handleAddToCart = (id) => {
        addToCart(id);
    }

    const handleSort = sortType => {
        setSort(sortType);

        if (sortType === "id") {
            const sortedList = [...cartList].sort((a, b) => b.price - a.price);
            setCartList(sortedList);
        }
    }




    useEffect(() => {
        const storedAllCarts = getAllCarts();
        const storedAllCartsInt = storedAllCarts.map(id => parseInt(id));

        const cartDeviceList = allDevices.filter(device => storedAllCartsInt.includes(parseInt(device.product_id)));
        setCartList(cartDeviceList);
    }, [allDevices])

    useEffect(() => {
        const storedAllWish = getAllWish();
        const storedAllWishInt = storedAllWish.map(id => parseInt(id));

        const wishDeviceList = allDevices.filter(device => storedAllWishInt.includes(parseInt(device.product_id)));
        setWishList(wishDeviceList);
    }, [allDevices])

    const [view, setView] = useState("cart");
    return (
        <div>
            <div className="bg-blue-600 h-[300px]">
                <Heading title={"Dashboard"}
                    description={"Explore the latest gadgets that will take your experience next level.From smart devices to the coolest accessories,we have it all!"}
                ></Heading>
                <div className="text-center space-x-3 mt-5">
                    <button onClick={() => setView("cart")} className="btn px-8 rounded-full">Cart</button>
                    <button onClick={() => setView("wishlist")} className="btn px-5 rounded-full">Wishlist</button>
                </div>
            </div>

            <div>
                {view === "cart" && (
                    <div className="mt-8">
                        <div className="container mx-auto my-8 flex justify-between items-center">
                            <h1 className="text-2xl font-bold">Cart</h1>
                            <div className="flex items-center gap-3 font-bold">
                                <h2>Total cost: {total}</h2>
                                <button onClick={() => handleSort("id")} className="btn btn-outline btn-primary">Sort By Price <i class="fa-solid fa-sliders rotate-90"></i></button>


                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn btn-secondary" onClick={() => document.getElementById('my_modal_1').showModal()}>Purchase</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box text-center space-y-3">
                                        <div className="flex justify-center">
                                            <img className="h-[100px] w-[100px]" src="https://img.icons8.com/?size=100&id=102561&format=png&color=000000" alt="" />
                                        </div>
                                        <h3 className="font-bold text-xl">Payment Successfully</h3>
                                        <p className="text-base">Thanks to purchasing</p>
                                        <p className="text-lg">Total : {total} </p>
                                        <div className="">
                                            <form method="dialog">

                                                <button className="btn btn-active w-full rounded-full">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>


                            </div>
                        </div>
                        {
                            cartList.map(cart => <ListedProduct
                                handleDeleteProduct={handleDeleteProduct}
                                handleIncreasePrice={handleIncreasePrice}
                                handleDecreasePrice={handleDecreasePrice}
                                key={cart.product_id}
                                cart={cart}></ListedProduct>)
                        }
                    </div>
                )}
                {
                    view === "wishlist" && (
                        <div className="mt-8">
                            <div className="container mx-auto my-10">
                                <h1 className="text-2xl font-bold">WishList</h1>
                            </div>
                            {
                                wishlist.map(wish => <ListedWishes
                                    handleIncreasePrice={handleIncreasePrice}
                                    handleAddToCart={handleAddToCart}
                                    handleDeleteWish={handleDeleteWish}
                                    key={wish.product_id}
                                    wish={wish}></ListedWishes>)
                            }
                        </div>
                    )
                }
            </div>


        </div>
    );
};


export default Dashboard;
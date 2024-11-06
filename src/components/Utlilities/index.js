//get all cart gadget from local storage
const getAllCarts = () => {
    const storedCartsSTr = localStorage.getItem('add-cart')
    if (storedCartsSTr) {
        const storedCart = JSON.parse(storedCartsSTr);
        return storedCart;
    }
    else {
        return [];
    }
}


//add a cart gadget to local storage
const addToCart = (id) => {
    const storedCart = getAllCarts();
    if (storedCart.includes(id)) {
        console.log("exist");
    }
    else {
        storedCart.push(id);
        const storedCartStr = JSON.stringify(storedCart);
        localStorage.setItem('add-cart', storedCartStr);
    }

}


//remove cart gadget from local storage


//get all wish gadget from local storage
const getAllWish = () => {
    const storedWishSTr = localStorage.getItem('add-wish')
    if (storedWishSTr) {
        const storedWish = JSON.parse(storedWishSTr);
        return storedWish;
    }
    else {
        return [];
    }
}


//add a cart gadget to local storage
const addToWish = (id) => {
    const storedWish = getAllWish();
    if (storedWish.includes(id)) {
        console.log("exist");
    }
    else {
        storedWish.push(id);
        const storedWishSTr = JSON.stringify(storedWish);
        localStorage.setItem('add-wish', storedWishSTr);
    }

}


//remove cart gadget from local storage

const removeFromCart = (id) => {
    const storedCart = getAllCarts();
    const updateCart = storedCart.filter(itemId => itemId !== id);
    localStorage.setItem('add-cart', JSON.stringify(updateCart))
}

const removeFromWish = (id) => {
    const storedWish = getAllCarts();
    const updateWish = storedWish.filter(itemId => itemId !== id);
    localStorage.setItem('add-wish', JSON.stringify(updateWish))
}

export { addToCart, getAllCarts, getAllWish, addToWish, removeFromCart, removeFromWish }
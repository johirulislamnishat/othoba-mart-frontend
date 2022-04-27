export const addToWish = (wish, item) => {
    const check = wish.every((c) => {
        return c._id !== item._id;
    });
    if (!check)
        return {
            type: "NOTIFY",
            payload: { error: "Product has already been added to the wish." },
        };

    return {
        type: "ADD_WISH",
        payload: [
            ...wish,
            {
                ...{
                    _id: item?._id,
                    item_name: item?.product_name || item?.item_name,
                    item_price: item?.product_price || item?.item_price,
                    item_img: item?.photo || item?.item_img,
                    item_qty: 1,
                    item_total_price:
                        (item?.product_price || item?.item_price) * 1,
                    shop_name: "fff",
                    shop_id: "1213",
                },
            },
        ],
    };
};

export const addToCart = (cart, item) => {
    const check = cart?.every((c) => {
        return c._id !== item._id;
    });
    if (!check)
        return {
            type: "NOTIFY",
            payload: { error: "Product has already been added to the cart." },
        };

    return {
        type: "ADD_CART",
        payload: [
            ...cart,
            {
                ...{
                    _id: item?._id,
                    item_name: item?.product_name || item?.item_name,
                    item_price: item?.product_price || item?.item_price,
                    item_img: item?.photo || item?.item_img,
                    item_qty: 1,
                    item_total_price:
                        (item?.product_price || item?.item_price) * 1,
                    shop_name: "fff",
                    shop_id: "1213",
                },
            },
        ],
    };
};

export const decrease = (data, id) => {
    const newData = [...data];
    newData.forEach((item) => {
        if (item._id === id) {
            item.item_qty -= 1;
            item.item_total_price = item.item_price * item.item_qty;
        }
    });

    return { type: "ADD_CART", payload: newData };
};

export const increase = (data, id) => {
    const newData = [...data];

    newData.forEach((item) => {
        if (item._id === id) item.item_qty += 1;
        item.item_total_price = item.item_price * item.item_qty;
    });

    return { type: "ADD_CART", payload: newData };
};

export const removeFromWish = (data, id) => {
    const rest = data.filter((item) => item._id !== id);

    return { type: "REMOVE_FROM_WISH", payload: rest };
};

export const removeFromCart = (data, id) => {
    const rest = data.filter((item) => item._id !== id);

    return { type: "REMOVE_FROM_CART", payload: rest };
};

export const addUser = (user) => {
    return { type: "AUTH", payload: user };
};

export const addToCart = (item, cart) => {
  const check = cart.every((c) => {
    return c._id !== item._id;
  });

  if (!check)
    return {
      type: "NOTIFY",
      payload: { error: "Product has already been added to the cart." },
    };

  return {
    type: "ADD_CART",
    payload: [...cart, { ...{_id: item?._id, item_name: item?.product_name, item_price: item?.product_price,
      item_img: item?.product_img, item_qty: 1, item_total_price: item?.product_price * 1, shop_name:'fff', shop_id:'1213' }  }],
  };
};

export const decrease = (data, id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item._id === id) {
      item.item_qty -= 1;
      item.item_total_price = item.item_price * item.item_qty
    } 
  });

  return { type: "ADD_CART", payload: newData };
};

export const increase = (data, id) => {
  const newData = [...data];

  newData.forEach((item) => {
    if (item._id === id) item.item_qty += 1;
    item.item_total_price = item.item_price * item.item_qty
  });

  return { type: "ADD_CART", payload: newData };
};

export const removeFromCart = (data, id) => {
  const rest = data.filter((item) => item._id !== id);

  return { type: "REMOVE_FROM_CART", payload: rest };
};

export const userData = (user) => {
  return { type: 'AUTH', payload: user}
}
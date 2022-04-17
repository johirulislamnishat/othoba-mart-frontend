import React, { useState, useEffect } from "react";
import axios from "axios";


const UseLocalDB = () => {
  const [totalQuantity, setTotalQuantity] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const [cart, setCart] = useState([]);

  console.log(cart, totalQuantity, totalPrice)

  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      setCart(localStorage.setItem("cart",[]));
    } else {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const AddToCart = (product) => {
    useEffect(() => {
    //   let product = cartData.find((pd) => pd.id == product.id);
        if(!product.quantity || product.quantity==0){
            product.quantity = 1
        }

      if (cart.length == 0) {
        cart.push(product);
      } else {
        let res = cart?.find((pd) => pd._id == product.id);
        if (res === undefined) {
          cart.push(product);
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }, []);
  };

  const UpdateQuantity = (productId, quantity) => {
    useEffect(() => {
        if(cart.lenght !=0){
            for (let product of cart) {
              if( product._id == productId){
                product.quantity = quantity
              }
            }
            }
    // cart.push(product)
      localStorage.setItem("cart", JSON.stringify(cart));
    }, []);
  };

  const TotalQuantityReducer = () => {
    useEffect(()=>{
        let quantity = cart?.map(p=> p.quantity)
        let allQuantity = quantity?.reduce((prev, quantity)=>prev + quantity, 0)
        setTotalQuantity(allQuantity)
    },[cart])
  }
  TotalQuantityReducer()

  const TotalPriceReducer = () => {
      useEffect(() => {
        let price = cart?.map((product) => product.price * product.quantity);
        let sum = price?.reduce((prev, price) => prev + price, 0);
        setTotalPrice(sum?.toFixed(2))
      }, [cart]);
  };
  TotalPriceReducer()

  const RemoveFromCart = (productId) => {
      useEffect(() => {
        let rest = cart?.filter((pd) => pd._id != productId);     
        localStorage.setItem("cart", JSON.stringify(rest));
      }, []);
  };

  // AddToCart({
  //   _id: 1,
  //   title: "vegetable",
  //   farm: 'field',
  //   price: 21.2,
  //   quantity:0
  // },);
  // AddToCart({
  //   _id: 2,
  //   title: "vegetable-2",
  //   farm: 'field',
  //   price: 18.2,
  //   quantity:0
  // },);
  // AddToCart(({ 
  //   _id: 3,
  //   title: "vegetable-3",
  //   farm: 'field',
  //   price: 16.2,
  //   quantity:0
  // }),);

  // RemoveFromCart()

  // UpdateQuantity(2, 2);

    // totalQuantity()

  // totalPrice();

  

  return {
    cart,
    totalQuantity,
    UpdateQuantity,
    totalPrice,
    RemoveFromCart,
  }
};

export default UseLocalDB;

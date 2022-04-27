import { Image } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { useState, useEffect } from "react";
import useProvider from "../../hooks/useProvider";
import { decrease } from "../../context/actions/Actions";
import { increase } from "../../context/actions/Actions";
import { removeFromCart } from "../../context/actions/Actions";
import CartTotal from "./CartTotal";

const CartFull = () => {
  const {
    state: { cart },
    dispatch,
  } = useProvider();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (prev, next) => prev + Number(next.item_price) * next.item_qty,
        0
      )
    );
  }, [cart]);

  // if (cart.length === 0) return <div>Cart is empty!</div>;

  return (
    <div className="mx-3">
      <h3 className="lg:mt-7 text-2xl font-semibold">SHOPPING CART</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="py-3 col-span-1 sm:col-span-2">
          <table
            className="w-full table-fixed border-2 border-gray-200 text-center"
            style={{ borderSpacing: "20px" }}
          >
            <thead className="py-3 border-2 border-b-gray-200 w-full">
              <tr className="py-3">
                <th colSpan="3">Product</th>
                <th colSpan="1">Quantity</th>
                <th colSpan="1">Subtotal</th>
                <th colSpan="1">Remove</th>
              </tr>
            </thead>
            <tbody className="">
              {cart?.map((p, i) => (
                <>
                  <tr key={i} className="font-semibold">
                    <td colSpan="1">
                      <Image src={p.item_img} alt="" width={70} height={60} />
                    </td>
                    <td colSpan="2" className="w-full">
                      <h5 className="text-left break-words cursor-pointer">
                        {p.item_name}
                      </h5>
                      {/* <p className="text-left break-words">
                          {p.product_description}
                          </p> */}
                      <p className="text-left">Price: {p.item_price} USD</p>
                    </td>
                    <td colSpan="1">
                      <div className="w-max flex items-center mx-auto">
                        <button
                          disabled={p.item_qty === 1 ? true : false}
                          onClick={() => dispatch(decrease(cart, p._id))}
                          className="cursor-pointer text-3xl p-1 pt-0"
                        >
                          -
                        </button>

                        <span className="border-2 border-gray-400 px-2 py-0.5 rounded m-0">
                          {p.item_qty}
                        </span>
                        <button
                          onClick={() => dispatch(increase(cart, p._id))}
                          className="cursor-pointer text-2xl p-1 pt-0"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td colSpan="1" className="text-sky-500 text-center">
                      {p.item_price * p.item_qty} USD
                    </td>
                    <td colSpan="1">
                      <DeleteTwoTone
                        twoToneColor="#dd1111"
                        className="cursor-pointer"
                        onClick={() => dispatch(removeFromCart(cart, p._id))}
                      />
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <CartTotal total={total} />
      </div>
    </div>
  );
};

export default CartFull;

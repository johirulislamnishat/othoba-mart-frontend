import {
  CloseOutlined,
  HeartTwoTone,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  addToWish,
  decrease,
  increase,
  removeFromCart,
} from "../../context/actions/Actions";
import useProvider from "../../hooks/useProvider";

const CartMini = ({ activeCart, setActiveCart }) => {
  const {
    state: { cart, wish },
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

  const handleWish = (item) => {
    dispatch(addToWish(wish, item));
    dispatch(removeFromCart(cart, item._id));
  };

  return (
    <>
      {activeCart && (
        <div className="absolute z-10 top-10 w-72 right-0 bg-white shadow-lg shadow-gray-500">
          <div className="border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-xl m-0 text-left">
                Shopping Cart
              </h3>
              <p className="flex items-center gap-1 font-semibold text-lg  m-0">
                <CloseOutlined
                  style={{ color: "red" }}
                  className="cursor-pointer "
                  onClick={() => setActiveCart(!activeCart)}
                />
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 divide-y-2">
              {cart.length === 0 && (
                <div className="text-left text-lg font-semibold my-5">
                  Cart is empty!
                </div>
              )}
              {cart.map((p) => (
                <div className="pt-2" key={p._id}>
                  <div className="flex gap-2">
                    <Image
                      src={p.item_img}
                      preview={false}
                      alt=""
                      width={50}
                      heigth={40}
                    />
                    <div className="text-left">
                      <h4 className="font-semibold m-0">{p.item_name}</h4>
                      <div className="ratings-mini">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarOutlined />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => handleWish(p)}
                      >
                        <HeartTwoTone twoToneColor="#eb2f96" />
                        <p className="text-gray-400 text-sm m-0"> Wish</p>
                      </div>
                      {/* <div className="flex items-center gap-1 cursor-pointer">
                        <img
                          src="/images/icons/compare.png"
                          alt=""
                          width="14px"
                          height="14px"
                        />
                        <p className="text-gray-400 m-0">Compare</p>
                      </div> */}
                      <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => dispatch(removeFromCart(cart, p._id))}
                      >
                        <CloseOutlined className="text-red-500" />
                        <p className="text-gray-400 m-0">Remove</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <p className="w-max text-orange-500 text-md font-semibold m-0">
                        {p.item_price * p.item_qty} USD
                      </p>
                      <p className="line-through text-sm m-0">12.11 USD</p>
                    </div>
                    <div className="self-end flex items-center">
                      <button
                        disabled={p?.item_qty === 1 ? true : false}
                        onClick={() => dispatch(decrease(cart, p._id))}
                        className="cursor-pointer text-3xl p-1 pt-0"
                      >
                        -
                      </button>

                      <span className="border-2 border-gray-400 px-2 py-0.5 rounded m-0 font-semibold">
                        {p.item_qty}
                      </span>
                      <button
                        onClick={() => dispatch(increase(cart, p._id))}
                        className="cursor-pointer text-2xl p-1 pt-0"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="py-3">
                <div className="text-left">
                  <h5 className="font-semibold font-xs m-0">Sub Total</h5>
                  <h5 className=" m-0 text-sky-500">{total} USD</h5>
                </div>
              </div>
              <div className="pt-3 flex items-center justify-between">
                <Link href="/shop">
                  <a>
                    <button
                      className="p-2 bg-white font-semibold 
                      text-gray-500 rounded-lg border-2  hover:bg-white hover:border-2 hover:border-orange-500 hover:text-black"
                      onClick={() => setActiveCart(!activeCart)}
                    >
                      shop
                    </button>
                  </a>
                </Link>
                <Link href="/cart">
                  <a>
                    <button
                      className="py-2 px-3 rounded-lg bg-orange-500 border-2 text-white hover:bg-white hover:border-2 hover:border-orange-500 hover:text-black"
                      onClick={() => setActiveCart(!activeCart)}
                    >
                      View Full Cart
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartMini;

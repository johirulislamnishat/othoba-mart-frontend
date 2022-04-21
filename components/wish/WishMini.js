import { useState, useEffect } from "react";
import Link from "next/link";
import {
  StarOutlined,
  StarFilled,
  HeartTwoTone,
  CloseOutlined,
} from "@ant-design/icons";
import useProvider from "../../hooks/useProvider";
import { decrease } from "../../context/actions/Actions";
import { increase } from "../../context/actions/Actions";
import { removeFromCart } from "../../context/actions/Actions";

const WishMini = ({activeWish, setActiveWish}) => {
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
      
    return(
        <>
      {activeWish && (
        <div className="absolute z-10 top-0 w-72 right-0 bg-white shadow-lg shadow-gray-500">
          <div className="border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-xl m-0 text-left">
                Wish List
              </h3>
              <p className="flex items-center gap-1 font-semibold text-lg  m-0">
                <CloseOutlined
                  className="cursor-pointer"
                  onClick={() => setActiveWish(!activeWish)}
                />
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 divide-y-2">
              {wish.length === 0 && (
                <div className="text-left text-lg font-semibold my-5">
                  Wish is empty!
                </div>
              )}
              {wish.map((p) => (
                <div className="mt-4 " key={p._id}>
                  <div className="flex gap-2">
                    <img
                      src={p.item_img}
                      alt=""
                      className="bg-gray-200 w-20 h-16 rounded-lg"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold m-0">{p.item_name}</h4>
                      <p className="text-xs m-0">
                        <span className="text-gray-400 w-1/2">
                          {p?.item_description}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <div className="">
                      <div className="flex items-center gap-1 cursor-pointer">
                        <HeartTwoTone twoToneColor="#eb2f96" />
                        <p className="text-gray-400 text-sm m-0">Wishlist</p>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <img
                          src="/images/icons/compare.png"
                          alt=""
                          width="14px"
                          height="14px"
                        />
                        <p className="text-gray-400 m-0">Compare</p>
                      </div>
                      <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => dispatch(removeFromCart(cart, p._id))}>
                        <CloseOutlined className="text-red-500" />
                        <p className="text-gray-400 m-0">Remove</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="ratings-mini">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarOutlined />
                      </div>
                      <div>
                        <p className="min-w-max text-sky-500 text-md font-semibold m-0">
                          {p.item_price} USD
                        </p>
                        <p className="line-through text-sm m-0">48.56 USD</p>
                      </div>
                    </div>
                    <div className="w-max flex items-center mx-auto">
                      <button
                        disabled={p?.item_qty === 1 ? true : false}
                        onClick={() => dispatch(decrease(cart, p._id))}
                        className="cursor-pointer text-3xl p-1 pt-0">
                        -
                      </button>

                      <span className="border-2 border-gray-400 px-2 py-0.5 rounded m-0">
                        {p.item_qty}
                      </span>
                      <button
                        onClick={() => dispatch(increase(cart, p._id))}
                        className="cursor-pointer text-2xl p-1 pt-0">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="py-3">
                <div className="text-left">
                  <h5 className="font-semibold font-xs m-0">Sub Total</h5>
                  <h5 className="text-sky-500 m-0 text-sky-500">{total} USD</h5>
                </div>
              </div>
              <div className="py-1 flex items-center justify-between">
                <Link href="/categories">
                  <a>
                    <button
                      className="p-2 bg-transparent font-semibold text-gray-500 rounded-lg hover:text-black"
                      onClick={() => setActiveWish(!activeWish)}>
                      Continue shopping
                    </button>
                  </a>
                </Link>
                <Link href="/cart">
                  <a>
                    <button
                      className="py-2 px-4 rounded-lg bg-orange-500 border-2 text-white hover:bg-white hover:border-2 hover:border-orange-500 hover:text-black"
                      onClick={() => setActiveWish(!activeWish)}>
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
    )
}

export default WishMini
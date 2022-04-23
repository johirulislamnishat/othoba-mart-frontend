import { useState, useEffect } from "react";
import Link from "next/link";
import {
  StarOutlined,
  StarFilled,
  HeartTwoTone,
  CloseOutlined,
  ShoppingTwoTone,
} from "@ant-design/icons";
import useProvider from "../../hooks/useProvider";
import { removeFromWish, addToCart } from "../../context/actions/Actions";
import { Image } from "antd";

const WishMini = ({ activeWish, setActiveWish }) => {
  const {
    state: { cart, wish },
    dispatch,
  } = useProvider();

  const handleAddToCart = (item) => {
    dispatch(addToCart(cart, item));
    dispatch(removeFromWish(wish, item._id));
  };

  return (
    <>
      {activeWish && (
        <div className="absolute z-10 top-0 w-72 right-0 bg-white shadow-lg shadow-gray-500">
          <div className="border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-xl m-0 text-left">Wish List</h3>
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
                    <Image
                      preview={false}
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
                      <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => handleAddToCart(p)}
                      >
                        <ShoppingTwoTone
                          twoToneColor="#ff6347"
                          className="text-xl"
                        />
                        <p className="text-gray-400 text-sm m-0">Add</p>
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
                        onClick={() => dispatch(removeFromWish(wish, p._id))}
                      >
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
                      <button className="py-0.5 px-2 rounded-lg bg-orange-500 border-2 text-white hover:bg-white hover:border-2 hover:border-orange-500 hover:text-black">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-3 flex items-center justify-between">
                <Link href="/categories">
                  <a>
                    <button
                      className="p-2 bg-transparent font-semibold text-gray-500 rounded-lg hover:text-black"
                      onClick={() => setActiveWish(!activeWish)}
                    >
                      Continue
                    </button>
                  </a>
                </Link>
                <Link href="/cart">
                  <a>
                    <button
                      className="py-2 px-4 rounded-lg bg-orange-500 border-2 text-white hover:bg-white hover:border-2 hover:border-orange-500 hover:text-black"
                      onClick={() => setActiveWish(!activeWish)}
                    >
                      View Full Wish List
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

export default WishMini;

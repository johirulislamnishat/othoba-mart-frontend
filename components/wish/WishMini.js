import {
  CloseOutlined,
  ShoppingTwoTone,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import Link from "next/link";
import { addToCart, removeFromWish } from "../../context/actions/Actions";
import useProvider from "../../hooks/useProvider";

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
        <div className="absolute z-10 top-10 w-72 right-0 bg-white shadow-lg shadow-gray-500">
          <div className="border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-xl m-0 text-left">Wish List</h3>
              <p className="flex items-center gap-1 font-semibold text-lg  m-0">
                <CloseOutlined
                  style={{ color: "red" }}
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
                <div className="pt-2" key={p._id}>
                  <div className="flex gap-2">
                    <Image
                      src={p.item_img}
                      preview={false}
                      height={40}
                      width={50}
                      alt=""
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
                  <div>
                    <div className="mt-1 flex justify-between pr-2">
                      <div className="mt-1 flex flex-col gap-1">
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
                          <CloseOutlined
                            style={{ color: "red", fontSize: "large" }}
                          />
                          <p className="text-gray-400 m-0">Remove</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="w-max text-orange-500 text-md text-right font-semibold m-0">
                          {p.item_price} USD
                        </p>
                        <p className=" w-max mt-0.5 line-through text-sm text-right m-0">
                          12.11 USD
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-3 flex items-center justify-between">
                <Link href="/shop">
                  <a>
                    <button
                      className="p-2 bg-white font-semibold 
                      text-gray-500 rounded-lg border-2  hover:bg-white hover:border-2 hover:border-orange-500 hover:text-black"
                      onClick={() => setActiveWish(!activeWish)}
                    >
                      Shop
                    </button>
                  </a>
                </Link>
                <Link href="/wishList">
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

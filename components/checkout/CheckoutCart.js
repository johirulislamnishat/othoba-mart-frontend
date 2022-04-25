import { Image } from "antd";
import {
  CloseOutlined,
  HeartTwoTone,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";

const CheckoutCart = ({
  cart,
  dispatch,
  decrease,
  increase,
  removeFromCart,
  total,
  tax,
  shipping,
  grandTotal,
}) => {
  return (
    <>
      <h3 className="font-semibold text-xl mt-4">Order Summary</h3>
      <p className="text-xs text-gray-500">
        Price can be changed depending on your shipping method and taxes in your
        state.{" "}
      </p>
      <div className="grid grid-cols-1 gap-2 divide-y-2">
        {cart.length === 0 && (
          <div className="text-left text-xl font-semi my-10">
            {" "}
            Cart is empty!{" "}
          </div>
        )}
        {cart.map((p) => (
          <div className="mt-4" key={p._id}>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <Image
                  src={p.item_img}
                  preview={false}
                  width={80}
                  height={70}
                  alt=""
                />
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => dispatch(removeFromCart(cart, p._id))}
                >
                  <CloseOutlined style={{ color: "red" }} />
                  <p className="text-gray-400 m-0">Remove</p>
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-left">
                  <h4 className="font-semibold  m-0 cursor-pointer">
                    {p.item_name}
                  </h4>
                  <div className="ratings-mini">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </div>

                  <div>
                    <p className="min-w-max text-sky-500 text-md font-semibold m-0">
                      {p.item_price * p.item_qty} USD
                    </p>
                  </div>

                  <div className="col-span-1 flex items-center mx-auto">
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
                </div>
              </div>
              <div className="w-full grid grid-cols-3">
                <div className="col-span-1 mt-1 w-full flex flex-col justify-between">
                  {/* <div className="flex items-center gap-1 cursor-pointer">
                  <HeartTwoTone twoToneColor="#eb2f96" />
                  <p className="text-gray-400 text-sm m-0">Wishlist</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <Image
                    preview={false}
                    src="/images/icons/compare.png"
                    alt=""
                    width="14px"
                    height="14px"
                  />
                  <p className="text-gray-400 m-0">Compare</p>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="py-5">
          <div className="grid grid-cols-3 font-semibold">
            <div>
              <p>Subtotal</p>
              <p>Tax</p>
              <p>Shipping</p>
            </div>
            <div className="justify-self-center">
              <p>{cart.length}</p>
              <p>17%</p>
              <p>FedEx</p>
            </div>
            <div className="justify-self-end text-right">
              <p>{total} USD</p>
              <p>{tax.toFixed(2)} USD</p>
              <p>{shipping.toFixed(2)} USD</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-5 items-center bg-gray-100 border-2 border-gray-300 py-1 px-0.5 rounded-lg">
            <div className="col-span-3">
              <input
                placeholder="Apply coupon code"
                className="text-md border-none bg-gray-100 lg:py-2 rounded-lg outline-none"
              />
            </div>
            <div className="col-span-2 justify-self-end">
              <button className="w-max text-right text-md font-bold pr-0.5 cursor-pointer">
                Apply now
              </button>
            </div>
          </div>
          <div className="mt-16 flex justify-between">
            <div className="">
              <h5 className="text-lg font-semibold">Total Order</h5>
              {/* <p className="text-green-500">
                Guaranteed delivery day: June 12, 2020
              </p> */}
            </div>

            <h4 className="min-w-max text-xl font-semibold text-sky-500">
              {grandTotal.toFixed(2)} USD
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCart;

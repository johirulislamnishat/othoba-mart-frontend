import { useState } from "react";
import {
    StarOutlined,
    StarFilled,
    HeartTwoTone,
    CloseOutlined,
    CaretDownOutlined,
  } from "@ant-design/icons";

const CheckoutCart = () => {
    const [activeOption, setActiveOption] = useState(false);
    return(
        <>
            <h3 className="font-semibold text-xl mt-4">Order Summary</h3>
            <p className="text-xs text-gray-500">
              Price can be changed depending on your shipping method and taxes
              in your state.{" "}
            </p>
            <div className="grid grid-cols-1 gap-6 divide-y-2">
              <div className="mt-5 ">
                <div className="flex gap-4">
                  <img
                    src=""
                    alt=""
                    className="bg-gray-200 w-28 h-20 rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold">Product title</h4>
                    <p className="">
                      <span className="text-gray-400">Farm:</span> Tharamis Farm
                    </p>
                    <p className="">
                      <span className="text-gray-400">Freshness:</span> 1 day
                      old
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <HeartTwoTone
                        twoToneColor="#eb2f96"
                        className="cursor-pointer"
                      />
                      <p className="text-gray-300 m-0">Wishlist</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/icons/compare.png"
                        alt=""
                        width="14px"
                        height="14px"
                        className="cursor-pointer"
                      />
                      <p className="text-gray-300 m-0">Compare</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CloseOutlined className="text-red-500 cursor-pointer" />
                      <p className="text-gray-300 m-0">Remove</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <StarFilled className="text-orange-500" />
                      <StarFilled className="text-orange-500" />
                      <StarFilled className="text-orange-500" />
                      <StarFilled className="text-orange-500" />
                      <StarOutlined />
                    </div>
                    <p className="min-w-max text-green-500 text-lg font-semibold">
                      36.99 USD
                    </p>
                    <p className="line-through text-sm">48.56 USD</p>
                  </div>
                  <div className="">
                    <ul className=" relative bg-gray-100 border-2 border-gray-300 rounded-2xl min-h-max p-2">
                      <span className="text-gray-400">1pc |</span> Pcs{" "}
                      <CaretDownOutlined
                        className="cursor-pointer"
                        onClick={() => setActiveOption(!activeOption)}
                      />
                      {activeOption && (
                        <div className="absolute bg-gray-100 right-0 p-3">
                          <li className="cursor-pointer">1</li>
                          <li className="cursor-pointer">2</li>
                          <li className="cursor-pointer">3</li>
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="py-5">
                <div className="flex gap-4">
                  <img
                    src=""
                    alt=""
                    className="bg-gray-200 w-28 h-20 rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold">Product title</h4>
                    <p className="">
                      <span className="text-gray-400">Farm:</span> Tharamis Farm
                    </p>
                    <p className="">
                      <span className="text-gray-400">Freshness:</span> 1 day
                      old
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <HeartTwoTone
                        twoToneColor="#eb2f96"
                        className="cursor-pointer"
                      />
                      <p className="text-gray-300 m-0">Wishlist</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="/images/icons/compare.png"
                        alt=""
                        width="14px"
                        height="14px"
                        className="cursor-pointer"
                      />
                      <p className="text-gray-300 m-0">Compare</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CloseOutlined className="text-red-500 cursor-pointer" />
                      <p className="text-gray-300 m-0">Remove</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <StarFilled className="text-orange-500" />
                      <StarFilled className="text-orange-500" />
                      <StarFilled className="text-orange-500" />
                      <StarFilled className="text-orange-500" />
                      <StarOutlined />
                    </div>
                    <p className="min-w-max text-green-500 text-lg font-semibold">
                      36.99 USD
                    </p>
                    <p className="line-through text-sm">48.56 USD</p>
                  </div>
                  <div className="">
                    <ul className=" relative bg-gray-100 border-2 border-gray-300 rounded-2xl min-h-max p-2">
                      <span className="text-gray-400">1pc |</span> Pcs{" "}
                      <CaretDownOutlined
                        className="cursor-pointer"
                        onClick={() => setActiveOption(!activeOption)}
                      />
                      {activeOption && (
                        <div className="absolute bg-gray-100 right-0 p-3">
                          <li className="cursor-pointer">1</li>
                          <li className="cursor-pointer">2</li>
                          <li className="cursor-pointer">3</li>
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <div className="grid grid-cols-3 font-semibold">
                  <div>
                    <p>Subtotal</p>
                    <p>Tax</p>
                    <p>Shipping</p>
                  </div>
                  <div className="justify-self-center">
                    <p>Item: 2</p>
                    <p>17%</p>
                    <p>FedEx</p>
                  </div>
                  <div className="justify-self-end text-right">
                    <p>73.98 USD</p>
                    <p>16 USD</p>
                    <p>5 USD</p>
                  </div>
                </div>
                <div className="mt-16 flex justify-between bg-gray-100 border-2 border-gray-300 py-1 px-2 rounded-lg">
                  <input
                    placeholder="Apply coupon code"
                    className="text-lg border-none bg-gray-100 py-2 rounded-lg outline-none"
                  />
                  <button className="text-lg font-bold">Apply now</button>
                </div>
                <div className="mt-16 flex justify-between">
                  <div className="">
                    <h5 className="font-semibold">Total Order</h5>
                    <p className="text-green-500">
                      Guaranteed delivery day: June 12, 2020
                    </p>
                  </div>

                  <h4 className="text-2xl font-semibold text-green-500">
                    89 USD
                  </h4>
                </div>
              </div>
            </div>
        </>
    )
}

export default CheckoutCart
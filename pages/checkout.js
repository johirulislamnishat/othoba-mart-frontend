import { useState } from "react";
import {
  StarOutlined,
  StarFilled,
  HeartTwoTone,
  CloseOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

import HomeLayout from "./../components/layouts/homeLayout";

const inputFields = [
  {
    title: "First name",
    type: "text",
  },
  {
    title: "Last name",
    type: "text",
  },
  {
    title: "Email address",
    type: "text",
  },
  {
    title: "Phone number",
    type: "number",
  },
  {
    title: "Address",
    type: "text",
  },
  {
    title: "Town / City",
    type: "text",
  },
  {
    title: "State / Country",
    type: "text",
  },
  {
    title: "ZIP / Postal code",
    type: "text",
  },
];

const Checkout = () => {
  const [activeOption, setActiveOption] = useState(false);

  return (
    // <HomeLayout title='Othoba Mart | Checkout'>
      <div className=" p-8">
        <p className="mb-3">Homepage / Checkout page</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="col-span-2 order-2 sm:order-1">
            <form className="">
              <h3 className="font-semibold text-xl mt-10">Billing info</h3>
              <p className="text-xs text-gray-500">
                Please enter your billing info.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {inputFields.map((inp, i) => (
                  <label
                    key={i}
                    className="flex flex-col font-semibold text-sm">
                    {inp.title}
                    <input
                      type={inp.type}
                      placeholder={inp.title}
                      className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                    />
                  </label>
                ))}
              </div>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center gap-2 w-full sm:w-1/3">
                <input type="checkbox" />
                <label className="min-w-max">Ship to a different address</label>
              </div>

              <h3 className="font-semibold text-xl mt-12">Shipping method</h3>
              <p className="text-xs text-gray-500">
                Please enter your shipping method.
              </p>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input type="radio" />
                  <label>FedEx</label>
                </div>
                <div className="flex gap-2">
                  <p className="text-green-500">+32 USD</p>
                  <p>Additional price</p>
                </div>
                <div className="font-bold flex">
                  <img src="/images/icons/fedex.png" alt="" />
                </div>
              </div>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input type="radio" />
                  <label>DHL</label>
                </div>
                <div className="flex gap-2">
                  <p className="text-green-500">+17 USD</p>
                  <p>Additional price</p>
                </div>
                <img src="/images/icons/dhl.png" alt="dhl logo" />
              </div>

              <h3 className="font-semibold text-xl mt-12">Payment method</h3>
              <p className="text-xs text-gray-500">
                Please enter your payment method.
              </p>
              <div className="p-2 border-2 border-gray-200 rounded-lg">
                <div className="m rounded-lg p-1 flex items-center gap-2">
                  <div className="w-full flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        className="border-2 border-green-500 rounded-full"
                      />
                      <label>Credit card</label>
                    </div>
                    <img src="images/icons/visa.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="flex flex-col font-semibold text-sm">
                    Card number
                    <input
                      type="number"
                      placeholder="Card number"
                      className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                    />
                  </label>
                  <div className="grid grid-cols-4 gap-4">
                    <label className="col-span-2 flex flex-col font-semibold text-sm">
                      Card holder
                      <input
                        type="text"
                        placeholder="Card holder"
                        className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                      />
                    </label>
                    <label className="col-span-1 flex flex-col font-semibold text-sm">
                      Expiration
                      <input
                        type="date"
                        placeholder=""
                        className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                      />
                    </label>
                    <label className="col-span-1 flex flex-col font-semibold text-sm">
                      CVC
                      <input
                        type="number"
                        placeholder="CVC"
                        className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input type="radio" />
                  <label>Paypal</label>
                </div>

                <div className="font-bold flex">
                  <img src="/images/icons/paypal.png" alt="" />
                </div>
              </div>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center justify-between gap-2">
                <div className="flex gap-2">
                  <input type="radio" />
                  <label>Bitcoin</label>
                </div>

                <img src="/images/icons/bitcoin.png" alt="dhl logo" />
              </div>

              <h3 className="font-semibold text-xl mt-12">Additional info</h3>
              <p className="text-xs text-gray-500">
                Need something else? We will make it for you!
              </p>
              <textarea
                className="mt-3 bg-gray-200 w-full rounded-lg"
                rows="4"
              />

              <h3 className="font-semibold text-xl mt-12">Confirmation</h3>
              <p className="text-xs text-gray-500">
                We are getting to the end. Just few clicks and your order is
                ready!
              </p>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center gap-2 w-full">
                <input type="checkbox" />
                <label className="">
                  I agree with sending an Marketing and Newsletter emails. No
                  spam, promised!
                </label>
              </div>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center gap-2 w-full">
                <input type="checkbox" />
                <label className="min-w-max">
                  I agree with the <span>terms and conditions</span> and{" "}
                  <span>privacy policy</span>{" "}
                </label>
              </div>
              <button
                type="submit"
                className="mt-7 py-5 px-10 bg-orange-600 text-white font-semibold rounded-lg">
                Complete order
              </button>
              <div className="mt-7 flex flex-col gap-2">
                <img src="images/icons/check.png" width="32px" alt="ok" />
                <h5 className="font-semibold">All your data are safe.</h5>
                <p className="w-1/3">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </p>
              </div>
            </form>
          </div>
          <div className="h-max col-span-2 sm:col-span-1 order-1 sm:order-2 border-2 border-gray-200 rounded-lg p-4 ">
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
                    <div className="flex gap-2 items-center">
                      <HeartTwoTone
                        twoToneColor="#eb2f96"
                        className="cursor-pointer"
                      />
                      <p className="text-gray-300">Wishlist</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="/images/icons/compare.png"
                        alt=""
                        width="14px"
                        height="14px"
                        className="cursor-pointer"
                      />
                      <p className="text-gray-300">Compare</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CloseOutlined className="text-red-500 cursor-pointer" />
                      <p className="text-gray-300">Remove</p>
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
                    <div className="flex gap-2 items-center">
                      <HeartTwoTone
                        twoToneColor="#eb2f96"
                        className="cursor-pointer"
                      />
                      <p className="text-gray-300">Wishlist</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="/images/icons/compare.png"
                        alt=""
                        width="14px"
                        height="14px"
                        className="cursor-pointer"
                      />
                      <p className="text-gray-300">Compare</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CloseOutlined className="text-red-500 cursor-pointer" />
                      <p className="text-gray-300">Remove</p>
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
          </div>
        </div>
      </div>
    // </HomeLayout>
  );
};

export default Checkout;

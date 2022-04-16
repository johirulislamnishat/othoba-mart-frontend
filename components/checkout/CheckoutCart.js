import {
	CaretDownOutlined,
	CloseOutlined,
	HeartTwoTone,
	StarFilled,
	StarOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import UseLocalDB from "../hooks/useLocalDB";

const CheckoutCart = () => {
	const [activeOption, setActiveOption] = useState(false);
	const [orderData, setOrderData] = useState({})

	const { cart, totalQuantity, totalPrice, RemoveFromCart } = UseLocalDB();

	const tax = totalPrice * 0.17;
	const shipping = totalPrice * 0.01;
	const grandTotal = parseFloat(totalPrice) + parseFloat(tax) + parseFloat(shipping);

	return (
		<>
			<h3 className="font-semibold text-xl mt-4">Order Summary</h3>
			<p className="text-xs text-gray-500">
				Price can be changed depending on your shipping method and taxes
				in your state.{" "}
			</p>
			<div className="grid grid-cols-1 gap-6 divide-y-2">
				{cart?.map((product) => (
					<>
						<div className="mt-5 " key={product._id}>
							<div className="flex gap-4">
								<img
									src=""
									alt=""
									className="bg-gray-200 w-28 h-20 rounded-lg"
								/>
								<div>
									<h4 className="font-semibold">
										{product.title}
									</h4>
									<p className="">
										<span className="text-gray-400">
											Farm:
										</span>{" "}
										{product.farm}
									</p>
									<p className="">
										<span className="text-gray-400">
											Freshness:
										</span>{" "}
										1 day old
									</p>
								</div>
							</div>
							<div className="mt-2 flex items-center justify-between">
								<div>
									<div className="flex items-center gap-2">
										<HeartTwoTone
											twoToneColor="#eb2f96"
											className="cursor-pointer"
										/>
										<p className="text-gray-400 m-0">
											Wishlist
										</p>
									</div>
									<div className="flex items-center gap-2">
										<img
											src="/images/icons/compare.png"
											alt=""
											width="14px"
											height="14px"
											className="cursor-pointer"
										/>
										<p className="text-gray-400 m-0">
											Compare
										</p>
									</div>
									<div className="flex items-center gap-2">
										<CloseOutlined
											className="text-red-500 cursor-pointer"
											onClick={() =>
												RemoveFromCart(product._id)
											}
										/>
										<p className="text-gray-400 m-0">
											Remove
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<div className="ratings">
										<StarFilled />
										<StarFilled />
										<StarFilled />
										<StarFilled />
										<StarOutlined />
									</div>
									<div>
										<p className="min-w-max text-green-500 text-lg font-semibold m-0">
											{product.price} USD
										</p>
										<p className="line-through text-sm m-0">
											48.56 USD
										</p>
									</div>
								</div>
								<div className="">
									<ul className=" relative bg-gray-100 border-2 border-gray-300 rounded-2xl min-h-max p-2">
										<span className="text-gray-400">
											1pc |
										</span>{" "}
										Pcs{" "}
										<CaretDownOutlined
											className="cursor-pointer"
											onClick={() =>
												setActiveOption(!activeOption)
											}
										/>
										{activeOption && (
											<div className="absolute bg-gray-100 right-0 p-3">
												<li className="cursor-pointer">
													1
												</li>
												<li className="cursor-pointer">
													2
												</li>
												<li className="cursor-pointer">
													3
												</li>
											</div>
										)}
									</ul>
								</div>
							</div>
						</div>
					</>
				))}

				<div className="py-5">
					<div className="grid grid-cols-3 font-semibold">
						<div>
							<p>Subtotal</p>
							<p>Tax</p>
							<p>Shipping</p>
						</div>
						<div className="justify-self-center">
							<p>Quantity: {totalQuantity}</p>
							<p>17%</p>
							<p>FedEx</p>
						</div>
						<div className="justify-self-end text-right">
							<p>{totalPrice} USD</p>
							<p>{tax.toFixed(2)} USD</p>
							<p>{shipping.toFixed(2)} USD</p>
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

						<h4 className="min-w-max text-xl font-semibold text-green-500">
							{grandTotal.toFixed(2)} USD
						</h4>
					</div>
				</div>
			</div>
		</>
	);
};

export default CheckoutCart;

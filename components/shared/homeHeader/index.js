import {
	CloseOutlined,
	HeartOutlined,
	MenuOutlined,
	SearchOutlined,
	ShoppingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Badge, Col, Dropdown, Image, Menu, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import useProvider from "../../../hooks/useProvider";
import CartMini from "../../cart/CartMini";
import WishMini from "../../wish/WishMini";

const HomeHeader = ({
	activeWish,
	setActiveWish,
	activeCart,
	setActiveCart,
	visible,
	setVisible,
}) => {
	const [searchText, setSearchText] = useState(null);
	const [showResult, setShowResult] = useState(false);
	const [searchData, setSearchData] = useState([]);
	const [loading, setLoading] = useState(false);
	const {
		state: { cart, wish },
	} = useProvider();

	const menu = (
		<Menu>
			<Menu.Item key="1">
				<Link href="/admin" passHref>
					Dashboard
				</Link>
			</Menu.Item>
			<Menu.Item key="2">
				<Link href="/" passHref>
					Your Profile
				</Link>
			</Menu.Item>
			<Menu.Item key="3" danger>
				<Link href="/auth/login" passHref>
					Login
				</Link>
			</Menu.Item>
		</Menu>
	);

	const handleSearch = () => {
		if (searchText) {
			setLoading(true);
			axios
				.get(`${API_BASE_URL}/product?key=${searchText}`)
				.then((res) => {
					setSearchData(res.data.result);
					setShowResult(true);
					setLoading(false);
				})
				.catch(() => {
					setShowResult(false);
					setLoading(false);
				});
		} else {
			message.warning("Please write first what do you want to find!");
		}
	};
	return (
		<header className="bg-white">
			<div className="py-5 px-3 lg:px-0">
				<div className="container mx-auto">
					<Row gutter={16} justify="space-between" align="middle">
						<Col
							xs={12}
							sm={12}
							md={6}
							lg={4}
							className="text-left"
						>
							<div className="flex items-center w-full">
								<div className="block lg:hidden flex items-center h-full">
									<MenuOutlined
										className="text-xl pl-3"
										onClick={() => setVisible(!visible)}
									/>
								</div>
								<Link href="/" passHref>
									<div className="text-center">
										<Image
											preview={false}
											src="/othoba-mart-logo-light.png"
											alt="Othoba Mart"
										/>
									</div>
								</Link>
							</div>
						</Col>

						{/* search */}
						<Col
							xs={0}
							sm={0}
							md={13}
							lg={16}
							style={{ position: "relative" }}
						>
							<div className="flex w-11/12 lg:w-10/12 xl:w-9/12 mx-auto">
								<input
									type="search"
									className="block w-full px-5 py-2 xl:py-3 text-small text-gray-700 border border-solid border-gray-300 rounded-l-3xl focus:text-gray-700 focus:border-orange-500 focus:outline-none"
									placeholder="I'm searching for..."
									onChange={(e) =>
										e.target.value === ""
											? setSearchText(null)
											: setSearchText(e.target.value)
									}
								/>
								<div className="pl-1 pr-1 lg:pr-3 text-small text-gray-700 border border-solid border-gray-300 active:text-gray-700 active:border-orange-500 active:outline-none bg-white m-0 ">
									<select className="outline-none bg-white h-full py-2 xl:py-3 border-0 px-0 lg:px-3">
										<option value={"product"}>
											Products
										</option>
										<option value={"categories"}>
											Categories
										</option>
										<option value={"sub-categories"}>
											Tags
										</option>
									</select>
								</div>
								<button
									className={`btn inline-block py-2 xl:py-3 px-3 lg:px-5 bg-orange-500 text-white font-medium text-xl rounded-r-3xl hover:bg-orange-400 focus:bg-orange-400 focus:outline-none flex items-center ${
										loading && "cursor-not-allowed"
									}`}
									type="button"
									onClick={handleSearch}
									disabled={loading}
								>
									<SearchOutlined />
								</button>
							</div>

							{/* searchResult */}
							{showResult && (
								<div className="absolute z-10 top-12 w-full pl-8 pr-12">
									<div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto p-5 bg-white shadow relative">
										<div className="absolute z-10 top-1 lg:top-3 right-2 lg:right-4">
											<CloseOutlined
												className=" text-lg lg:text-xl font-bold"
												onClick={() =>
													setShowResult(false)
												}
											/>
										</div>
										{searchData.slice(0, 5).map((item) => (
											<Link
												href={`/product/${item._id}`}
												passHref
												key={item._id}
											>
												<Row
													gutter={16}
													align="middle"
													className="cursor-pointer border-b hover:text-orange-500"
												>
													<Col xs={6} xl={4} xxl={3}>
														<Image
															preview={false}
															src={item.photo}
															alt={
																item.product_name
															}
														/>
													</Col>
													<Col
														xs={18}
														xl={20}
														xxl={21}
													>
														<p>
															{item.product_name}
														</p>

														{item.product_price && (
															<p className="mt-0 lg:mt-3">
																Price:{" "}
																{
																	item.product_price
																}
															</p>
														)}
													</Col>
												</Row>
											</Link>
										))}
									</div>
								</div>
							)}
						</Col>

						<Col
							xs={12}
							sm={12}
							md={5}
							lg={4}
							className="text-right"
						>
							<Row gutter={16} align="middle" justify="end">
								<Col>
									<Dropdown
										overlay={menu}
										onClick={(e) => e.preventDefault()}
									>
										<UserOutlined
											className="text-3xl"
											style={{ color: "#f66a05" }}
										/>
									</Dropdown>
								</Col>

								<Col style={{ position: "relative" }}>
									<Badge count={wish.length} size="small">
										<HeartOutlined
											className="text-3xl"
											style={{ color: "#f66a05" }}
											onClick={() =>
												setActiveWish(!activeWish)
											}
										/>
									</Badge>
									<WishMini
										activeWish={activeWish}
										setActiveWish={setActiveWish}
									/>
								</Col>

								<Col style={{ position: "relative" }}>
									<Badge count={cart.length} size="small">
										<ShoppingOutlined
											className="text-3xl"
											style={{ color: "#f66a05" }}
											onClick={() =>
												setActiveCart(!activeCart)
											}
										/>
									</Badge>
									<CartMini
										activeCart={activeCart}
										setActiveCart={setActiveCart}
									/>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
				<br />
				<hr />
			</div>
		</header>
	);
};

export default HomeHeader;

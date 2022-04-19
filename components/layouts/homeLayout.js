import {
	CloseOutlined,
	HeartOutlined,
	MenuOutlined,
	SearchOutlined,
	ShoppingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Badge, Col, Dropdown, Image, Layout, Menu, Row } from "antd";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { API_BASE_URL } from "../../apiconstants";
import CartMini from "../cart/CartMini";
import HomeFooter from "../Footer/HomeFooter";
import HomeMenu from "../menues/homeMenu";

const { Content, Footer } = Layout;

const HomeLayout = ({ children, title }) => {
	const [active, setActive] = useState(false);
	const [visible, setVisible] = useState(false);
	const [searchText, setSearchText] = useState(null);
	const [searchItem, setSearchItem] = useState("product");
	const [showResult, setShowResult] = useState(false);
	const [searchData, setSearchData] = useState([]);
	const [loading, setLoading] = useState(false);

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
		setLoading(true);
		axios
			.get(
				`${API_BASE_URL}/product?item=${searchItem}&search=${searchText}`
			)
			.then((res) => {
				setSearchData(res.data.result);
				setShowResult(true);
				setLoading(false);
			})
			.catch(() => {
				setShowResult(false);
				setLoading(false);
			});
	};

	return (
		<Layout>
			<Head>
				<title>{title || "Othoba Mart"}</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

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
									<div className="text-center">
										<Image
											preview={false}
											src="/othoba-mart-logo.png"
											alt="Othoba Mart"
										/>
									</div>
								</div>
							</Col>

							{/* search */}
							<Col
								xs={0}
								sm={0}
								md={12}
								lg={16}
								style={{ position: "relative" }}
							>
								<div className="flex w-4/5 lg:w-3/5 mx-auto">
									<input
										type="search"
										className="block w-full px-5 py-3 text-small text-gray-700 border border-solid border-gray-300 rounded-l-3xl focus:text-gray-700 focus:border-orange-500 focus:outline-none"
										placeholder="I'm searching for..."
										onChange={(e) =>
											e.target.value === ""
												? setSearchText(null)
												: setSearchText(e.target.value)
										}
									/>
									<select
										className="block px-5 py-3 text-small text-gray-700 border border-solid border-gray-300 focus:text-gray-700 focus:border-orange-500 focus:outline-none bg-white m-0 "
										onChange={(e) =>
											setSearchItem(e.target.value)
										}
									>
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
									<button
										className={`btn inline-block py-3 px-5 bg-orange-500 text-white font-medium text-xl rounded-r-3xl hover:bg-orange-400 focus:bg-orange-400 focus:outline-none flex items-center ${
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
										<div className="w-4/5 lg:w-3/5 mx-auto p-5 bg-white shadow relative">
											<div className="absolute z-10 top-1 lg:top-3 right-2 lg:right-4">
												<CloseOutlined
													className=" text-lg lg:text-2xl font-bold"
													onClick={() =>
														setShowResult(false)
													}
												/>
											</div>
											{searchData
												.slice(0, 9)
												.map((item) => (
													<Row
														gutter={16}
														align="middle"
														key={item._id}
													>
														<Col xs={6}>
															<Image
																preview={false}
																src={
																	item.product_img
																}
																alt={
																	item.product_name
																}
															/>
														</Col>
														<Col xs={18}>
															<p>
																{
																	item.product_name
																}
															</p>
														</Col>
													</Row>
												))}
										</div>
									</div>
								)}
							</Col>

							<Col
								xs={12}
								sm={12}
								md={6}
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
									<Col>
										<HeartOutlined
											className="text-3xl"
											style={{ color: "#f66a05" }}
										/>
									</Col>
									<Col style={{ position: "relative" }}>
										<Badge count={1} size="small">
											<ShoppingOutlined
												className="text-3xl"
												style={{ color: "#f66a05" }}
												onClick={() =>
													setActive(!active)
												}
											/>
										</Badge>
										<CartMini
											active={active}
											setActive={setActive}
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

			{/* Top menu */}
			<div className="bg-white">
				<div className="container mx-auto hidden lg:block">
					<HomeMenu visible={visible} setVisible={setVisible} />
				</div>
			</div>

			<Content style={{ minHeight: "90vh", backgroundColor: "white" }}>
				<div className="container mx-auto px-3 lg:px-0">{children}</div>
			</Content>
			<Footer className="bg-gray-50 px-2">
				<HomeFooter />
			</Footer>
		</Layout>
	);
};

export default HomeLayout;

import {
	HeartOutlined,
	MenuOutlined,
	SearchOutlined,
	ShoppingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Badge, Col, Image, Input, Layout, Row } from "antd";
import Head from "next/head";
import { useState } from "react";
import CartMini from "../cart/CartMini";
import HomeFooter from "../Footer/HomeFooter";
import HomeMenu from "../menues/homeMenu";

const { Search } = Input;

const { Content, Footer } = Layout;

const HomeLayout = ({ children, title }) => {
	const [active, setActive] = useState(false);
	const [visible, setVisible] = useState(false);

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
							<Col xs={0} sm={0} md={12} lg={16}>
								<div className="flex w-4/5 lg:w-3/5 mx-auto">
									<input
										type="search"
										className="block w-full px-5 py-3 text-small text-gray-700 border border-solid border-gray-300 rounded-l-3xl focus:text-gray-700 focus:border-orange-500 focus:outline-none"
										placeholder="I'm searching for..."
									/>
									<button
										className="btn inline-block py-3 px-5 bg-orange-500 text-white font-medium text-xl rounded-r-3xl hover:bg-orange-400 focus:bg-orange-400  focus:outline-none flex items-center"
										type="button"
									>
										<SearchOutlined />
									</button>
								</div>
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
										<UserOutlined
											className="text-3xl"
											style={{ color: "#f66a05" }}
										/>
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

			{/* header menu area  */}
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

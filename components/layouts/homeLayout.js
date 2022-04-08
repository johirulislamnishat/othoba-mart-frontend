import {
	LikeOutlined,
	SearchOutlined,
	ShoppingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Col, Input, Layout, Row } from "antd";
import Head from "next/head";
import React from "react";
import HomeFooter from "../Footer/HomeFooter";
import HomeMenu from "../menues/homeMenu";

const { Search } = Input;

const { Content, Footer } = Layout;

const HomeLayout = ({ children, title }) => {
	const onSearch = (e) => {
		console.log(e);
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
				<div className="bg-blue-300 py-5 px-3 lg:px-0">
					<div className="container mx-auto">
						<Row justify="space-between" align="middle">
							<Col
								xs={7}
								sm={6}
								md={6}
								lg={4}
								className="text-left"
							>
								Othoba Mart
							</Col>

							<Col xs={7} sm={12} md={12} lg={16}>
								<div className="hidden sm:block text-center">
									<Search
										placeholder="I'm searching for..."
										onSearch={onSearch}
										allowClear
										enterButton
									/>
								</div>
								<div className="block sm:hidden">
									<SearchOutlined />
								</div>
							</Col>
							<Col
								xs={10}
								sm={6}
								md={6}
								lg={4}
								className="text-right"
							>
								<Row gutter={16} align="middle" justify="end">
									<Col>
										<UserOutlined />
									</Col>
									<Col>
										<ShoppingOutlined />
									</Col>
									<Col>
										<LikeOutlined />
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
				</div>
				<div className="container mx-auto">
					<HomeMenu />
				</div>
			</header>

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
